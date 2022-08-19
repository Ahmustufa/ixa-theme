import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Col, Input, Button, Checkbox } from "antd";
import Link from "next/link";
import Cookies from "js-cookie";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const StyledModal = styled(Modal)`
  .ant-modal-close-x {
    background-color: #1890ff;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    left: -28px;
    color: #fff;
  }

  .left-section {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5%;
    h1 {
      font-weight: 800;
    }
  }

  .ant-btn > span {
    line-height: 32px;
  }

  .social-div {
    display: flex;
    margin-top: 32px;
    justify-content: center;
    align-items: center;

    .social-icons {
      margin-left: 4px;
      margin-right: 4px;
      cursor: pointer;
      border: 1px solid #e4e4e4;
      height: 32px;
      width: 32px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s ease;
      &:hover {
        transition: 0.2s ease;
        background-color: #1890ff;
        svg {
          transition: 0.2s ease;
          color: #fff;
        }
      }
    }
  }
`;

const SubscriptionModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    let checkCookie = Cookies.get("subscriptionModal");
    if (checkCookie == "false" || checkCookie == undefined || checkCookie == null) {
      setTimeout(() => {
        setIsModalVisible(true);
      }, 5000);
    }
  }, []);

  return (
    <StyledModal
      visible={isModalVisible}
      onCancel={handleCancel}
      centered
      footer={null}
      width={900}
    >
      <Row>
        <Col xxl={11} xl={11} lg={11} md={11} sm={0}>
          <div
            style={{
              backgroundImage: `url( ${props.image})`,
              minHeight: 380,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </Col>
        <Col xxl={13} xl={13} lg={13} md={13} sm={24}>
          <div className="left-section">
            <div>
              <h1>Newsletter</h1>
              <p style={{ padding: "24px 0" }}>
                Subscribe to the mailing list to receive updates on new arrivals, special
                offers and other discount information.
              </p>
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
              <Checkbox
                style={{ marginTop: 24 }}
                onChange={(e) => {
                  Cookies.set("subscriptionModal", e.target.checked.toString());
                }}
              >{`Don't show this popup again`}</Checkbox>

              <div className="social-div">
                <div className="social-icons">
                  <Link href="https://facebook.com">
                    <a target="_blank">
                      <FaFacebookF />
                    </a>
                  </Link>
                </div>

                <div className="social-icons">
                  <Link href="https://twitter.com">
                    <a target="_blank">
                      <FaTwitter />
                    </a>
                  </Link>
                </div>

                <div className="social-icons">
                  <Link href="https://google.com">
                    <a target="_blank">
                      <FaGooglePlusG style={{ fontSize: 18 }} />
                    </a>
                  </Link>
                </div>

                <div className="social-icons">
                  <Link href="https://pinterest.com">
                    <a target="_blank">
                      <FaPinterestP />
                    </a>
                  </Link>
                </div>

                <div className="social-icons">
                  <Link href="https://youtube.com">
                    <a target="_blank">
                      <FaYoutube />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </StyledModal>
  );
};
export default SubscriptionModal;
