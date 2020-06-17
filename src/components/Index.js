import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Row, Col } from "antd";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./Index.css";
import "./Header.css";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  callAPI() {
    fetch("http://localhost:9000/api/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            posts: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { Meta } = Card;
    const { posts } = this.state;
    console.log(posts);
    return (
      <div>
        <div className="Header">
          <h1 className="title">
            my <span>portfolio</span>
          </h1>
          <span className="background">works</span>
        </div>
        <div className="Index">
          {posts.slice(5).map((item, index) => (
            <Col span={6} offset={2}>
              <img alt="example" src={item.cover} />
            </Col>
          ))}
        </div>
      </div>
    );
  }
}

export default Index;
