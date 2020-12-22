import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import evoMassageLogo from "../images/evoMassage.png";

const query = `
{
  covidNoticeCollection {
    items {
      id
      title
      body
      openDate
      openTimes
    }
  }
  evoTreatmentCollection {
    items {
      title
      description
      pricing
    }
  }
}
`

class EvoMassage extends Component {

  constructor() {
    super();

    this.state = {
      response: null,
      data: null,
      notice: null,
      treatments: null,
      loaded: false
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_CONTENTFUL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + process.env.REACT_APP_TOKEN,
      },
      body: JSON.stringify({query})
    })
    .then(res => res.json())
    .then(res => {
      if (res.errors) {
        this.setState({
          response: "Error",
          loaded: true
        })
      } else {
        res.data.covidNoticeCollection.items.forEach(notice => {
          if (notice.id == "2") {
            var treatments = Object.keys(res.data.evoTreatmentCollection.items).map((key) => [res.data.evoTreatmentCollection.items[key]]);
          this.setState({
            response: "Success",
            data: res.data.evoTreatmentCollection,
            notice: notice,
            treatments: treatments,
            loaded: true
        })
          }
        })
      }
    })
  }

  render() {

    if (this.state.loaded) {
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
                    <p style={{whiteSpace: "pre-wrap"}}>
                      <b>
                        {this.state.notice.body}
                      </b>
                    </p>
                    <b></b>
                  </div>
                  <div className="card-action" id="waitingList">
                    <NavLink to="/contact">
                      Please call or email to book an appointment
                    </NavLink>
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
          <p id="evoDesc">
            <b>
              We aim to cater to everyones needs whatever they may be. This list
              is not everything we have to offer but just our key and most
              commonly requested treatments. Being a Body evo member is not
              required in order to use Evo massage and should you wish to book a
              session or ask a question just pop in or give us a call on
              07985310161. We look forward to seeing you!
            </b>
          </p>
          <div className="container treatments">
            <div className="row">
              {this.state.treatments.map(treatment => {
                return (
                  <div key={treatment[0].title} className="col s12 m6 l4">
                    <div className="card">
                      <div className="card-content">
                        <span className="card-title">{treatment[0].title}</span>
                        <p>{treatment[0].description}</p>
                      </div>
                        {Object.entries(treatment[0].pricing).map(([key, value]) => {
                          return (
                            <div key={key}className="card-action">
                              <a href="#!">{key}</a>
                              <a href="#!">{value}</a>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <footer>
            <div className="footer-copyright valign-wrapper">
              <div className="container">© 2020 Copyright Bodyevo</div>
            </div>
          </footer>
        </div>
      );
    } else {
      return (
        <div id="loading">
          <h1>Loading...</h1>
        </div>
      )
    }
  }
}

export default EvoMassage;
