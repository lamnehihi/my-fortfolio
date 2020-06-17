import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./SideBar.css";

import index from "../img/work.svg";
import blogs from "../img/mail.svg";
import about from "../img/user.svg";


class SideBar extends Component {
  render() {
    return (
      <div className='SideBar'>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src={index}/>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <img src={blogs}/>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src={about}/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar;
