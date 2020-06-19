import React, { Component } from "react";

import evoMassageLogo from "../images/evoMassage.png";

class EvoMassage extends Component {
  render() {
    return (
      <div>
        <div id="beautyHero" className="gymHeader">
          <h2 className="center">Evo massage</h2>
          <p className="center">Massage therapy for greater wellbeing</p>
        </div>
        <div className="container covidAlert">
          <div className="col s12 m6 l6 center">
            <h2 className="header">Covid-19 Notice</h2>
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    <b>
                      As a result of Covid-19, Evo massage is currently shut
                      under the current government guidelines. We aim to open as
                      soon as we can safetly do so while keeping clients safe.
                      If you are interested in having treament at the earliest
                      possible date please use the link below to join the
                      waiting list and hopefully we can find a date best for
                      you!
                    </b>
                  </p>
                  <b></b>
                </div>
                <div className="card-action" id="waitingList">
                  <a
                    href="https://www.waitlistr.com/lists/9bf3ec22/evo-massage-lockdown-release-waiting-list"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here for our waiting list
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="srBio">
          <div className="row">
            <div className="col center s12 m12 l6">
              <img src={evoMassageLogo} alt="Sharon" id="bioImage" />
            </div>
            <div className="col s12 m12 l6">
              <h3 className="center">Meet Sharon</h3>
              <h5 className="center" id="srProfession">
                Level 5 Sports Massage Therapist
              </h5>
              <p>
                Hello, my name is Sharon. Alongside running Body evo with my
                great team I offer massage and rehab therapy through Evo
                Massage.
                <br />
                <br />
                My aim is to help fellow ladies in not only getting fit through
                our classes and gym but with avoiding all the aches and tension
                that can be built up daily through the busy lives we all lead.
                Having massage therapy is great to supplement your training
                regime and we have many different services on offer to suit
                particular requirements or needs.
                <br />
                Please see below some of what we offer and if theres anything
                you may be unsure of or have a question to ask feel free to get
                in touch or find me at the gym for a chat!
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="divider" />
        <h3 className="center" id="sliderTitle">
          Some of our treatments
        </h3>
        <p className="center" id="sliderTitleSub">
          <b>Below are a selection of the key massage treatments we offer</b>
        </p>
        <div className="container treatments">
          <div className="row">
            <div className="col s12 m6 l4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Relaxation</span>
                  <p>
                    A comforting long stroke massage aimed at generally removing
                    any aches and helping promote blood flow around the body.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#!">30 minutes</a>
                  <a href="#!">£24.50</a>
                </div>
                <div className="card-action">
                  <a href="#!">1 hour</a>
                  <a href="#!">£45</a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Deep Tissue Massage</span>
                  <p>
                    higher pressure massage targetting the deeper layers of
                    muscles and tissue. Helps aid recovery while also removing
                    nagging pains or tightness.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#!">30 minutes</a>
                  <a href="#!">£23.50</a>
                </div>
                <div className="card-action">
                  <a href="# ">1 hour</a>
                  <a href="# ">£45</a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Sports Injuries</span>
                  <p>
                    For those sufferring from previous injuries causing
                    difficulty in day to day life or training. This massage is
                    for relieving such struggles and returning to training.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#!">Duration varies</a>
                  <a href="#!">Price varies</a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Rehab</span>
                  <p>
                    Site-specific treatment with an aim for your ideal goal or
                    outcome. develop a personal plan for rehabbing and getting
                    back on track as soon as possible.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#!">Duration varies</a>
                  <a href="#!">Price varies</a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Neck &amp; Shoulders</span>
                  <p>
                    Suffering from headaches, neck pain or general tension? This
                    shorter, more focused massage is designed to combat daily
                    accumulated stress at its origin.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#!">Duration varies</a>
                  <a href="#!">£12.50 - £25</a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Sports Massage</span>
                  <p>
                    targetted soft tissue massage. Assists in correcting
                    imbalances from repetitive movements, preventing injury and
                    increasing flexibility
                  </p>
                </div>
                <div className="card-action">
                  <a href="#!">
                    30 Minutes
                    <br /> (1 area)
                  </a>
                  <a href="#!">£25.50</a>
                </div>
                <div className="card-action">
                  <a href="#!">1 hour (2+ areas)</a>
                  <a href="#!">£40</a>
                </div>
              </div>
            </div>
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

export default EvoMassage;
