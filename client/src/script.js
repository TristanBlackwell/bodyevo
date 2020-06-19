function createCustomer() {
  let billingEmail;
}

function createPaymentMethod(cardElement, customerId, priceId) {
  return stripe
    .createPaymentMethod({
      type: "card",
      card: cardElement,
    })
    .then((result) => {
      if (result.error) {
        displayError(error);
      } else {
        createSubscription({
          customerId: customerId,
          paymentMethodId: result.paymentMethod.id,
          priceId: priceId,
        });
      }
    });
}

function createSubscription({ customerId, paymentMethodId, priceId }) {
  return (
    fetch("/create-subscription", {
      method: "post",
      headers: {
        "content-type": application / json,
        paymentMethodId: paymentMethodId,
        priceId: priceId,
      },
    })
      .then((response) => {
        return response.json();
      })
      // if declined display error to user
      .then((result) => {
        if (result.error) {
          // Error in attaching card to customer
          throw result;
        }
        return result;
      })
      // Normalise result to contain object from Stripe and add necessary details
      .then((result) => {
        return {
          paymentMethodId: paymentMethodId,
          priceId: priceId,
          subscription: result,
        };
      })
      .then(handlePaymentThatRequiresCustomerAction)
      .then(handleRequiresPaymentMethod)
      .then(onSubscriptionComplete)
      .catch((error) => {
        showCardError(error);
      })
  );
}

function handleCustomerActionRequired({
  subscription,
  invoice,
  priceId,
  paymentMethodId,
  isRetry,
}) {
  if (subscription && subscription.status === "active") {
    // subscription active so no action required
    return { subscription, priceId, paymentMethodId };
  }

  let paymentIntent = invoice
    ? invoice.payment_intent
    : subscription.latest_invoice.payment_intent;

  if (
    paymentIntent.status === "requires_action" ||
    (isRetry === true && paymentIntent.status === "requires_payment_method")
  ) {
    return stripe
      .confirmCardPayment(paymentIntent.client_secret, {
        payment_method: paymentMethodId,
      })
      .then((result) => {
        if (result.error) {
          throw result;
        } else {
          if (result.paymentIntent.status === "succeeded") {
            return {
              priceId: priceId,
              subscription: subscription,
              invoice: invoice,
              paymentMethodId: paymentMethodId,
            };
          }
        }
      })
      .catch((error) => {
        displayError(error);
      });
  } else {
    // No action needed
    return { subscription, priceId, paymentMethodId };
  }
}

function handlePaymentMethodRequired({
  subscription,
  paymentMethodId,
  priceId,
}) {
  if (subscription.status === "active") {
    // subscription is active, no customer actions required.
    return { subscription, priceId, paymentMethodId };
  } else if (
    subscription.latest_invoice.payment_intent.status ===
    "requires_payment_method"
  ) {
    // Using localStorage to manage the state of the retry here,
    // feel free to replace with what you prefer.
    // Store the latest invoice ID and status.
    localStorage.setItem("latestInvoiceId", subscription.latest_invoice.id);
    localStorage.setItem(
      "latestInvoicePaymentIntentStatus",
      subscription.latest_invoice.payment_intent.status
    );
    throw { error: { message: "Your card was declined." } };
  } else {
    return { subscription, priceId, paymentMethodId };
  }
}

function retryInvoiceWithNewPaymentMethod(
  customerId,
  paymentMethodId,
  invoiceId,
  priceId
) {
  return (
    fetch("/retry-invoice", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        customerId: customerId,
        paymentMethodId: paymentMethodId,
        invoiceId: invoiceId,
      }),
    })
      .then((response) => {
        return response.json();
      })
      // If the card is declined, display an error to the user.
      .then((result) => {
        if (result.error) {
          // The card had an error when trying to attach it to a customer.
          throw result;
        }
        return result;
      })
      // Normalize the result to contain the object returned by Stripe.
      // Add the addional details we need.
      .then((result) => {
        return {
          // Use the Stripe 'object' property on the
          // returned result to understand what object is returned.
          invoice: result,
          paymentMethodId: paymentMethodId,
          priceId: priceId,
          isRetry: true,
        };
      })
      // Some payment methods require a customer to be on session
      // to complete the payment process. Check the status of the
      // payment intent to handle these actions.
      .then(handlePaymentThatRequiresCustomerAction)
      // No more actions required. Provision your service for the user.
      .then(onSubscriptionComplete)
      .catch((error) => {
        // An error has happened. Display the failure to the user here.
        // We utilize the HTML element we created.
        displayError(error);
      })
  );
}
