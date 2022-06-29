import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Form, message } from "antd";
import styled from "styled-components";
import CartSteps from "../../src/component/cartSteps";
import { ButtonWrapper, PrimaryButton } from "../../src/component/buttons";
import { InputWrapper } from "../../src/component/inputs";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

const Checkout = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    appartment: "",
    city: "",
    county: "",
    postcode: "",
    phone: null,
    email: "",
  });

  const handleLogin = () => {
    alert("ok");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log("satte", state);
  }, [state]);
  return (
    <StyledPage style={{ padding: 80 }}>
      <div className="cart-header">
        <h1>Checkout</h1>
      </div>
      <CartSteps step={2} />
      <Row style={{ background: "#f9fafb" }} className="mt-5">
        <Col span={24} className="p-4">
          <div className="d-flex justify-content-start align-items-center">
            <AiOutlineShopping color={"#ced4da"} size={50} />
            <p className="mb-0 ml-5 title" style={{ color: "#808080" }}>
              Returning customer?
              <Link href={"/"}>
                <a className={"font-weight-light dark"}> Click here to login</a>
              </Link>
            </p>
          </div>
        </Col>
      </Row>
      <Form onFinish={handleLogin} validateTrigger="onFinish">
        <Row className="mt-5">
          <Col style={{ padding: "0px 2% 4% 0px" }} xs={24} xl={12}>
            <h6 className="heading">BILLING DETAILS</h6>
            <Row gutter={[24, 24]}>
              <Col xs={12} sm={12} xl={12}>
                <p className="label">FIRST NAME *</p>
                <Form.Item name="firstName" rules={[{ required: true, type: "string" }]}>
                  <InputWrapper
                    name="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>
              <Col xs={12} sm={12} xl={12}>
                <p className="label">LAST NAME *</p>
                <Form.Item name="lastName" rules={[{ required: true, type: "string" }]}>
                  <InputWrapper
                    name="lastName"
                    value={state.lastName}
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">COMPANY NAME (OPTIONAL)</p>
              <InputWrapper
                name="companyName"
                value={state.companyName}
                onChange={handleChange}
              />
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">STREET ADDRESS *</p>
              <Form.Item name="address" rules={[{ required: true, type: "string" }]}>
                <InputWrapper
                  name="address"
                  value={state.address}
                  onChange={handleChange}
                  placeholder="House number and street name"
                />
              </Form.Item>
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <InputWrapper
                name="appartment"
                value={state.appartment}
                onChange={handleChange}
                placeholder="Appartment, suite, unit, etc. (optional)"
              />
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">TOWN / CITY *</p>
              <Form.Item name="city" rules={[{ required: true, type: "string" }]}>
                <InputWrapper name="city" value={state.city} onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">COUNTY (OPTIONAL)</p>
              <InputWrapper name="county" value={state.county} onChange={handleChange} />
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">POSTCODE *</p>
              <Form.Item
                name="postcode"
                rules={[
                  {
                    type: "string",
                    pattern: new RegExp(/\d+/g),
                    message: "Format is wrong",
                  },
                  { required: true, type: "string" },
                ]}
              >
                <InputWrapper
                  name="postcode"
                  value={state.postcode}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">PHONE *</p>
              <Form.Item
                name="phone"
                rules={[
                  {
                    type: "string",
                    pattern: new RegExp(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/),
                    message: "Format is wrong",
                  },
                  {
                    required: true,
                    message: "Enter you firstname",
                  },
                ]}
              >
                <InputWrapper name="phone" value={state.phone} onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">EMAIL ADDRESS *</p>
              <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
                <InputWrapper name="email" value={state.email} onChange={handleChange} />
              </Form.Item>
            </Col>
          </Col>
          <Col xs={24} xl={12}>
            <h6 className="heading">YOUR ORDER</h6>
            <div>
              <Row className="order-card-header">
                <Col className="p-3" span={16}>
                  <p className="title">PRODUCT</p>
                </Col>
                <Col className="p-3" span={8}>
                  <p className="title">SUBTOTAL</p>
                </Col>
              </Row>
              <div style={{ border: "1px solid #eaedf0" }}>
                {[1, 2, 3, 4].map((item, index) => (
                  <Row className="product">
                    <Col key={index} span={16}>
                      <div className="box d-flex">
                        <div>
                          <img src="/images/demo_image.jpg" style={{ width: 50 }} />
                        </div>

                        <div className="ml-3">
                          <p className="font-weight-light">
                            Black Lace Trim Tee - M - Some more text
                          </p>
                          {/* <p># {index + 1}</p> */}
                        </div>
                      </div>
                    </Col>
                    <Col className="p-3" span={8}>
                      <p className="font-weight-light title">£159.00</p>
                    </Col>
                  </Row>
                ))}
              </div>
              <Row className="" style={{ border: "1px solid #eaedf0" }}>
                <Col className="p-3" span={16}>
                  <p className="title">SUBTOTAL</p>
                </Col>
                <Col className="p-3" span={8}>
                  <p className="font-weight-light title mb-0">£159.00</p>
                </Col>
              </Row>
              <Row className="order-card-header">
                <Col className="p-3" span={16}>
                  <p className="title">TOTAL</p>
                </Col>
                <Col className="p-3" span={8}>
                  <p className="font-weight-bold title">£159.00</p>
                </Col>
              </Row>
            </div>

            <div className="payment-method-card mt-5">
              <div className="d-flex justify-content-start align-items-center">
                <AiOutlineShopping color={"#9d9d9d"} size={100} />
                <p className="mb-0 ml-5 title" style={{ color: "#808080" }}>
                  Sorry, it seems that there are no available payment methods for your
                  state. Please contact us if you require assistance or wish to make
                  alternate arrangements.
                </p>
              </div>
              <PrimaryButton htmlType="submit" className="w-100 mt-5">
                Proceed to checkout
              </PrimaryButton>
            </div>
          </Col>
        </Row>
      </Form>
    </StyledPage>
  );
};

export default Checkout;

const StyledPage = styled.div`
  .cart-header {
    padding: 30px 0px;
    h1 {
      color: #484f56;
    }
  }
  .product {
    padding: 10px 20px;
  }
  .label {
    font-size: 12px;
    color: #808080;
    margin-bottom: 0px;
  }
  .title {
    font-size: 14px;
    margin-bottom: 0px;
  }
  .order-card-header {
    background: #eaedf0;
  }
  .heading {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .payment-method-card {
    background: #eaedf0;
    padding: 30px;
    p {
      font-size: 14px;
    }
    div {
      background: #fff;
      padding: 20px;
    }
  }
  @media (max-width: 1024px) {
    padding: 20px !important;
  }
`;
