import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./SideBar.css";

import index from "https://cdn.glitch.com/1e4bb2b9-2471-425f-8d20-b8cc90ece1e5%2Fwork.svg?v=1592353215820";
import blogs from "https://cdn.glitch.com/1e4bb2b9-2471-425f-8d20-b8cc90ece1e5%2Fmail.svg?v=1592353342807";
import about from "https://cdn.glitch.com/1e4bb2b9-2471-425f-8d20-b8cc90ece1e5%2Fuser.svg?v=1592353381855";


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
