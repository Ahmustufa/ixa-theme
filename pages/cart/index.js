import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Form, message } from "antd";
import styled from "styled-components";
import CartSteps from "../../src/component/cartSteps";
import { ButtonWrapper, PrimaryButton } from "../../src/component/buttons";

const ShoppingBag = () => {
  return (
    <StyledPage style={{ padding: 80 }}>
      <div className="cart-header">
        <h1>Cart</h1>
      </div>
      <CartSteps step={1} />
      <div className="mt-5">
        <Row gutter={[24, 24]}>
          {[1, 2, 3, 4].map((item, index) => (
            <Col key={index} xl={8} xs={24} sm={24}>
              <div className="box d-flex align-items-center">
                <div>
                  <img src="/images/demo_image.jpg" style={{ width: 180 }} />
                </div>

                <div className="ml-3">
                  <div className="product-name">
                    Black Lace Trim Tee - M - Some more text
                  </div>

                  <div className="">
                    <div
                      className="d-flex mb-1"
                      style={{ color: "#54595f", fontSize: 14 }}
                    >
                      <div className="">Price: </div>
                      <div className="font-weight-light ml-2">Rs. 1000</div>
                    </div>
                    <div
                      className="d-flex mb-1"
                      style={{ color: "#54595f", fontSize: 14 }}
                    >
                      <div className="">Quantity: </div>
                      <div className="font-weight-light ml-2">3</div>
                    </div>
                    <div
                      className="d-flex mb-1"
                      style={{ color: "#54595f", fontSize: 14 }}
                    >
                      <div className="">Ordered date: </div>
                      <div className="font-weight-light ml-2">31 Feb 2033</div>
                    </div>
                    <div
                      className="d-flex mb-1"
                      style={{ color: "#54595f", fontSize: 14 }}
                    >
                      <div className="">Subtotal: </div>
                      <div className="font-weight-light ml-2">Rs. 2000</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div class="dropdown-divider my-5"></div>
      <Row className="d-flex justify-content-end align-items-end">
        <Col xs={24} sm={24} xl={12}>
          <h6 className="heading">CART TOTALS</h6>
          <table className="table table-bordered">
            <tr>
              <td style={{ background: "#f9fafb" }}>SUBTOTAL</td>
              <td className="font-weight-light">£159.00</td>
            </tr>
            <tr>
              <td style={{ background: "#f9fafb" }}>TOTAL</td>
              <td className="font-weight-bold">£159.00</td>
            </tr>
          </table>
          <PrimaryButton className="w-100 mt-4">Proceed to checkout</PrimaryButton>
        </Col>
      </Row>
    </StyledPage>
  );
};

export default ShoppingBag;

const StyledPage = styled.div`
  .cart-header {
    padding: 30px 0px;
    h1 {
      color: #484f56;
    }
  }
  .table {
    td {
      font-size: 14px;
      padding: 16px;
    }
  }
  .heading {
    font-size: 14px;
    margin-bottom: 20px;
  }
  @media (max-width: 1024px) {
    padding: 20px !important;
  }
`;
