import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import classSignpost from "../images/signpost.jpg";

class Classes extends Component {
  render() {
    return (
      <div>
        <div id="classesHero" className="gymHeader">
          <h2 className="center">Classes</h2>
          <p className="center">Crafted around our members</p>
        </div>
        <div className="container covidAlert">
          <div className="col s12 m6 l6 center">
            <h2 className="header">Covid-19 Notice</h2>
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    <b>
                      Due to Covid-19, the operation and timings of classes have
                      changed and may continue to be as we move out of this
                      situation. For the safety of yourself and the other ladies
                      participating in our classes the experience may be
                      slightly different to suit current guidelines however we
                      aim as always to provide the best service we can suited to
                      you.
                      <br />
                      <br />* Please do contact us in order to recieve the most
                      up to date timetable and information relating to Body evo.
                      Thank you *
                    </b>
                  </p>
                  <b></b>
                </div>
                <div className="card-action" id="contactAlert">
                  <NavLink to="/contact">Click here to get in touch</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="classesSummary">
          <div className="container center">
            <div className="row">
              <div className="col s8 offset-s2">
                <p id="classesHeader">
                  Our classes run throughout the day.
                  <br />
                  <strong>
                    Suitable for all age ranges and fitness levels.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container center" id="benefits">
          <div className="row">
            <div className="col s4">
              <i className="fas fa-fire" />
            </div>
            <div className="col s4">
              <i className="fas fa-angle-double-right" />
            </div>
            <div className="col s4">
              <i className="fas fa-dumbbell" />
            </div>
          </div>
        </div>
        <div className="container center" id="benefitsText">
          <div className="row">
            <p className="col s4">Fat-burn</p>
            <p className="col s4">Cardio</p>
            <p className="col s4">Tone</p>
          </div>
        </div>
        <div id="classes">
          <div className="center" id="bookClass">
            <a
              className="waves-effect waves-light btn-large"
              href="https://bookwhen.com/bodyevo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a class
            </a>
            <p>Non members are always welcome too!</p>
          </div>
        </div>

        <div className="divider" />

        <div className="row" id="tableSection">
          <div className="col s12 m7 offset-m1">
            <div id="classesTable">
              <table>
                <thead>
                  <tr>
                    <th className="classItem">Class</th>
                    <th className="classDescription">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="classItem">Boogie Bounce Tone</td>
                    <td className="classDescription">
                      A 45 minute trampoline session, with 30 minutes of cardio
                      and 15 minutes of toning.
                    </td>
                  </tr>
                  <tr>
                    <td className="classItem">Boogie Bounce Revolution</td>
                    <td className="classDescription">
                      A 30 minute circuit class. alternating 45 seconds on the
                      trampoline and 45 seconds on a mat
                    </td>
                  </tr>
                  <tr>
                    <td className="classItem">321 Fat Blaster</td>
                    <td className="classDescription">
                      HIIT training consisting of 3 minute strength exercises, 2
                      minutes cardio and 1 minute abs. Burn 2x the belly fat and
                      boost your metabolism for up to 48hrs after!
                    </td>
                  </tr>
                  <tr>
                    <td className="classItem">Evo Circuits</td>
                    <td className="classDescription">
                      30 minute full body workout focusing on maximum effort in
                      a short amount of time for the most bang for your buck. A
                      great all rounder suitable for any fitness level.
                    </td>
                  </tr>
                  <tr>
                    <td className="classItem">Piloxing</td>
                    <td className="classDescription">
                      The fusion class of boxing, Pilates and Dance. Remain in
                      the fat burning zone and increase upper body strength and
                      stamina to burn up to a 1000 calories in 45 minutes.
                    </td>
                  </tr>
                  <tr>
                    <td className="classItem">PureStretch</td>
                    <td className="classDescription">
                      A class designed for all members aimed at working on your
                      flexibily and mobility through yoga rather than strength
                      training. A great complement to any previous classes.
                    </td>
                  </tr>
                  <tr>
                    <td className="classItem">Pole tricks</td>
                    <td className="classDescription">
                      Join us for a pole fitness class to feel sleek and sexy
                      alongside our fully qualified instructor
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col s2 offset-s1">
            <div className="classImgContainer">
              <img
                src={classSignpost}
                alt="classes post"
                width="125%"
                height="110%"
              />
            </div>
          </div>
        </div>
        <div className="center" id="timetable">
          <p>
            For a full up to date timetable please contact us at{" "}
            <NavLink to="/contact" id="emailLink">
              bodyevo@hotmail.com
            </NavLink>
          </p>
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

export default Classes;
