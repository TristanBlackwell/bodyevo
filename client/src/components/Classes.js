import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import classSignpost from "../images/signpost.jpg";

const query = `{
  covidNoticeCollection {
    items {
      id
      title
      body
      openDate
      openTimes
    }
  }
  classTableCollection {
    items {
      classes
    }
  }
}`

class Classes extends Component {

  constructor() {
    super();

    this.state = {
      result: null,
      notice: null,
      classes: null,
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
          if (notice.id == "1") {
            var classes = Object.keys(res.data.classTableCollection.items[0].classes).map((key) => [(key), res.data.classTableCollection.items[0].classes[key]]);
            this.setState({
              response: "Success",
              notice: notice,
              classes: classes,
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
                    {this.state.notices === "Error" ? <p>Error loading content</p> :
                    <p style={{whiteSpace: "pre-wrap"}}>
                      <b>
                      {this.state.notice.body}  
                      </b>
                    </p>}
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
                    {this.state.classes.map(classItem => {
                        return (
                          <tr key={classItem}>
                            <td className="classItem">{classItem[0]}</td>
                            <td className="classDescription">{classItem[1]}</td>
                          </tr>
                        )
                    })}
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
    } else {
      return (
        <div id="loading">
          <h1>Loading...</h1>
        </div>
      )
    }
  }
}

export default Classes;
