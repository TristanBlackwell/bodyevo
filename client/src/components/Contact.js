import React, { Component } from "react";

class Contact extends Component {
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
                action="https://formspree.io/mnqgdwgv"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="input-field col s12 m6">
                    <input
                      id="first_name"
                      name="firstname"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="first_name">First Name *</label>
                  </div>
                  <div className="input-field col s12 m6">
                    <input
                      id="last_name"
                      name="lastname"
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
                      placeholder="How can we help?"
                      required
                      defaultValue={""}
                    />
                    <label htmlFor="textarea1">Message</label>
                  </div>
                </div>
                <div className="row center" id="submitForm">
                  <input
                    type="submit"
                    id="submitButton"
                    className="btn-large waves-effect waves-light"
                    defaultValue="Send"
                  />
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
