import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Landing from "./components/Landing";
import OurGym from "./components/OurGym";
import Classes from "./components/Classes";
import EvoMassage from "./components/EvoMassage";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/ourgym" component={OurGym} />
          <Route path="/classes" component={Classes} />
          <Route path="/evomassage" component={EvoMassage} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
