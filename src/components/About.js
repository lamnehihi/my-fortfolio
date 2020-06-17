import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./About.css";
import "./Header.css";

class About extends Component {
  render() {
    return (
      <div>
      <div className="Header">
          <h1 className="title">
            about <span>me</span>
          </h1>
          <span className="background">resume</span>
        </div>


      </div>
    );
  }
}

export default About;
