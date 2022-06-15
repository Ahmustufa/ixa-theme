import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Modal, Form, Checkbox, message } from "antd";
import Link from "next/link";
import { signupImage } from "../../../images";
import { InputWrapper } from "../inputs/index";
import PhoneInputWrapper from "../inputs/phoneInputWrapper";
import { isValidPhoneNumber } from "react-phone-number-input";
import { nameFormatter } from "../../helper/formatters";
import { SignupButtonWrapper } from "../buttons";
import { Mutation } from "../../apollo/mutations";
import { useMutation } from "react-apollo";
import { signUpWithoutPassword, loginUserAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler } from "../../utils/errorHandler";
import Router from "next/router";
import { LoadingOutlined } from "@ant-design/icons";
import { Reveal, Fade } from "react-awesome-reveal";
import { ModalConstant } from "../../redux/constants";
import Recaptcha from "react-recaptcha";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNo: "",
  email: "",
  phoneError: "",
  password: "",
  newPassword: "",
  confirmPassword: "",
  code: "",
};

const SignupModal = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.order);
  const signUpModal = useSelector((state) => state.modal.signUpModal);

  const [agree, setAgree] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const [form] = Form.useForm();
  const [updatePasswordForm] = Form.useForm();

  const [state, setState] = useState(initialState);
  const [authStatus, setAuthStatus] = useState(0); // signup = 0, signin = 1, Forgot Password = 2, Update Password = 3

  const captchaRef = useRef(false);

  const closeModal = () => {
    setAgree(false);
    setCaptchaVerified(false);
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
  const [signUp, { loading }] = useMutation(Mutation.SIGN_UP_USER);

  const handleSignUp = async () => {
    const deviceId = Math.random().toString();
    if (isValidPhoneNumber(state.phoneNo)) {
      try {
        const { data } = await signUp({
          variables: {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            phoneNo: state.phoneNo,
            // password: state.password,
            deviceId,
            packageId: orderState.packageId,
          },
        });
        dispatch(signUpWithoutPassword({ ...data.signupUser, deviceId }));
        setState({ ...initialState }); // set state to initial state
        form.resetFields(); // Reset from fields
        captchaRef.current.reset(); // Reset captcha
        closeModal(); // close modal
        // Route to package page
        if (orderState.slug !== undefined) {
          Router.push(
            `/login_${orderState.orderType == 1 ? "logo" : "web"}/${orderState.slug}`
          );
        }
      } catch (err) {
        message.error(errorHandler(err));
      }
    }
  };

  /**
   * Login Mutation and handler
   */
  const [loginMutation, { loading: loginLoading }] = useMutation(Mutation.LOGIN_USER);

  const handleLogin = async () => {
    const deviceId = `${Math.random()}`;
    try {
      const { data } = await loginMutation({
        variables: {
          email: state.email,
          password: state.password,
          deviceId,
        },
      });
      dispatch(loginUserAction({ ...data.loginUser, deviceId }));
      closeModal(); // close modal
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  /**
   * Forgot Password Mutation and handler
   */
  const [forgotPasswordMutation, { loading: forgotPasswordLoading }] = useMutation(
    Mutation.FORGOT_PASSWORD
  );

  const handleForgotPassword = async () => {
    try {
      const { data } = await forgotPasswordMutation({
        variables: {
          email: state.email,
        },
      });
      setAuthStatus(3);
      updatePasswordForm.setFieldsValue({
        Email: state.email,
      });
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  /**
   * Update Password Mutation and handler
   */
  const [updatePasswordMutation, { loading: updatePasswordLoading }] = useMutation(
    Mutation.UPDATE_PASSWORD
  );

  const handleUpdatePassword = async () => {
    const deviceId = `${Math.random()}`;
    if (state.newPassword === state.confirmPassword) {
      try {
        const { data } = await updatePasswordMutation({
          variables: {
            email: state.email,
            code: state.code,
            newPassword: state.newPassword,
            reenterPassword: state.confirmPassword,
            deviceId,
          },
        });
        setAuthStatus(1);
        dispatch(loginUserAction({ ...data.updatePassword, deviceId }));
        closeModal(); // close modal
      } catch (err) {
        message.error(errorHandler(err));
      }
    } else {
      message.error("Password doesn't match");
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
      <Row style={{ minHeight: authStatus == 0 ? 500 : 300 }}>
        <Col
          span={12}
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={0}
          style={{
            backgroundImage: `url(${signupImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            // transform: "rotate(180deg)",
            backgroundRepeat: "no-repeat",
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
            zIndex: 999,
          }}
        />
        {authStatus === 0 && (
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24} style={{ padding: 24 }}>
            <Reveal>
              <h2 style={{ color: "#0025ff", fontWeight: 700, marginBottom: 4 }}>
                {signUpModal.orderCreate ? "Create Order" : "Sign up"}
              </h2>
              <div className="mb-3" />
              {/* <h2 style={{ color: "#0025ff", fontWeight: 700, marginBottom: 4 }}>
                {orderState.packageName}
              </h2>
              {orderState.amount == "" ? (
                <div className="mb-3" />
              ) : (
                <h4 style={{ marginBottom: 18 }}>
                  In Just <span style={{ fontWeight: 700 }}>${orderState.amount}</span>
                </h4>
              )} */}
              <Form
                onFinish={handleSignUp}
                autoComplete="new-password"
                form={form}
                validateTrigger="onFinish"
              >
                <Row gutter={[0, 0]}>
                  <Col span={24}>
                    <label>First Name</label>
                    <Form.Item
                      name="First Name"
                      rules={[
                        {
                          required: true,
                          type: "string",
                        },
                      ]}
                    >
                      <InputWrapper
                        name="firstName"
                        autoComplete="new-password"
                        value={state.firstName}
                        onChange={handleChange}
                        onInput={nameFormatter}
                        maxLength="30"
                        placeholder="John"
                        // disabled={isLoggedIn}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <label>Last Name</label>
                    <Form.Item
                      name="Last Name"
                      rules={[
                        {
                          required: true,
                          type: "string",
                        },
                      ]}
                    >
                      <InputWrapper
                        name="lastName"
                        autoComplete="new-password"
                        value={state.lastName}
                        onChange={handleChange}
                        onInput={nameFormatter}
                        placeholder="Smith"
                        maxLength="30"
                        // disabled={isLoggedIn}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <label>Email</label>
                    <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
                      <InputWrapper
                        name="email"
                        autoComplete="new-password"
                        value={state.email}
                        onChange={handleChange}
                        placeholder="Johnsmith@gmail.com"
                        // disabled={isLoggedIn}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <label>Contact</label>
                    <PhoneInputWrapper
                      name="phoneNo"
                      autoComplete="new-password"
                      value={state.phoneNo}
                      placeholder="Phone Number"
                      onChange={handleChange}
                      error={state.phoneError}
                      // disabled={isLoggedIn}
                    />
                  </Col>
                </Row>

                <div className="checkbox-div">
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked;
                      setAgree(e.target.checked);
                    }}
                  ></Checkbox>
                  <p>
                    Creating an account means you're okay with our&nbsp;
                    <Link href="/term_of_use">
                      <a target="_blank">Terms of Services</a>
                    </Link>
                    &nbsp;and&nbsp;
                    <Link href="/privacy_policy">
                      <a target="_blank">Privacy Policy</a>
                    </Link>
                  </p>
                </div>

                <Col
                  span={24}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Recaptcha
                    sitekey={`${process.env.RCAPTCHA_SITE_KEY}`}
                    render="explicit"
                    onloadCallback={(e) => console.log("Recaptcha", e)}
                    verifyCallback={(response) => {
                      if (response && typeof response !== "undefined") {
                        setCaptchaVerified(true);
                        captchaRef.current = true;
                      } else {
                        console.log("USER CICKED OUT");
                      }
                    }}
                    expiredCallback={() => {
                      setCaptchaVerified(false);
                    }}
                    ref={(e) => (captchaRef.current = e)}
                  />
                </Col>

                <p style={{ textAlign: "center", marginTop: 12 }}>
                  Already have an account?&nbsp;
                  <span
                    style={{ color: "#0025ff", fontWeight: 700, cursor: "pointer" }}
                    onClick={() => setAuthStatus(1)}
                  >
                    Sign in
                  </span>
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SignupButtonWrapper
                    htmlType="submit"
                    disabled={!(agree && captchaVerified)}
                    onClick={() => {
                      if (!isValidPhoneNumber(state.phoneNo)) {
                        setState({ ...state, phoneError: "Invalid phone number" });
                      }
                    }}
                    loading={loading}
                    style={{ cursor: loading ? "not-allowed" : "pointer" }}
                  >
                    {loading && <LoadingOutlined style={{ marginRight: 16 }} />} Let's Get
                    Started
                  </SignupButtonWrapper>
                  {/* <InsideSignupButton>▲</InsideSignupButton> */}
                </div>

                {/* <div className="button-div">
                <BackButtonWrapper display="none">&#8592;</BackButtonWrapper>
                <NextButtonWrapper
                  style={{ cursor: step1Loading ? "not-allowed" : "pointer" }}
                  htmlType="submit"
                  disabled={step1Loading ? true : false}
                  onClick={() => {
                    if (!isValidPhoneNumber(state.phoneNo)) {
                      setState({ ...state, phoneError: "Invalid phone number" });
                    }
                  }}
                >
                  {step1Loading ? <LoadingOutlined /> : <>&rarr;</>}
                </NextButtonWrapper>
              </div> */}
              </Form>
            </Reveal>
          </Col>
        )}
        {authStatus === 1 && (
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24} style={{ padding: 24 }}>
            <Reveal>
              <h2 style={{ color: "#0025ff", fontWeight: 700, marginBottom: 24 }}>
                Sign In
              </h2>

              <Form onFinish={handleLogin} validateTrigger="onFinish">
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

                  <Col span={24}>
                    <label>Password</label>
                    <Form.Item
                      name="Password"
                      rules={[
                        {
                          required: true,
                          type: "string",
                        },
                      ]}
                    >
                      <InputWrapper.Password
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                        placeholder="Passowrd"
                        // type="password"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row justify="space-between">
                  <Col>
                    <p
                      style={{
                        color: "#0025FF",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      onClick={() => setAuthStatus(0)}
                    >
                      Create an account
                    </p>
                  </Col>
                  <Col>
                    <p
                      style={{
                        color: "#0025FF",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      onClick={() => setAuthStatus(2)}
                    >
                      Forgot Password
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
                  <SignupButtonWrapper
                    htmlType="submit"
                    loading={loginLoading}
                    style={{ cursor: loginLoading ? "not-allowed" : "pointer" }}
                  >
                    {loginLoading && <LoadingOutlined style={{ marginRight: 16 }} />} Sign
                    in
                  </SignupButtonWrapper>
                </div>
              </Form>
            </Reveal>
          </Col>
        )}

        {authStatus === 2 && (
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24} style={{ padding: 24 }}>
            <Reveal>
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
                          color: "#0025FF",
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
                  <SignupButtonWrapper
                    htmlType="submit"
                    loading={forgotPasswordLoading}
                    style={{
                      cursor: forgotPasswordLoading ? "not-allowed" : "pointer",
                    }}
                  >
                    {forgotPasswordLoading && (
                      <LoadingOutlined style={{ marginRight: 16 }} />
                    )}{" "}
                    Send Code
                  </SignupButtonWrapper>
                </div>
              </Form>
            </Reveal>
          </Col>
        )}

        {authStatus === 3 && (
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24} style={{ padding: 24 }}>
            <Reveal>
              <h2 style={{ color: "#0025ff", fontWeight: 700, marginBottom: 24 }}>
                Update Password
              </h2>

              <Form
                onFinish={handleUpdatePassword}
                form={updatePasswordForm}
                validateTrigger="onFinish"
              >
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
                        // onChange={handleChange}
                        placeholder="abc@xyz.com"
                        disabled
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <label>Code</label>
                    <Form.Item
                      name="Code"
                      rules={[
                        {
                          required: true,
                          type: "string",
                        },
                      ]}
                    >
                      <InputWrapper
                        name="code"
                        value={state.code}
                        maxLength={6}
                        onChange={handleChange}
                        placeholder="XXXXXX"
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <label>New Password</label>
                    <Form.Item
                      name="New Password"
                      rules={[
                        {
                          required: true,
                          type: "string",
                        },
                      ]}
                    >
                      <InputWrapper.Password
                        name="newPassword"
                        value={state.newPassword}
                        onChange={handleChange}
                        placeholder="New Password"
                        // type="password"
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <label>Confirm Password</label>
                    <Form.Item
                      name="Confirm Password"
                      rules={[
                        {
                          required: true,
                          type: "string",
                        },
                      ]}
                    >
                      <InputWrapper.Password
                        name="confirmPassword"
                        value={state.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        // type="password"
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
                          color: "#0025FF",
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
                  <SignupButtonWrapper
                    htmlType="submit"
                    loading={updatePasswordLoading}
                    style={{
                      cursor: updatePasswordLoading ? "not-allowed" : "pointer",
                    }}
                  >
                    {updatePasswordLoading && (
                      <LoadingOutlined style={{ marginRight: 16 }} />
                    )}{" "}
                    Reset Password
                  </SignupButtonWrapper>
                </div>
              </Form>
            </Reveal>
          </Col>
        )}
      </Row>
    </Modal>
  );
};

export default SignupModal;
