import { Row, Col, Form } from "antd";
import styled from "styled-components";
import Link from "next/link";
import AccountSidebar from "../../src/component/sidebar/accountSidebar";
import { PrimaryButton } from "../../src/component/buttons";
import { useState } from "react";

const MyAccount = () => {
  const [form] = Form.useForm();
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <StyledPage style={{ padding: 80 }}>
      <Row>
        <Col xs={0} sm={0} md={6} lg={6}>
          <AccountSidebar />
        </Col>

        <Col xs={24} sm={24} md={18} lg={18}>
          <Form form={form} validateTrigger="onFinish">
            <label>First Name *</label>
            <Form.Item name="First Name" rules={[{ required: true }]}>
              <input
                name="firstName"
                className="input-wrapper"
                onChange={handleChange}
                value={state.firstName}
              />
            </Form.Item>

            <label>Last Name *</label>
            <Form.Item name="Last Name" rules={[{ required: true }]}>
              <input
                name="lastName"
                className="input-wrapper"
                onChange={handleChange}
                value={state.lastName}
              />
            </Form.Item>

            <label>Display Name *</label>
            <Form.Item name="Display Name" rules={[{ required: true }]}>
              <input
                name="displayName"
                className="input-wrapper"
                onChange={handleChange}
                value={state.displayName}
              />
            </Form.Item>

            <label>Email *</label>
            <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
              <input
                name="email"
                className="input-wrapper"
                onChange={handleChange}
                value={state.email}
              />
            </Form.Item>

            <div
              style={{
                border: "1px solid #ececec",
                padding: 16,
                marginTop: 48,
                width: "fit-content",
              }}
            >
              <div className="heading">PASSWORD CHANGE</div>

              <label>CURRENT PASSWORD (LEAVE BLANK TO LEAVE UNCHANGED)</label>
              <Form.Item name="Password">
                <input
                  name="currentPassword"
                  className="input-wrapper"
                  onChange={handleChange}
                  value={state.currentPassword}
                />
              </Form.Item>

              <label>NEW PASSWORD (LEAVE BLANK TO LEAVE UNCHANGED)</label>
              <Form.Item name="Email">
                <input
                  name="newPassword"
                  className="input-wrapper"
                  onChange={handleChange}
                  value={state.newPassword}
                />
              </Form.Item>

              <label>CONFIRM NEW PASSWORD</label>
              <Form.Item name="Email">
                <input
                  name="confirmPassword"
                  className="input-wrapper"
                  onChange={handleChange}
                  value={state.confirmPassword}
                />
              </Form.Item>
            </div>

            <PrimaryButton htmlType="submit" className="mt-4">
              Submit
            </PrimaryButton>
          </Form>
        </Col>
      </Row>
    </StyledPage>
  );
};

export default MyAccount;

const StyledPage = styled.div`
  .input-wrapper {
    border: 1px solid #e5e5e5;
    font-weight: 300;
    width: 100%;
    max-width: 400px;
    outline: none;
    padding: 8px;
  }

  label {
    color: #54595f;
    font-size: 12px;
    display: block;
  }

  .heading {
    position: relative;
    top: -28px;
    font-size: 16;
    padding: 2px 6px;
    background-color: #fff;
    width: fit-content;
    color: #54595f;
  }
`;
