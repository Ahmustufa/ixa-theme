import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { logiLogosLogo } from "../../../images";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail, MdLocationOn } from "react-icons/md";
import moment from "moment";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const StyledFooter = styled.footer`
  background-color: rgb(28, 28, 31);
  z-index: -100;
  width: 100%;

  [data-theme="compact"] .site-collapse-custom-collapse .site-collapse-custom-panel,
  .site-collapse-custom-collapse .site-collapse-custom-panel {
    overflow: hidden;
    background-color: rgb(28, 28, 31);
    border: 0px;
    p {
      color: rgb(103, 101, 114);
      font-size: 10px;
      margin: 0px;
      line-height: 1.4em;
    }
    .ant-collapse-header {
      color: rgb(103, 101, 114);
      font-weight: 700;
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content {
    text-align: center;
  }
  .ant-collapse-borderless {
    background-color: rgb(28, 28, 31);
  }

  .first-col {
    padding: 24px 0px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      cursor: pointer;
    }
  }

  .second-col {
    padding: 24px 16px 0px 16px;
    .second-col-div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      color: rgb(103, 101, 114);
      padding: 0px 8px 0px 8px;
    }
    a {
      color: rgb(103, 101, 114);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      cursor: pointer;
      padding: 0px 8px 0px 8px;
      margin-bottom: 8px;
    }
    a:hover {
      color: #fff;
    }
  }

  .third-col {
    padding: 16px 0px 0px 0px;
    a {
      color: rgb(103, 101, 114);
      padding: 0px 5px 0px 5px;
    }
    a:hover {
      color: #fff;
    }
  }

  .fourth-col {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 24px 16px 0px 16px;
    .custom-collapse-panel {
      border: 0px;
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      background-color: #000;
      color: #fff;
      border-radius: 4px;
      padding: 6px 20px;
      margin: 14px 0px 14px 0px;
    }
    .ant-collapse-content > .ant-collapse-content-box {
      padding: 0px;
    }
    h4 {
      font-size: 16px;
      color: rgb(226, 226, 226);
      border-bottom: 1px solid;
      padding-bottom: 10px;
      font-weight: 300;
      margin-bottom: 13px;
      display: inline-block;
    }
    a {
      color: rgb(103, 101, 114);
    }
    a:hover {
      color: #fff;
    }
    ul {
      padding: 0px;
      li {
        list-style-type: none;
        &:hover {
          color: #fff;
        }
        a {
          cursor: pointer;
          color: rgb(103, 101, 114);
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

  .fifth-col {
    padding: 24px 24px;
    color: rgb(103, 101, 114);
    background-color: rgb(38, 38, 42);
    .fifth-col-row {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    p {
      font-size: 12px;
    }
    a {
      font-size: 12px;
      text-decoration: underline;
    }
    a:hover {
      color: #fff;
      text-decoration: none;
    }
    img {
      width: 150px;
      cursor: pointer;
    }
  }

  .sixth-col {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0% 8%;
    p {
      color: rgb(103, 101, 114);
      font-size: 10px;
      margin: 0px;
      line-height: 1.4em;
    }
  }

  @media (max-width: 991px) {
    .second-col {
      .second-col-div {
        display: block;
        text-align: center;
      }
    }
  }

  @media (max-width: 767px) {
    .fourth-col {
      display: block;
    }

    .fifth-col {
      text-align: center;
      .fifth-col-row {
        display: block;
        img {
          margin-top: 12px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .fourth-col {
      text-align: -webkit-auto;
    }
    .ant-collapse-header {
      display: block;
    }
  }
`;

