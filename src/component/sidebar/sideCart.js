import { Drawer, Row, Col, Divider } from "antd";
import styled from "styled-components";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";
import { PrimaryButton } from "../buttons";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../redux/actions/cartActions";

const SideCart = (props) => {
  const dispatch = useDispatch();
  const { visible, items } = useSelector((state) => state.cart);

  return (
    <StyledDrawer
      visible={visible}
      closable={false}
      width={480}
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

      {[1, 2, 3].map((item, index) => (
        <>
          <div ksy={index} className="my-3">
            <Row gutter={[16, 0]}>
              <Col span={7}>
                <img src="/images/shop_card_image.jpg" className="w-100" />
              </Col>

              <Col span={14}>
                <div className="product-name mb-2">BLACK LACE TRIM TEE - M</div>

                <Row align="middle" gutter={[24, 0]}>
                  <Col>
                    <div className="quantity-container">
                      <div className="decrease-button">-</div>
                      <div className="quantity">2</div>
                      <div className="increase-button">+</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="price">Rs. 1000</div>
                  </Col>
                </Row>
              </Col>

              <Col span={3}>
                <BiTrash style={{ cursor: "pointer", color: "#54595f", fontSize: 16 }} />
              </Col>
            </Row>
          </div>
          {index < 2 ? <Divider style={{ margin: 0 }} /> : null}
        </>
      ))}

      <section className="cart-footer">
        <Divider style={{ margin: "16px 0" }} />
        <div className="d-flex justify-content-between">
          <b style={{ color: "#54595f" }}>SUBTOTAL</b>
          <div>Rs. 1000</div>
        </div>
        <Divider style={{ margin: "12px 0" }} />

        <PrimaryButton className="mt-2 w-100">Checkout</PrimaryButton>
      </section>
    </StyledDrawer>
  );
};

export default SideCart;

const StyledDrawer = styled(Drawer)`
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
  }

  .cart-footer {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 24px;
  }
`;
