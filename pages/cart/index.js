import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Form, message } from "antd";
import styled from "styled-components";
import CartSteps from "../../src/component/cartSteps";
import { ButtonWrapper, PrimaryButton } from "../../src/component/buttons";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

const ShoppingBag = () => {
  const { items } = useSelector((state) => state.cart);
  const calculateTotal = (cart) => {
    const subTotal = cart.reduce((accu, item) => (accu += item.quantity * item.price), 0);
    // console.log("Sub total", subTotal);
    return subTotal.toLocaleString();
  };

  return (
    <StyledPage style={{ padding: 80 }}>
      <div className="cart-header">
        <h1>Cart</h1>
      </div>
      {items.length == 0 ? (
        <Row className="mt-3">
          <Col style={{ background: "#f9fafb" }} span={24} className="p-4">
            <div className="d-flex justify-content-start align-items-center">
              <AiOutlineShopping color={"#ced4da"} size={50} />
              <p className="mb-0 ml-5 title" style={{ color: "#808080" }}>
                Your cart is currently empty.
              </p>
            </div>
          </Col>
          <PrimaryButton className="mt-5">RETURN TO SHOP</PrimaryButton>
        </Row>
      ) : (
        <>
          <CartSteps step={1} />
          <div className="mt-5">
            <Row gutter={[24, 24]}>
              {items.map((item, index) => (
                <Col key={index} xl={8} xs={24} sm={24}>
                  <div className="box d-flex align-items-center">
                    <div>
                      <img
                        src={process.env.REACT_APP_STRAPI_URL + item.images[0].url}
                        style={{ width: 180 }}
                      />
                    </div>

                    <div className="ml-3">
                      <div className="product-name">{item.productName}</div>

                      <div className="">
                        <div
                          className="d-flex mb-1"
                          style={{ color: "#54595f", fontSize: 14 }}
                        >
                          <div className="">Price: </div>
                          <div className="font-weight-light ml-2">
                            Rs. {item.price.toLocaleString()}
                          </div>
                        </div>
                        <div
                          className="d-flex mb-1"
                          style={{ color: "#54595f", fontSize: 14 }}
                        >
                          <div className="">Quantity: </div>
                          <div className="font-weight-light ml-2">{item.quantity}</div>
                        </div>
                        {/* <div
                          className="d-flex mb-1"
                          style={{ color: "#54595f", fontSize: 14 }}
                        >
                          <div className="">Ordered date: </div>
                          <div className="font-weight-light ml-2">31 Feb 2033</div>
                        </div> */}
                        <div
                          className="d-flex mb-1"
                          style={{ color: "#54595f", fontSize: 14 }}
                        >
                          <div className="">Subtotal: </div>
                          <div className="font-weight-light ml-2">
                            Rs. {(item.price * item.quantity).toLocaleString()}
                          </div>
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
                {/* <tr>
                  <td style={{ background: "#f9fafb" }}>SUBTOTAL</td>
                  <td className="font-weight-light">£ {subtotal}</td>
                </tr> */}
                <tr>
                  <td style={{ background: "#f9fafb" }}>TOTAL</td>
                  <td className="font-weight-bold">PKR {calculateTotal(items)}</td>
                </tr>
              </table>
              <PrimaryButton className="w-100 mt-4">Proceed to checkout</PrimaryButton>
            </Col>
          </Row>
        </>
      )}
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
  .title {
    font-size: 14px;
    margin-bottom: 0px;
  }
  @media (max-width: 1024px) {
    padding: 20px !important;
  }
`;
