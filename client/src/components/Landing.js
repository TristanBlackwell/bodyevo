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
                  <div>
                    <b>
                      Unfortunately, due to the latest update of Covid-19 restrictions we have had to
                      close our doors once again. <br /><br/>
                      In line with the current guidelines we plan to re-open on the 4th December following the
                      relaxation of a national lockdown and hope to see all our ladies again before the year is out!

                      Be sure to check this site and our Facebook page for any further updates and we hope everyone
                      stays safe until we can join each other once again. <br/><br />

                      Sharon & Nicole<br /><br />

                      We are once again running Evo on demand video classes for everyone missing
                      classes and wishes to stay active over this lockdown. Check out our 
                      <a
                        href="https://www.facebook.com/pg/BodyEvoFitnessStudio/posts/?ref=page_internal"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{textDecoration: "underline"}}
                      > Facebook </a> to find about more!
                      {/*
                      In line with the latest government guidelines on Covid-19,
                      We can say with much happiness that BodyEvo is now once
                      again open!
                      <br /> We have worked continually to create the safest
                      possible environment to workout in and as a result have
                      some restrictions in place under reduced hours to protect
                      everyone involved whilst reviewing the changes we make.
                      <br />
                      <br />
                      The guidelines are as follows:
                      <ul id="guidelinesList">
                        <li>
                          Maximum 8 people in the gym (2 maximum for the
                          hydraulic room).
                        </li>
                        <li>
                          1 hour time slots to give all members an equal chance
                          at visiting the gym.
                        </li>
                        <li>
                          Social distancing will be in force for all members and
                          staff.
                        </li>
                        <li>
                          Hand sanitiser used on entering and leaving the gym
                          with all equipment cleaned after use
                        </li>
                        <li>Card payments are preferred.</li>
                      </ul>
                      <br />
                      * Bookings are not currently required at this time *
                      <br />
                      <br />
                      These will be continually reviewed to create the smoothest
                      functioning gym we can whilst ensuring everyone is
                      protected.
                      <br />
                      <br />
                      We thank you for much for patiently waiting and joining us
                      online and are happy to get everyone back together for our
                          group sessions and for meeting some new ladies! */}
                      <div id="covidSignup" className="center">
                        <NavLink
                          to="/ourGym"
                          id="covidSignupButton"
                          className="btn-large waves-effect waves-light"
                        >
                          Sign Up Today
                        </NavLink>
                      </div>
                    </b>
                  </div>
                  <b></b>
                </div>
                <div className="card-action" id="reopeningDate">
                  Opening date: 4th December
                  <br />
                  <br />
                  Opening hours -
                  <br />
                  <div id="openingHours">
                    <div>
                      <span> Mon - Thurs :</span>
                      <span> 8:30AM - 1PM / 4PM - 8PM</span>
                    </div>
                    <div>
                      <span> Fri :</span>
                      <span> 8:30AM - 1PM / 4PM - 6PM</span>
                    </div>
                    <div>
                      <span> Sat :</span>
                      <span> 8:30AM - 12PM</span>
                    </div>
                    <div>
                      <span> Sun :</span>
                      <span> Closed</span>
                    </div>
                  </div>
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
                  If these dont suit you fill out our{" "}
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
                  Treat yourself to a soothing massage and relieve tension
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
