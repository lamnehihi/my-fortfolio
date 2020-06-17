import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Index.js";
import Blogs from "./components/Blogs.js";
import About from "./components/About.js";
import SideBar from "./components/SideBar";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import { Layout } from "antd";

class App extends Component {
  render() {
    const { Footer, Sider, Content } = Layout;

    return (
      <Router>
        <div className="App">
          <Layout>
            <Layout>
              <Content className="body" style={{ height: '100%' }}>
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
              </Content>
              <Sider theme="light" width="100px">
                {" "}
                <SideBar />{" "}
              </Sider>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
