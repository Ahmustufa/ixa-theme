import React from "react";
import { Row, Col, Input, Divider } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { footerBeforeImage } from "public/images/footerBeforeImage.png";
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
`;

const FooterContent = () => {
  return (
    <StyledFooter>
      <Row className="narrow-footer col-9 m-auto" justify="center" gutter={[32, 32]}>
        <Col span={6}>
          <p className="section-title">Connect with us</p>
          <FaFacebookF /> <FaInstagram /> <FaTwitter />
        </Col>

        <Col span={12}>
          <p className="section-title">Sign up for savings</p>
          <Input size="large" addonAfter={<MailOutlined />} className="search-box" />
        </Col>

        <Col span={6}>
          <p className="section-title">Absolutely guaranteed</p>
          <p className="footer-item m-0">
            Every time. Any reason. Or we’ll make it right.
          </p>
        </Col>
      </Row>

      <div className="container">
        <Divider />
      </div>

      <Row className="main-footer col-7 m-auto" justify="center">
        <Col span={6} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">Let us help</div>
            <div className="footer-item">My Account</div>
            <div className="footer-item">Help center</div>
            <div className="footer-item">Contact us</div>
          </div>
        </Col>

        <Col span={6} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">What we offer</div>
            <div className="footer-item">
              <Link href="/order">Order Now</Link>
            </div>
            <div className="footer-item">Upload your designs</div>
          </div>
        </Col>

        <Col span={6} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">Our company</div>
            <div className="footer-item">About us</div>
            <div className="footer-item">Careers</div>
          </div>
        </Col>

        <Col span={6} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">Our policies</div>
            <div className="footer-item">Term of user</div>
            <div className="footer-item">Copyright matters</div>
          </div>
        </Col>
      </Row>

      <div style={{ padding: "8px 0", backgroundColor: "#263238" }}>
        <Row align="middle" justify="center" gutter={[24, 24]} className="w-100">
          <Col>
            <div className="text-white">
              © Polkadotsretail 2016 - {new Date().getFullYear()}. All rights reserved.
            </div>
          </Col>

          <Col>
            <div className="d-flex align-items-center">
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
      </div>
    </StyledFooter>
  );
};

export default FooterContent;