const FooterContent = () => {
  const { Panel } = Collapse;
  const [mobileView, setMobileView] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth <= 480) {
          setMobileView(true);
        }
        if (window.innerWidth > 480) {
          setMobileView(false);
        }
      }
    };
    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
  }, []);

  return (
    <StyledFooter>
      <Row>
        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} className="first-col">
          <a href="/">
            <img style={{ width: 150 }} src={logiLogosLogo} />
          </a>
        </Col>

        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} className="second-col">
          <div className="second-col-div">
            <span>
              <a href="tel:+408-622-0105">
                <AiFillPhone style={{ color: "#D33F49", fontSize: 20 }} />{" "}
                <span style={{ margin: 0 }}>Toll Free: 408-622-0105</span>
              </a>
            </span>

            <span>
              <a href="mailto:info@logilogos.com">
                <MdEmail style={{ color: "#D33F49", fontSize: 20 }} />{" "}
                <span style={{ margin: 0 }}>Email: info@logilogos.com</span>
              </a>
            </span>

            <span style={{ marginBottom: 8, color: "rgb(103, 101, 114)" }}>
              <MdLocationOn style={{ color: "#D33F49", fontSize: 20 }} />
              2637 E Atlantic Blvd Pompano Beach, FL 33062 USA
            </span>
          </div>
        </Col>

        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} className="third-col">
          <div
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <a>
              <FaFacebookF />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaPinterestP />
            </a>
            <a>
              <FaLinkedinIn />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaYoutube />
            </a>
          </div>
        </Col>

        <Col span={24} className="fourth-col">
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            {mobileView ? (
              <>
                <Collapse
                  bordered={false}
                  expandIconPosition="right"
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  className="custom-collapse"
                >
                  <Panel header="Resources" key="1" className="custom-collapse-panel">
                    <ul>
                      <li>
                        <a>Home</a>
                      </li>
                      <li>
                        <a>About us</a>
                      </li>
                      <li>
                        <a>Reviews</a>
                      </li>
                      <li>
                        <a>Contact us</a>
                      </li>
                      <li>
                        <a>Blog</a>
                      </li>
                      <li>
                        <a>Refunds and Dispute</a>
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </>
            ) : (
              <>
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Reviews</a>
                  </li>
                  <li>
                    <a>Contact us</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Refunds and Dispute</a>
                  </li>
                </ul>
              </>
            )}
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            {mobileView ? (
              <>
                <Collapse
                  bordered={false}
                  expandIconPosition="right"
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  className="custom-collapse"
                >
                  <Panel
                    header="Website Design"
                    key="2"
                    className="custom-collapse-panel"
                  >
                    <ul>
                      <li>
                        <a>Website Portfolio</a>
                      </li>
                      <li>
                        <a>Website Packages</a>
                      </li>
                      <li>
                        <a>Website Reviews</a>
                      </li>
                      <li>
                        <a>Website FAQs</a>
                      </li>
                      <li>
                        <a>Ecommerce Website</a>
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </>
            ) : (
              <>
                <h4>Website Design</h4>
                <ul>
                  <li>
                    <a>Website Portfolio</a>
                  </li>
                  <li>
                    <a>Website Packages</a>
                  </li>
                  <li>
                    <a>Website Reviews</a>
                  </li>
                  <li>
                    <a>Website FAQs</a>
                  </li>
                  <li>
                    <a>Ecommerce Website</a>
                  </li>
                </ul>
              </>
            )}
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            {mobileView ? (
              <>
                <Collapse
                  bordered={false}
                  expandIconPosition="right"
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  className="custom-collapse"
                >
                  <Panel
                    header="Other Services"
                    key="2"
                    className="custom-collapse-panel"
                  >
                    <ul>
                      <li>
                        <a>Mobile Applications</a>
                      </li>
                      <li>
                        <a>Video Animations</a>
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </>
            ) : (
              <>
                <h4>Other Services</h4>
                <ul>
                  <li>
                    <a>Mobile Applications</a>
                  </li>
                  <li>
                    <a>Video Animations</a>
                  </li>
                </ul>
              </>
            )}
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            {mobileView ? (
              <>
                <Collapse
                  bordered={false}
                  expandIconPosition="right"
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  className="custom-collapse"
                >
                  <Panel header="Quick Links" key="2" className="custom-collapse-panel">
                    <ul>
                      <li>
                        <a>My Account</a>
                      </li>
                      <li>
                        <a>Sign up</a>
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </>
            ) : (
              <>
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a>My Account</a>
                  </li>
                  <li>
                    <a>Sign up</a>
                  </li>
                </ul>
              </>
            )}
          </Col>
        </Col>

        <Col span={24} className="fifth-col">
          <Row className="fifth-col-row">
            <p style={{ margin: 0 }}>
              All © Rights {moment().format("YYYY")} Reserved by LogiLogos{" "}
              <a>Terms And Conditions</a> {" | "} <a>Privacy Policy</a>
            </p>
            <a href="https://www.2checkout.com" target="_blank">
              <img src="https://www.websiteprofs.com/assets/images/paypal-pic.png" />
            </a>
          </Row>
        </Col>

        <Col span={24} className="sixth-col">
          <Collapse
            bordered={false}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            className="site-collapse-custom-collapse"
          >
            <Panel header="Disclaimer: " key="1" className="site-collapse-custom-panel">
              <p>
                Logo, portfolio, images and content are sole property of Website Profs.
                All third party company names, brand names, trademarks displayed on this
                website are the property of their respective owners. Furthermore, Website
                Profs has no influence over the third party material that is being
                displayed on the website. Therefore, we are also not responsible for any
                resemblance with any other material on the web. These portfolios and case
                studies are actual but exemplary (for better understanding); the actual
                names, designs, functionality, content and stats/facts may differ from the
                actual projects. This is due to the strict NDA policy that Website Profs.
              </p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </StyledFooter>
  );
};

export default FooterContent;
