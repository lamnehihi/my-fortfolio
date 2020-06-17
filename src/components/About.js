import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Row, Col } from "antd";
import { Divider } from "antd";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./About.css";
import "./Header.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="Header">
          <h1 className="title">
            about <span>me</span>
          </h1>
          <span className="background">resume</span>
        </div>

        <div className="personal-info">
          <Row>
            <Col lg={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
              <h2>PERSONAL INFOS</h2>
              <div className="title">
                <div>
                  <p>
                    First Name : <span>Lam</span>
                  </p>
                  <p>
                    Last Name : <span>Nguyen</span>
                  </p>
                  <p>
                    Age : <span>20 Years</span>
                  </p>
                  <p>
                    Nationality : <span>Vietnamese</span>
                  </p>
                  <p>
                    Freelance : <span>Available</span>
                  </p>
                </div>

                <div>
                  <p>
                    Address :<span>Da Nang</span>
                  </p>
                  <p>
                    Phone : <span>0563980085</span>
                  </p>
                  <p>
                    Email : <span>thanhlamnguyenhuynh@gmail.com</span>
                  </p>
                  <p>
                    Facebook : <span>Nguyễn Huỳnh Thanh Lâm</span>
                  </p>
                  <p>
                    Langages : <span>Vietnamese, English</span>
                  </p>
                </div>
                <Button
                  type=""
                  shape="round"
                  icon={<UserOutlined />}
                  size="large"
                  className="btn-contact"
                >
                  Contact
                </Button>
              </div>
            </Col>
            <Col lg={{ span: 11 }} xs={{ span: 24 }}>
              <div className="panel">
                <div className="box">
                  <h3>2</h3>

                  <p>
                    years of <span>experience</span>
                  </p>
                </div>

                <div className="box">
                  <h3>10</h3>

                  <p>
                    COMPLETED <span>PROJECTS</span>
                  </p>
                </div>

                <div className="box">
                  <h3>20</h3>

                  <p>
                    HAPPY <span>CUSTOMERS</span>
                  </p>
                </div>

                <div className="box">
                  <h3>5</h3>

                  <p>
                    AWARDS <span>WON</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="divider"></div>

        <div className="my-skill"></div>

        <div className="experience-education"></div>
      </div>
    );
  }
}

export default About;
