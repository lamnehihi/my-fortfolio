import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Row, Col } from "antd";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Pagination } from "antd";

import "./Header.css";

import "./Blogs.css";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      minValue: 0,
      maxValue: 6,
    };
    this.perPage = 6;
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

  componentDidUpdate() {
    //this.callAPI();
  }

  showTotal(total) {
    return (total) => `Total ${this.state.posts.length} items`;
  }

  handleChange = (value) => {
    this.setState({
      minValue: (value - 1) * this.perPage,
      maxValue: value * this.perPage,
    });
  };

  render() {
    const { Meta } = Card;
    const { posts } = this.state;
    return (
      <div>
        <div className="Header">
          <h1 className="title">
            my <span>blogs</span>
          </h1>
          <span className="background">posts</span>
        </div>

        <div className="Blogs">
          {posts
            .slice(this.state.minValue, this.state.maxValue)
            .map((item, index) => (
              <Col lg={{ span: 6, offset: 2 }} xs={{ span: 24 }} key={index}>
                <Card

                  cover={<img alt="example" src={item.cover} />}
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
            ))}
        </div>
        <Pagination
          current={1}
          defaultCurrent={1}
          defaultPageSize={this.perPage} //default size of page
          onChange={this.handleChange}
          total={posts.length} //total number of card data available
          className="pagination"
        />
      </div>
    );
  }
}

export default Blogs;
