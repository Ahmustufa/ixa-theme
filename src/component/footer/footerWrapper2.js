import React from "react";
import { Row, Col, Input, Divider, Button } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MailOutlined } from "@ant-design/icons";

const StyledFooter = styled.footer`
  display: block;
  position: relative;

  :before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 5px;
    background-image: url(/images/footerBeforeImage.png);
  }

  .footer-item-wrapper {
    text-align: center;
  }

  .footer-item-container {
    margin: 24px auto;
    text-align: left;
    width: 80%;
  }

  .link-header {
    font-weight: 600;
    margin-bottom: 24px;
  }

  .footer-item {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 400;
  }

  //-------------------------------//
  //         Narrow Footer         //
  //-------------------------------//
  .narrow-footer {
    padding: 16px 0;
  }
  .section-title {
    margin: 12px 0;
    font-weight: 600;
  }

  @media only screen and (max-width: 576px) {
    .footer-item-container {
      text-align: center;
    }
  }
`;

const FooterContent = () => {
  return (
    <StyledFooter>
      <Row
        className="narrow-footer col-11 col-md-9 m-auto"
        justify="center"
        gutter={[32, 32]}
      >
        <Col md={{ span: 12, order: 2 }} xs={24} sm={24} lg={6} xl={6}>
          <div className="text-center text-lg-left">
            <p className="section-title">Connect with us</p>
            <FaFacebookF /> <FaInstagram /> <FaTwitter />
          </div>
        </Col>

        <Col xs={24} sm={24} md={{ span: 24, order: 1 }} lg={12} xl={12}>
          <div className="text-center text-lg-left">
            <p className="section-title">Sign up for savings</p>
            <Input.Group style={{ height: 40, marginTop: 24 }} compact>
              <Input
                style={{
                  width: "calc(100% - 120px)",
                  height: "100%",
                  textAlign: "left",
                }}
                placeholder="Your email address..."
              />
              <Button style={{ height: "100%" }} type="primary">
                SUBSCRIBE
              </Button>
            </Input.Group>
          </div>
        </Col>

        <Col xs={24} sm={24} md={{ span: 12, order: 3 }} lg={6} xl={6}>
          <div className="text-center text-lg-left">
            <p className="section-title">Absolutely guaranteed</p>
            <p className="footer-item m-0">
              Every time. Any reason. Or we’ll make it right.
            </p>
          </div>
        </Col>
      </Row>

      <div className="container">
        <Divider />
      </div>

      <Row className="col-7 col-md-11 col-lg-9 col-xl-7 m-auto" justify="center">
        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">Let us help</div>
            <div className="footer-item">My Account</div>
            <div className="footer-item">Help center</div>
            <div className="footer-item">Contact us</div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">What we offer</div>
            <div className="footer-item">
              <Link href="/order">Order Now</Link>
            </div>
            <div className="footer-item">Upload your designs</div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">Our company</div>
            <div className="footer-item">About us</div>
            <div className="footer-item">Careers</div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">Our policies</div>
            <div className="footer-item">Term of user</div>
            <div className="footer-item">Copyright matters</div>
          </div>
        </Col>
      </Row>

      <section style={{ padding: "8px 0", backgroundColor: "#263238" }}>
        <Row align="middle" justify="space-around">
          <Col>
            <div className="text-white py-3">
              © Polkadotsretail 2016 - {new Date().getFullYear()}. All rights reserved.
            </div>
          </Col>

          <Col>
            <div className="d-flex align-items-center my-3">
              <img src="/images/credit_card/visa.png" alt="visa" />
              <img
                src="/images/credit_card/master_card.png"
                alt="master card"
                className="mx-3"
              />
              <img src="/images/credit_card/paypal.png" alt="paypal" />
            </div>
          </Col>
        </Row>
      </section>
    </StyledFooter>
  );
};

export default FooterContent;
