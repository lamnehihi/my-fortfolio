import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Index.js"
import Blogs from "./components/Blogs.js"
import About from "./components/About.js"
import Header from "./components/Header.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>              
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          
          <Header />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blog">
              <Blogs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
