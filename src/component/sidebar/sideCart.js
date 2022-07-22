import React, { useState } from "react";
import { Drawer, Row, Col, Divider, message } from "antd";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";
import Link from "next/link";
import { PrimaryButton } from "../buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCart,
  removeCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "../../redux/actions/cartActions";
import { Mutations } from "../../api/mutations";
import { useFetch } from "../../hooks/useFetch";
import { errorHandler } from "../../helper/errorHandler";
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

  // ========Remove cart============
  const [deleteCart, deleteCartLoading] = useFetch(Mutations.deleteCartItem);
  const removeCartItemFunc = async (item) => {
    setLoadingState(item._id);
    try {
      const { data } = await deleteCart(item);
      dispatch(removeCartItem(data));
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  // ========Update cart quantity increament============
  const [updateInCart, updateInCartLoading] = useFetch(Mutations.updateCartItem);
  const updateCartItemInceamentFunc = async (body, id) => {
    try {
      const { data } = await updateInCart(body, id);
      dispatch(increaseCartItemQuantity(data));
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  // ========Update cart quantity decreament============
  const [updateDecCart, updateDecCartLoading] = useFetch(Mutations.updateCartItem);
  const updateCartItemDecreamentFunc = async (body, id) => {
    try {
      const { data } = await updateDecCart(body, id);
      dispatch(decreaseCartItemQuantity(data));
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateCartItemDecreamentFunc(
                                {
                                  quantity: item.quantity - 1,
                                  inventory: item.inventory._id,
                                },
                                item._id
                              );
                              // dispatch(decreaseCartItemQuantity(item));
                            }
                          }}
                          className="decrease-button"
                        >
                          {`−`}
                        </div>
                        <div className="quantity">{item.quantity}</div>
                        <div
                          onClick={
                            () =>
                              updateCartItemInceamentFunc(
                                {
                                  quantity: item.quantity + 1,
                                  inventory: item.inventory._id,
                                },
                                item._id
                              )
                            // dispatch(increaseCartItemQuantity(item))
                          }
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
                    <Spin indicator={antIcon} />
                  ) : (
                    <BiTrash
                      onClick={
                        () => removeCartItemFunc(item)
                        // dispatch(removeCartItem(item))
                      }
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
