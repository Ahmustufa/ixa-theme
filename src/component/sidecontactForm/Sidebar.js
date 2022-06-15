import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Row, Col, Form, message } from "antd";
import { InputWrapper, TextAreaWrapper } from "../inputs/index";
import SelectWrapper from "../inputs/selectWrapper";
import { BlueButtonWrapper } from "../buttons/index";
import PhoneInputWrapper from "../inputs/phoneInputWrapper";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useSelector } from "react-redux";
import { useMutation } from "react-apollo";
import { Mutation } from "../../apollo/mutations";
import ReCAPTCHA from "react-google-recaptcha";
import { RiArrowRightSLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { BiArrowFromTop } from "react-icons/bi";

const StyledSection = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
  text-decoration: none;
  z-index: 1000;
  width: 350px;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "0px" : "-350px")};

  .side-bar-div {
    padding: 20px 25px 20px 25px;
    // width: 350px;
    background-color: #fff;
    font-size: 20px;
    color: white;
    border-radius: 0 5px 5px 0;
  }

  h2 {
    color: rgb(0, 37, 255);
    font-weight: 700;
    margin-bottom: 4px;
  }
  h4 {
    color: 2a2a2a;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  label {
    font-size: 12px;
    font-weight: 600;
    margin: 0px;
    user-select: none;
  }

  .arrow-div {
    position: absolute;
    left: 100%;
    cursor: pointer;
    background-color: #232a38;
    color: #fff;
    float: right;
    height: 350px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 600;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    margin: auto;
    top: 0;
    bottom: 0;
  }

  .overlay-div {
    height: 100vh;
    width: 100%;
    z-index: 500;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media (max-width: 450px) {
    .side-bar-div {
      max-height: 96vh;
      overflow: auto;
    }
    .arrow-div {
      width: 38px;
      font-size: 20px;
      font-weight: 600;
      height: 270px;
    }
  }
`;

const SideBar = () => {
  const [form] = Form.useForm();
  const myRef = useRef();
  const captchaRef = useRef(false);
  const user = useSelector((state) => state.user);

  const [state, setState] = useState({
    name: user.isLoggedIn ? `${user.data.firstName} ${user.data.lastName}` : "",
    email: user.data.email,
    phone: user.data.phoneNo,
    projectType: "",
    message: "",
    phoneError: null,
  });

  const [isSidebarOpen, toggleSidebar] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  useEffect(() => {
    const abc = { contains: () => false };

    const checkClickOutside = (e) => {
      const element =
        document.getElementById("my_someting_list")?.parentElement?.parentElement
          ?.parentElement || abc;

      if (element.contains(e.target) || myRef?.current?.contains(e.target)) {
        // console.log("It contains element");
        toggleSidebar(true);
      } else {
        toggleSidebar(false);
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("click", checkClickOutside);
    }
  }, [isSidebarOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    form.setFieldsValue({
      Name: user.isLoggedIn ? `${user.data.firstName} ${user.data.lastName}` : "",
      Email: user.data.email,
    });
    setState({ ...state, phone: user.data.phoneNo });
  }, [user.data]);

  const [runContactUsMutation, { loading }] = useMutation(Mutation.CONTACT_US);

  const handleContactUs = async () => {
    try {
      if (isValidPhoneNumber(state.phone)) {
        await runContactUsMutation({
          variables: {
            name: state.name,
            email: state.email,
            phone: state.phone,
            projectType: state.projectType,
            description: state.message,
          },
        });
        form.resetFields();
        captchaRef.current.reset(); // Reset captcha
        setState({ ...state, phone: "" });
        message.success("Your project detail has been received");
      }
    } catch (err) {
      message.warning(err);
    }
  };

  return (
    <>
      {/* Mask */}
      {isSidebarOpen ? (
        <div
          style={{
            height: "100vh",
            width: "100%",
            zIndex: 500,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      ) : null}

      <StyledSection isSidebarOpen={isSidebarOpen} ref={myRef}>
        <div className="side-bar-div">
          <h2>Request a Call Back</h2>
          <h4>We are here to guide you to success</h4>
          <Form
            onFinish={handleContactUs}
            form={form}
            autoComplete="new-password"
            validateTrigger="onFinish"
            // className="text-left col-xl-6 col-sm-8 col-12 mx-auto"
          >
            <Row gutter={[24]} style={{ margin: "20px 0 0 0" }}>
              <Col
                xxl={24}
                xl={24}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                style={{ padding: 0 }}
              >
                <label>Full Name</label>
                <Form.Item
                  name="Name"
                  rules={[{ required: true, type: "string", max: 30 }]}
                >
                  <InputWrapper
                    name="name"
                    placeholder="Full Name"
                    maxLength={30}
                    autoComplete="new-password"
                    value={state.name}
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>

              <Col
                xxl={24}
                xl={24}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                style={{ padding: 0 }}
              >
                <label>Email</label>
                <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
                  <InputWrapper
                    name="email"
                    placeholder="Email"
                    autoComplete="new-password"
                    value={state.email}
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>

              <Col
                xxl={24}
                xl={24}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                style={{ padding: 0, height: 88 }}
              >
                <label>Contact</label>
                <PhoneInputWrapper
                  name="phone"
                  autoComplete="new-password"
                  value={state.phone}
                  placeholder="Phone Number"
                  onChange={handleChange}
                  error={state.phoneError}
                />
              </Col>

              <Col
                xxl={24}
                xl={24}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                style={{ padding: 0 }}
              >
                <label>Project Type</label>
                <Form.Item
                  name="Project Type"
                  rules={[{ required: true, type: "string" }]}
                >
                  <SelectWrapper
                    placeholder="Select project type"
                    options={[
                      { label: "Web Design", value: "Web Design" },
                      { label: "Logo Design", value: "Logo Design" },
                    ]}
                    value={state.projectType}
                    onChange={(val) =>
                      setState((prev) => ({ ...prev, projectType: val }))
                    }
                    id={"my_someting"}
                  />
                </Form.Item>
              </Col>

              <Col span={24} style={{ padding: 0 }}>
                <label>Description</label>
                <Form.Item
                  name="Description"
                  rules={[{ required: true, type: "string", max: 500 }]}
                >
                  <TextAreaWrapper
                    name="message"
                    height="70px"
                    value={state.message}
                    onChange={handleChange}
                    maxLength={500}
                    rows={3}
                    style={{ resize: "none" }}
                    placeholder="Briefly explain your project"
                  />
                </Form.Item>
              </Col>

              <Col span={24} style={{ padding: 0 }}>
                <ReCAPTCHA
                  sitekey={process.env.RCAPTCHA_SITE_KEY}
                  onChange={(response) => {
                    if (response && typeof response !== "undefined") {
                      setCaptchaVerified(true);
                      captchaRef.current = true;
                    } else {
                      console.log("USER CICKED OUT");
                    }
                  }}
                  onExpired={() => {
                    setCaptchaVerified(false);
                  }}
                  ref={(e) => (captchaRef.current = e)}
                />
              </Col>

              <Col
                span={24}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                }}
              >
                <BlueButtonWrapper
                  style={{ marginTop: 25 }}
                  backgroundColor="#0025FF"
                  htmlType="submit"
                  color="#fff"
                  borderRadius="100px"
                  padding="22px 34px"
                  loading={loading}
                  disabled={!captchaVerified}
                  onClick={() => {
                    if (!isValidPhoneNumber(state.phone)) {
                      setState({ ...state, phoneError: "Invalid phone number" });
                    }
                  }}
                >
                  Send Message <FiSend style={{ marginLeft: 8, fontSize: 20 }} />
                </BlueButtonWrapper>
              </Col>
            </Row>
          </Form>

          <div>
            <div
              onClick={() => {
                toggleSidebar(true);
              }}
              className="arrow-div"
              style={{ visibility: isSidebarOpen ? "hidden" : "visible" }}
            >
              <div style={{ whiteSpace: "nowrap", transform: "rotate(-90deg)" }}>
                {`REQUEST A CALLBACK `} <BiArrowFromTop style={{ marginLeft: 6 }} />
              </div>
            </div>
          </div>
        </div>
      </StyledSection>
    </>
  );
};

export default SideBar;
