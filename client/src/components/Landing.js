import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <h1 className="header center" id="landingTitle">
                Bodyevo
              </h1>
              <div className="row center">
                <h5 className="header col s12 light">
                  A friendly ladies only gym based on the outskirts of Witney
                </h5>
              </div>
              <div className="row center" id="heroButton">
                <NavLink
                  to="/contact"
                  id="download-button"
                  className="btn-large waves-effect waves-light"
                >
                  Book a free trial
                </NavLink>
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="parallax" id="hero" />
        </div>

        <div className="container covidAlert">
          <div className="col s12 m6 l6 center">
            <h2 className="header">Covid-19 Notice</h2>
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    <b>
                      With the ongoing situation regarding Covid-19, BodyEvo
                      remains shut due to guidelines. Sharon and Nicole are
                      working to have the gym ready in the best way possible for
                      you to have a safe and effective space to workout once you
                      return. As soon as we can determine an opening date you
                      can find it here or on our Facebook.
                      <br />
                      <br />
                      Protection, cleanliness and safety are our highest
                      priority before reopening and although things will look a
                      little different since you last stepped in, we can promise
                      the same friendly, local ladies only studio you're use to!
                      <br />
                      We thank you for much for patiently waiting and joining us
                      online and are eager to get everyone back together for our
                      group sessions and for meeting some new ladies.
                    </b>
                  </p>
                  <b></b>
                </div>
                <div className="card-action" id="reopeningDate">
                  Opening date: TBA
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center">
                    <NavLink to="/gymInfo">
                      <i className="material-icons" id="fitnessIcon">
                        fitness_center
                      </i>
                    </NavLink>
                  </h2>
                  <h5 className="center">Fully equipped gym</h5>
                  <p className="light">
                    The heavy lifting started with us! We have combined the best
                    aspects of HIIT, Strength training and Hard Core Pilates to
                    create a heart-pumping, full-body group fitness experience.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block" id="centerFeature">
                  <h2 className="center">
                    <NavLink to="/classes">
                      <i className="material-icons" id="groupIcon">
                        group
                      </i>
                    </NavLink>
                  </h2>
                  <h5 className="center">Tailored member experience</h5>
                  <p className="light">
                    Bodyevo has created a framework of classes to make your
                    journey best suited to you. Join alongside all our other
                    members and get in shape together and have fun doing it!
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center">
                    <NavLink to="/evoMassage">
                      <i className="fas fa-spa material-icons" id="tubicon"></i>
                    </NavLink>
                  </h2>
                  <h5 className="center">Get in shape then unwind</h5>
                  <p className="light">
                    Fitness is only the beginning. We offer in house massage
                    therapy, ranging from relaxation to a injury or sport rehab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light tagline">
                  The friendliest gym in Witney focused on improving{" "}
                  <em>you</em>
                </h5>
              </div>
            </div>
          </div>
          <div className="parallax" id="groupImage" />
        </div>
        <div id="indexContact">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h3>
                  <i className="mdi-content-send brown-text" />
                </h3>
                <h3>Contact Us</h3>
                <p className="light">
                  Give us a call directly on <strong>07985310161</strong> or by
                  email at <strong>body.evo@hotmail.com</strong>.<br />
                  <br />
                  if these dont suit you fill out our{" "}
                  <NavLink to="/contact" id="contactLink">
                    contact form
                  </NavLink>{" "}
                  and we'll get back to you as soon as we can!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-container valign-wrapper tagline">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">And finally.... Relax.</h5>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "18px",
                    letterSpacing: "1.5px",
                  }}
                >
                  treat yourself to a soothing massage and relieve tension
                </p>
              </div>
            </div>
          </div>
          <div className="parallax" id="massagingImage" />
        </div>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5>Get to know us</h5>
                <p>
                  We are a small gym group focused on improving the lives of
                  other ladies through fitness and communication. We'd love you
                  to join us on this journey and find out where it takes us and
                  the great stories we can share.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright valign-wrapper">
            <div className="container">© 2020 Copyright Bodyevo</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Landing;
