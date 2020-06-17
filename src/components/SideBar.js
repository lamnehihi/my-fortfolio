import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./SideBar.css";



class SideBar extends Component {
  render() {
    return (
      <div className='SideBar'>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src="https://cdn.glitch.com/1e4bb2b9-2471-425f-8d20-b8cc90ece1e5%2Fwork.svg?v=1592353215820" />
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <img src="https://cdn.glitch.com/1e4bb2b9-2471-425f-8d20-b8cc90ece1e5%2Fmail.svg?v=1592353342807" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src="https://cdn.glitch.com/1e4bb2b9-2471-425f-8d20-b8cc90ece1e5%2Fuser.svg?v=1592353381855" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar;
