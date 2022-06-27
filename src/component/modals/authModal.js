import React, { useEffect, useState } from "react";
import { Row, Col, Modal, Form, message } from "antd";
import { InputWrapper } from "../inputs/index";
import { LoadingOutlined } from "@ant-design/icons";
import { ModalConstant } from "../../redux/constants";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../buttons";
import { errorHandler, Mutations } from "../../api/config";
import ProductCard from "../cards/productCard";
import { useFetch } from "../../hooks/useFetch";
import axios from "axios";
// import Router from "next/router";
// import Link from "next/link";
import { loginUserAction } from "../../redux/actions";

const initialState = { email: "", password: "" };

const AuthModal = () => {
  const dispatch = useDispatch();
  const signUpModal = useSelector((state) => state.modal.signUpModal);

  const [form] = Form.useForm();
  const [updatePasswordForm] = Form.useForm();

  const [state, setState] = useState(initialState);
  const [authStatus, setAuthStatus] = useState(0); // signup = 0, signin = 1, Forgot Password = 2, Update Password = 3

  const closeModal = () => {
    dispatch({ type: ModalConstant.CLOSE_SIGN_UP_MODAL });
  };

  useEffect(() => {
    setAuthStatus(signUpModal.authStatus);
  }, [signUpModal.authStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Signup handler and Mutation
   */
  // const [signUp, { loading }] = useMutation(Mutation.SIGN_UP_USER);

  const handleSignUp = async () => {
    const deviceId = Math.random().toString();
    if (isValidPhoneNumber(state.phoneNo)) {
      try {
        // const { data } = await signUp({
        //   variables: { email: state.email },
        // });
        setState({ ...initialState }); // set state to initial state
        form.resetFields(); // Reset from fields
        closeModal(); // close modal
      } catch (err) {
        message.error(errorHandler(err));
      }
    }
  };

  /**
   * Login Mutation and handler
   */
  const [mutate, loading] = useFetch(Mutations.login);

  const handleLogin = async () => {
    try {
      const { data } = await mutate({
        identifier: state.email,
        password: state.password,
      });
      dispatch(loginUserAction(data));
      closeModal(); // close modal
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  /**
   * Forgot Password Mutation and handler
   */
  // const [forgotPasswordMutation, { loading: forgotPasswordLoading }] = useMutation(
  //   Mutation.FORGOT_PASSWORD
  // );

  const handleForgotPassword = async () => {
    try {
      // const { data } = await forgotPasswordMutation({
      //   variables: {
      //     email: state.email,
      //   },
      // });
      setAuthStatus(3);
      updatePasswordForm.setFieldsValue({
        Email: state.email,
      });
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  return (
    <Modal
      bodyStyle={{ padding: 0 }}
      width={900}
      centered
      closable={false}
      maskClosable={true}
      visible={signUpModal.visible}
      onCancel={closeModal}
      footer={null}
    >
      <Row style={{ height: 400 }}>
        <Col
          span={12}
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={0}
          style={{
            backgroundImage: `url(/images/shop_card_image.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
            zIndex: 999,
          }}
        >
          {/* <div style={{ height: 400, overflow: "auto" }}>
            <div style={{ transform: "scale(0.6)" }}>
              <ProductCard />
            </div>
          </div> */}
        </Col>

        {authStatus === 0 && (
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={24}
            style={{ padding: 24, height: "100%" }}
          >
            <h2 style={{ color: "#0025ff", fontWeight: 700, marginBottom: 24 }}>
              Create account
            </h2>
            <Form onFinish={handleSignUp} form={form} validateTrigger="onFinish">
              <label>Email</label>
              <Form.Item name="Email" rules={[{ required: true, type: "string" }]}>
                <InputWrapper
                  name="email"
                  autoComplete="new-password"
                  value={state.firstName}
                  onChange={handleChange}
                  maxLength="30"
                  placeholder="John"
                />
              </Form.Item>

              <div className="d-flex justify-content-center align-items-center">
                <PrimaryButton htmlType="submit" style={{ width: "80%", margin: "auto" }}>
                  {false && <LoadingOutlined style={{ marginRight: 16 }} />} Create
                  account
                </PrimaryButton>
              </div>
            </Form>

            <Row justify="space-between" className="mt-4">
              <Col>
                <p
                  className="hoverable dark"
                  style={{ color: "#0c0c0c", fontWeight: 700, cursor: "pointer" }}
                  onClick={() => setAuthStatus(1)}
                >
                  Login
                </p>
              </Col>
              <Col>
                <p
                  className="hoverable dark"
                  style={{ color: "#0c0c0c", fontWeight: 700, cursor: "pointer" }}
                  onClick={() => setAuthStatus(2)}
                >
                  Forgot Password
                </p>
              </Col>
            </Row>
          </Col>
        )}

        {authStatus === 1 && (
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={24}
            style={{ padding: 24, height: "100%" }}
          >
            <h2 style={{ color: "#0025ff", fontWeight: 700, marginBottom: 24 }}>
              Sign In
            </h2>

            <Form onFinish={handleLogin} validateTrigger="onFinish">
              <Row gutter={[0, 0]}>
                <Col span={24}>
                  <label>Email</label>
                  <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
                    <InputWrapper
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      placeholder="abc@xyz.com"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <label>Password</label>
                  <Form.Item name="Password" rules={[{ required: true, type: "string" }]}>
                    <InputWrapper.Password
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                      placeholder="Passowrd"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row justify="space-between">
                <Col>
                  <p
                    className="hoverable dark"
                    style={{ color: "#0c0c0c", fontWeight: 700, cursor: "pointer" }}
                    onClick={() => setAuthStatus(0)}
                  >
                    Create account
                  </p>
                </Col>
                <Col>
                  <p
                    className="hoverable dark"
                    style={{ color: "#0c0c0c", fontWeight: 700, cursor: "pointer" }}
                    onClick={() => setAuthStatus(2)}
                  >
                    Forgot Password
                  </p>
                </Col>
              </Row>

              <div className="d-flex justify-content-center align-items-center">
                <PrimaryButton htmlType="submit" style={{ width: "80%" }}>
                  {loading && <LoadingOutlined style={{ marginRight: 16 }} />} Sign in
                </PrimaryButton>
              </div>
            </Form>
          </Col>
        )}

        {authStatus === 2 && (
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={24}
            style={{ padding: 24, height: "100%" }}
          >
            <h2 style={{ color: "#0025ff", fontWeight: 700, marginBottom: 24 }}>
              Forgot Password
            </h2>

            <Form onFinish={handleForgotPassword} validateTrigger="onFinish">
              <Row gutter={[0, 0]}>
                <Col span={24}>
                  <label>Email</label>
                  <Form.Item
                    name="Email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                      },
                    ]}
                  >
                    <InputWrapper
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      placeholder="abc@xyz.com"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row justify="space-between">
                <Col>
                  <p>
                    Back to{" "}
                    <span
                      style={{
                        color: "#0c0c0c",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      onClick={() => setAuthStatus(1)}
                    >
                      Sign In
                    </span>
                  </p>
                </Col>
              </Row>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PrimaryButton
                  htmlType="submit"
                  // loading={forgotPasswordLoading}
                >
                  {false && <LoadingOutlined style={{ marginRight: 16 }} />} Send Code
                </PrimaryButton>
              </div>
            </Form>
          </Col>
        )}
      </Row>
    </Modal>
  );
};

export default AuthModal;
