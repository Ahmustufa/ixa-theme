import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Form, message, Checkbox } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CartSteps from "../../src/component/cartSteps";
import { ButtonWrapper, PrimaryButton } from "../../src/component/buttons";
import { InputWrapper } from "../../src/component/inputs";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Mutations, errorHandler, useFetch } from "../../src/api/config";
import { loginUserAction } from "../../src/redux/actions";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: null,
  email: "",
  address: "",
  city: "",
  county: "",
  postalCode: "",
};
const getRandomPassword = () => {
  const randomPassword = Math.random().toString(36).substr(2, 6);
  return randomPassword;
};
const Checkout = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [state, setState] = useState({ ...initialState });
  const [shippingAddress, setShippingAddress] = useState({ new: false, address: "" });
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { items: cartItems } = useSelector((state) => state.cart);

  const [createAccountApi, createAccountLoading] = useFetch(Mutations.createAccount);
  const createAccount = async () => {
    const [username] = state.email.split("@");
    try {
      const { data } = await createAccountApi({
        firstName: state.firstName,
        lastName: state.lastName,
        phoneNumber: state.phoneNumber,
        email: state.email,
        city: state.city,
        postalCode: state.postalCode,
        password: getRandomPassword(),
        username,
      });
      dispatch(loginUserAction(data));
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  const [createOrderApi, createOrderLoading] = useFetch(Mutations.createOrder);
  const handleOrder = async () => {
    try {
      if (isLoggedIn == false) {
        await createAccount();
      }
      const { data } = await createOrderApi({
        quantity: 4,
        color: "red",
        size: "M",
        product: "62bac02b67c2bd1ac991cb09",
        inventory: "62baec3467c2bd1ac991cb1e",
        deliveryAddress: shippingAddress.new ? shippingAddress.address : userData.address,
        users_permissions_user: userData._id,
      });

      console.log("My order data", data);
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = (cart) => {
    const subTotal = cart.reduce((accu, item) => (accu += item.quantity * item.price), 0);
    // console.log("Sub total", subTotal);
    return subTotal.toLocaleString();
  };

  useEffect(() => {
    if (typeof window !== undefined && isLoggedIn) {
      form.setFieldsValue({
        "First Name": userData.firstName,
        "Last Name": userData.lastName,
        Address: userData.address,
        City: userData.city,
        "Postal Code": userData.postalCode,
        Phone: userData.phoneNumber,
        Email: userData.email,
      });
      setState({ ...userData });
    }
  }, []);

  return (
    <StyledPage style={{ padding: 80 }}>
      <div className="cart-header">
        <h1>Checkout</h1>
      </div>

      <CartSteps step={2} />

      {isLoggedIn == false ? (
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
      ) : null}

      <Form form={form} onFinish={handleOrder} validateTrigger="onFinish">
        <Row className="mt-5">
          <Col style={{ padding: "0px 2% 4% 0px" }} xs={24} xl={12}>
            <h6 className="heading">SHIPPING DETAILS</h6>
            <Row gutter={[24, 24]}>
              <Col xs={12} sm={12} xl={12}>
                <p className="label">FIRST NAME *</p>
                <Form.Item name="First Name" rules={[{ required: true, type: "string" }]}>
                  <InputWrapper
                    name="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    disabled={isLoggedIn}
                  />
                </Form.Item>
              </Col>

              <Col xs={12} sm={12} xl={12}>
                <p className="label">LAST NAME *</p>
                <Form.Item name="Last Name" rules={[{ required: true, type: "string" }]}>
                  <InputWrapper
                    name="lastName"
                    value={state.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    disabled={isLoggedIn}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">STREET ADDRESS *</p>
              <Form.Item name="Address" rules={[{ required: true, type: "string" }]}>
                <InputWrapper
                  name="address"
                  value={state.address}
                  onChange={handleChange}
                  placeholder="House number and street name"
                  disabled={isLoggedIn}
                />
              </Form.Item>
            </Col>

            <Col className="mt-4" sm={24} xl={24}>
              <Checkbox
                checked={shippingAddress.new}
                onChange={(e) => {
                  setShippingAddress({ ...shippingAddress, new: e.target.checked });
                }}
              >
                Ship to another address
              </Checkbox>
              {shippingAddress.new ? (
                <div className="mt-4">
                  <p className="label">SHIPPING ADDRESS *</p>
                  <Form.Item
                    name="Shipping Address"
                    rules={[{ required: true, type: "string" }]}
                  >
                    <InputWrapper
                      name="shippingAddress"
                      value={state.shippingAddress}
                      onChange={handleChange}
                      placeholder="House number and street name"
                    />
                  </Form.Item>
                </div>
              ) : null}
            </Col>

            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">TOWN / CITY *</p>
              <Form.Item name="City" rules={[{ required: true, type: "string" }]}>
                <InputWrapper
                  name="city"
                  value={state.city}
                  onChange={handleChange}
                  placeholder="Your city name"
                  disabled={isLoggedIn}
                />
              </Form.Item>
            </Col>

            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">POSTAL CODE</p>
              <Form.Item
                name="Postal Code"
                rules={[
                  {
                    type: "string",
                    pattern: new RegExp(/\d+/g),
                    message: "Invalid postal code",
                  },
                ]}
              >
                <InputWrapper
                  name="postalCode"
                  value={state.postalCode}
                  onChange={handleChange}
                  placeholder="xxxxx"
                  disabled={isLoggedIn}
                />
              </Form.Item>
            </Col>

            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">PHONE *</p>
              <Form.Item
                name="Phone"
                rules={[
                  {
                    type: "string",
                    pattern: new RegExp(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/),
                    message: "Invalid phone number",
                    required: true,
                  },
                ]}
              >
                <InputWrapper
                  name="phoneNumber"
                  value={state.phoneNumber}
                  onChange={handleChange}
                  placeholder="0300xxxxxxx"
                  disabled={isLoggedIn}
                />
              </Form.Item>
            </Col>

            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">EMAIL ADDRESS *</p>
              <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
                <InputWrapper
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  placeholder="someone@example.com"
                  disabled={isLoggedIn}
                />
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
                {cartItems.map((item, index) => (
                  <Row className="product">
                    <Col key={index} span={16}>
                      <div className="box d-flex">
                        <div>
                          <img
                            src={process.env.REACT_APP_STRAPI_URL + item.images[0]?.url}
                            style={{ width: 50 }}
                          />
                        </div>

                        <div className="ml-3">
                          <p className="font-weight-light">{item.productName}</p>
                          <p>1 x {item.quantity}</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="p-3" span={8}>
                      <p className="font-weight-light title">
                        PKR {item.price?.toLocaleString()}
                      </p>
                    </Col>
                  </Row>
                ))}
              </div>

              {/* <Row className="" style={{ border: "1px solid #eaedf0" }}>
                <Col className="p-3" span={16}>
                  <p className="title">SUBTOTAL</p>
                </Col>
                <Col className="p-3" span={8}>
                  <p className="font-weight-light title mb-0">{calculateTotal(cartItems)}</p>
                </Col>
              </Row> */}

              <Row className="order-card-header">
                <Col className="p-3" span={16}>
                  <p className="title">TOTAL</p>
                </Col>
                <Col className="p-3" span={8}>
                  <p className="font-weight-bold title">
                    PKR {calculateTotal(cartItems)}
                  </p>
                </Col>
              </Row>
            </div>

            <div className="payment-method-card mt-5">
              <div
                className="d-flex justify-content-start align-items-center"
                style={{ color: "#808080" }}
              >
                <AiOutlineShopping color={"#9d9d9d"} size={100} />
                <div>
                  <div className="title p-0">Payment method</div>
                  <div className="p-0" style={{ fontWeight: 600, fontSize: 24 }}>
                    Cash on delivery
                  </div>
                </div>
              </div>
              <PrimaryButton htmlType="submit" className="w-100 mt-5">
                {(createAccountLoading || createOrderLoading) && <LoadingOutlined />}{" "}
                CONFIRM ORDER
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
