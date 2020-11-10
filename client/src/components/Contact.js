import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      status: "",
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    return (
      <div>
        <div className="section no-pad-bot gymHeader">
          <div id="contactHero" className="gymHeader">
            <h2 className="center">Need to get in touch?</h2>
            <p className="center">Send us a message or give us a ring</p>
          </div>
        </div>
        <div id="formArea">
          <div id="formSection" className="container">
            <div className="row">
              <form
                className="col s8 offset-s2"
                name="contact_form"
                action="https://formspree.io/xqkydabn"
                onSubmit={this.submitForm}
                method="POST"
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="input-field col s12 m6">
                    <input
                      id="first_name"
                      name="first name"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="first_name">First Name *</label>
                  </div>
                  <div className="input-field col s12 m6">
                    <input
                      id="last_name"
                      name="last name"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="last_name">Last Name *</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="validate"
                      required
                    />
                    <label htmlFor="email">Email *</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="phone">Phone number</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="textarea1"
                      name="message"
                      className="materialize-textarea"
                      required
                      defaultValue={""}
                    />
                    <label htmlFor="textarea1">Message</label>
                  </div>
                </div>
                <div className="row center" id="submitForm">
                  {this.state.status === "SUCCESS" ? (
                    <p style={{ color: "#252523", fontFamily: "Montserrat" }}>
                      Thanks!
                    </p>
                  ) : (
                    <button
                      className="btn-large waves-effect waves-light"
                      id="submitButton"
                      defaultValue="Send"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Submit
                    </button>
                  )}
                  {this.state.status === "ERROR" && (
                    <p style={{ color: "#252523", fontFamily: "Montserrat" }}>
                      Ooops! There was an error.
                    </p>
                  )}
                </div>
              </form>
            </div>
            <h6 className="center">
              Not what you were looking for? <br />
              <br />
              Phone: 07985310161
              <br />
              <br />
              Email: bodyevo@hotmail.com <br />
              <br />
              Facebook:
              <a
                href="https://www.facebook.com/pg/BodyEvoFitnessStudio/posts/?ref=page_internal"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Send us a message
              </a>
            </h6>
          </div>
        </div>
        <footer>
          <div className="footer-copyright valign-wrapper">
            <div className="container">© 2020 Copyright Bodyevo</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Contact;
