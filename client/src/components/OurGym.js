import React, { Component } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { NavLink } from "react-router-dom";

import gympic1 from "../images/gymPic1.jpg";
import treadmill from "../images/treadmillResize.jpg";
import gympic3 from "../images/gymPic3.jpg";

const stripePromise = loadStripe(
  "pk_test_51Gv1QaJa7Om5U5Hjj7FuuVFtdUKuekOtdgNQQp9IddIgqasRWOR01j7glOYuEm7DOHeDr5BkM7djujPQOGckcmvN003iBMqqFD"
);

class OurGym extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agreed: false,
    };

    this.changeAgreed = this.changeAgreed.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.checkTerms = this.checkTerms.bind(this);
  }

  handleSubscribe = async (price) => {
    // When button clicked redirect to checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: price, quantity: 1 }],
      mode: "subscription",
      successUrl: "https://body-evo-witney.co.uk/ourgym",
      cancelUrl: "https://body-evo-witney.co.uk/ourgym",
    });
    console.log(error.message);
  };

  checkTerms(price) {
    if (this.state.agreed === true) {
      this.handleSubscribe(price);
    } else {
      alert(
        "You must agree to the contract and questionnaire before you can continue."
      );
    }
  }

  changeAgreed() {
    this.setState({
      agreed: !this.state.agreed,
    });
  }

  render() {
    return (
      <div>
        <div className="section no-pad-bot gymHeader">
          <div id="gymHero" className="gymHeader">
            <h2 className="center">Start Today</h2>
            <p className="center">Begin a new evolution of fitness</p>
          </div>
        </div>
        <div>
          <div className="container">
            <p className="center" id="gymInfoText">
              Begin your journey with a 30 minute free trial session working
              with a team member through our circuits learning the fundamental
              movements and how the gym functions with our unique style of
              training.
              <br />
              <br />
              Once this session is completed we are eager to welcome you to our
              regular class schedule and take your first steps into Body evo.
            </p>
          </div>
        </div>
        <div className="divider" />
        <div className="info">
          <div className="row cardItem" id="card1">
            <div className="col s12 m12 l6 cardImage">
              <img
                src={gympic1}
                alt="our gym"
                width="100%"
                height="auto"
                id="gymImg"
              />
            </div>
            <div className="col s12 m12 l6 cardText">
              <h5 className="center">
                <i className="fas fa-fire-alt" /> Customised circuits
              </h5>
              <br />
              <p>
                our team has created unique 30 minute machine circuits designed
                to help your body get tightened and toned. Our machines are
                designed to remove stress away from the joints reducing the
                chance of injuries and making it suitable for all ladies even
                those with any health conditions.
              </p>
            </div>
          </div>
          <div className="row cardItem" id="middleCard">
            <div className="col s12 m12 l6 cardText">
              <h5 className="center">
                <i className="fas fa-running" /> Fully equipped gym
              </h5>
              <br />
              <p>
                The dedicated cardio room is filled with the latest equipment
                such as treadmills, bikes, crosstrainers and rowing machines all
                of which we can advise you on for the most effective workouts.
                When your not taking part in a circuit, jump on any of these
                machines and watch the transformation happen.
              </p>
            </div>
            <div className="col s12 m12 l6 cardImage">
              <img
                src={treadmill}
                alt="treadmills"
                width="100%"
                height="700px"
                id="treadmillImg"
              />
            </div>
          </div>
          <div className="row cardItem">
            <div className="col s12 m12 l6 cardImage">
              <img
                src={gympic3}
                alt="hula hoops"
                width="100%"
                height="auto"
                id="hoopsImg"
              />
            </div>
            <div className="col s12 m12 l6 cardText">
              <h5 className="center">
                <i className="fas fa-heartbeat" /> endless health benefits
              </h5>
              <br />
              <ul>
                <li>
                  <i className="fas fa-check" /> control your weight and gain
                  muscle
                </li>
                <li>
                  <i className="fas fa-check" /> Improve your mood, mental
                  health and sleep
                </li>
                <li>
                  <i className="fas fa-check" /> Feel more alive and energetic
                </li>
                <li>
                  <i className="fas fa-check" /> Rejuvenate your skin
                </li>
                <li>
                  <i className="fas fa-check" /> Become part of a strong
                  community
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section id="pricingSection">
          <h3 className="center">Our memberships</h3>
          <p className="center" id="membershipsText">
            Signing up is simple, straightforward and can be done in minutes.
            Read the membership contract and physical readiness questionnaire
            below prior to choosing a membership and once your ready just click
            the most suitable option to continue.
          </p>
          <div className="container">
            <label id="contractCheck">
              <input
                type="checkbox"
                className="filled-in"
                required
                id="contractAgree"
                onChange={this.changeAgreed}
                checked={this.state.agreed}
                autoComplete="off"
              />

              <span>
                By checking the box, I certify I have read and agree to the Body
                evo <a href="# ">membership contract</a> and have completed the{" "}
                <a href="# ">physical readiness questionnaire</a> to the best of
                my knowledge
              </span>
            </label>
          </div>

          <div id="memberships">
            <div className="section">
              <div className="row">
                <div className="col s12 m12 l6">
                  <div className="card" id="priceCard1">
                    <h2 className="center">
                      <i className="far fa-heart" />
                    </h2>
                    <h5 className="center">Gym only</h5>
                    <ul className="light cardList">
                      <li
                        onClick={() =>
                          this.checkTerms("price_1Gv1WgJa7Om5U5HjJbdu9H5O")
                        }
                      >
                        <i className="fas fa-angle-right" /> Single membership -
                        £23.95
                      </li>
                      <li
                        onClick={() =>
                          this.checkTerms("price_1Gv1WgJa7Om5U5Hj7mZK5P07")
                        }
                      >
                        <i className="fas fa-angle-right" /> Single membership 6
                        months - £119.00 <strong>(save £35)</strong>{" "}
                      </li>
                      <li
                        onClick={() =>
                          this.checkTerms("price_1Gv1WhJa7Om5U5HjSzz8HDsO")
                        }
                      >
                        <i className="fas fa-angle-right" /> Single membership
                        12 months - £240.00 <strong>(save £70)</strong>{" "}
                      </li>
                      <br />
                      <li
                        onClick={() =>
                          this.checkTerms("price_1Gv1YAJa7Om5U5HjAkcYP950")
                        }
                      >
                        <i className="fas fa-angle-right" /> Mother &amp;
                        Daughter membership - £42.99
                      </li>
                      <li
                        onClick={() =>
                          this.checkTerms("price_1Gv1ZrJa7Om5U5Hjf47RFaQT")
                        }
                      >
                        <i className="fas fa-angle-right" /> 16 and under -
                        £12.00 ( Parents consent required )
                      </li>
                      <li
                        onClick={() =>
                          this.checkTerms("price_1Gv1aeJa7Om5U5HjsURKkNbi")
                        }
                      >
                        <i className="fas fa-angle-right" /> Slimming world
                        members - £19.00
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col s12 m12 l6">
                  <div className="card" id="priceCard2">
                    <h2 className="center">
                      <i className="fas fa-heart" />
                    </h2>
                    <h5 className="center">Gym + Classes</h5>
                    <ul className="light cardList">
                      <li
                        onClick={() =>
                          this.checkTerms("price_1Gv1cHJa7Om5U5HjfL56Lpty")
                        }
                      >
                        <i className="fas fa-angle-right" /> Single membership -
                        £35.00
                      </li>
                      <li
                        onClick={() =>
                          this.checkTerms("price_1Gv1cHJa7Om5U5HjjoZYse0M")
                        }
                      >
                        <i className="fas fa-angle-right" /> Single membership
                        (6 months) - £175.00 <strong>(save £35)</strong>{" "}
                      </li>
                      <li
                        onClick={() =>
                          this.checkTerms("price_1Gv1cHJa7Om5U5HjQfSSISEd")
                        }
                      >
                        <i className="fas fa-angle-right" /> Single memberhip
                        (12 months) - £350.00 <strong>(save £70)</strong>
                      </li>
                      <br />
                      <li
                        onClick={() =>
                          this.checkTerms("price_1Gv1dMJa7Om5U5HjIIlk9GaF")
                        }
                      >
                        <i className="fas fa-angle-right" /> Mother &amp;
                        Daughter membership - £65.00
                      </li>
                      <li
                        onClick={() =>
                          this.checkTerms("price_1Gv1eKJa7Om5U5HjQPuGCeBm")
                        }
                      >
                        <i className="fas fa-angle-right" /> Student membership
                        - £19.00
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="center pricing">
            Once you arrive at the gym we will get you signed up (if you haven't
            done so online) and finalise any necessary paperwork and induction
            with our instructors.
          </p>
          <p className="center pricing">
            If you require any more information on memberships and pricing dont
            hesitate to{" "}
            <NavLink to="/contact" id="priceContact">
              get in touch
            </NavLink>
          </p>
        </section>
        <footer>
          <div className="footer-copyright valign-wrapper">
            <div className="container">© 2020 Copyright Bodyevo</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default OurGym;
