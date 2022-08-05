import React, { useState } from "react";
import { Drawer, Row, Col, Divider } from "antd";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";
import Link from "next/link";
import { PrimaryButton } from "../buttons";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../redux/actions/cartActions";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const SideCart = (props) => {
  const dispatch = useDispatch();
  const [loadingState, setLoadingState] = useState("");
  const { visible, items } = useSelector((state) => state.cart);

  const calculateTotal = (cart) => {
    const subTotal = cart.reduce((accu, item) => (accu += item.quantity * item.price), 0);
    return subTotal.toLocaleString();
  };

  return (
    <StyledDrawer
      visible={visible}
      closable={false}
      // width={480}
      className="side-drawer-cart"
      onClose={() => dispatch(closeCart())}
    >
      <Row justify="space-between">
        <Col>
          <div style={{ color: "#54595f", fontSize: 20, fontWeight: 600 }}>
            SHOPPING BAG <sup>1</sup>
          </div>
        </Col>
        <Col>
          <IoClose
            onClick={() => dispatch(closeCart())}
            style={{ cursor: "pointer", color: "#54595f", fontSize: 24 }}
          />
        </Col>
      </Row>
      <Divider style={{ margin: 0 }} />
      <div
        style={{
          height: window.innerHeight - 210,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {items.map((item, index) => (
          <>
            <div ksy={index} className="my-3">
              <Row gutter={[16, 0]}>
                <Col span={7}>{/* <img src={item.images[0]} className="w-100" /> */}</Col>

                <Col span={14}>
                  <div className="product-name mb-2">{item.title}</div>

                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={12} lg={12}>
                      <div className="quantity-container">
                        <div
                          // onClick={() => dispatch(decreaseCartItemQuantity(data))}
                          className="decrease-button"
                        >
                          {`−`}
                        </div>
                        <div className="quantity">{item.quantity}</div>
                        <div
                          // onClick={() => dispatch(increaseCartItemQuantity(data))}
                          className="increase-button"
                        >
                          +
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} lg={12}>
                      <div className="price mt-2">PKR {item.price?.toLocaleString()}</div>
                    </Col>
                  </Row>
                </Col>

                <Col span={3}>
                  {loadingState == item._id ? (
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />} />
                  ) : (
                    <BiTrash
                      // onClick={() => dispatch(removeCartItem(data))}
                      style={{ cursor: "pointer", color: "#54595f", fontSize: 16 }}
                    />
                  )}
                </Col>
              </Row>
            </div>
            {index + 1 <= items.length ? <Divider style={{ margin: 0 }} /> : null}
          </>
        ))}
      </div>
      <section className="cart-footer">
        <Divider style={{ margin: "16px 0" }} />
        <div className="d-flex justify-content-between">
          <b style={{ color: "#54595f" }}>SUBTOTAL</b>
          <div>PKR {calculateTotal(items)}</div>
        </div>
        <Divider style={{ margin: "12px 0" }} />
        <Link href="/cart/checkout">
          <PrimaryButton className="mt-2 w-100">Checkout</PrimaryButton>
        </Link>
      </section>
    </StyledDrawer>
  );
};

export default SideCart;

const StyledDrawer = styled(Drawer)`
  .side-drawer-cart {
    width: 480px;
  }
  .quantity-container {
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
  }

  .increase-button,
  .decrease-button {
    height: 100%;
    width: 28px;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }

  .cart-footer {
    background-color: #fff;
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 24px;
  }
  @media (max-width: 800px) {
    .side-drawer-cart {
      width: 420px;
    }
  }
`;
