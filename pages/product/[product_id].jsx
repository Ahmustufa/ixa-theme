import { Row, Col, Collapse, Divider, message } from "antd";
import ShopCard from "../../src/component/cards/shopCard";
import ProductCarousel from "../../src/component/productListing/carousel";
import { PrimaryButton } from "../../src/component/buttons";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ReviewListing from "../../src/component/reviews/reviewListing";
import { useState } from "react";
import axios from "axios";
import { addItemToCart, openCart } from "../../src/redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeWishlistItem } from "../../src/redux/actions";
import { Mutations, errorHandler, useFetch } from "../../src/api/config";

const { Panel } = Collapse;

const Order = (props) => {
  const { productDetails, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { visible, items } = useSelector((state) => state.cart);

  const [state, setState] = useState({ color: "", size: "" });

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "PKR",
  });

  var sizes = [];
  if (state.color !== "") {
    productDetails.inventories.forEach((item) => {
      if (item.color === state.color && item.quantity > 0) {
        sizes.push(item.size);
      }
    });
  }

  let getInventorId = productDetails.inventories.find((item) => {
    if (item.color === state.color && item.size === state.size) {
      return item;
    }
  });

  const [addToCart, addToCartLoading] = useFetch(Mutations.addToCart);

  const checkIfExist = () => {
    const cartItem = items.filter((item) => {
      if (item.product._id == productDetails._id) {
        return true;
      } else {
        return false;
      }
    });

    if (cartItem.length) {
      // open cart
      dispatch(openCart());
    } else {
      addToCartFunc();
    }
  };
  const addToCartFunc = async () => {
    const body = {
      inventory: getInventorId?._id,
      product: productDetails._id,
      quantity: 1,
    };
    userData._id && (body.users_permissions_user = userData._id);
    try {
      const { data } = await addToCart(body);
      dispatch(addItemToCart(data));
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  // --------------ADD TO WISHLIST-------------
  const [addToWishlist, addToWishlistLoading] = useFetch(Mutations.addToWishlist);
  const addItemToWishlistFunc = async (item) => {
    const body = {
      product: productDetails._id,
      users_permissions_user: userData?._id,
    };
    try {
      const { data } = await addToWishlist(body);
      dispatch(addItemToWishlist(data));
      setState({ color: "", size: "" });
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  // --------------REMOVE FROM WISHLIST-------------
  const [removeFromWishlist, removeFromWishlistLoading] = useFetch(
    Mutations.removeFromWishlist
  );
  const removeItemFromWishlistFunc = async (item) => {
    const getWishlistId = wishlist.find((item) => item.product._id == productDetails._id);
    try {
      const { data } = await removeFromWishlist(getWishlistId._id);
      dispatch(removeWishlistItem(data));
      message.success("Remove from wishlist successfully");
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  let wishlistItem = wishlist.map((item) => item.product._id);
  return (
    <StyledPage style={{ padding: 80 }}>
      {/* <div className="mx-auto my-4 fw-bold">
        Home / Products / {productDetails.productName}
      </div> */}

      <Row className="mx-auto position-relative" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={14} className={"p-0 pr-lg-5"}>
          <div style={{ position: "sticky", top: 60, display: "flex", flexWrap: "wrap" }}>
            <Row gutter={[12, 12]}>
              <Col>
                <img
                  alt="card-image"
                  src={
                    productDetails.images &&
                    process.env.REACT_APP_STRAPI_URL + productDetails.images[0].url
                  }
                  className="product-image"
                />
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={24} sm={24} lg={10} className={"p-0"}>
          <div
            className="order"
            style={{
              width: "-webkit-fill-available",
              // padding: 16,
              position: "sticky",
              top: 90,
              color: "#54595f",
            }}
          >
            <div style={{ fontSize: 40 }}>{productDetails.productName}</div>
            <div style={{ fontSize: 12, margin: "16px 0" }}>
              {productDetails.brandName}
            </div>
            <div style={{ fontSize: 20, fontWeight: 600 }}>
              {formatedPrice.format(productDetails.price)}
            </div>
            <div style={{ fontWeight: 300 }}>{productDetails.description}</div>

            <div className="d-flex align-items-center my-4">
              <div style={{ width: 160 }}>COLOR</div>
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`color-palette ${state.color == color && "selected"}`}
                  onClick={() => setState({ color, size: "" })}
                />
              ))}
            </div>

            {state.color !== "" ? (
              <div className="d-flex align-items-center my-4">
                <div style={{ width: 160 }}>SIZE</div>
                {sizes.map((size, index) => (
                  <div
                    key={index}
                    onClick={() => setState({ ...state, size })}
                    className={`size-box ${state.size == size && "selected"}`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            ) : null}

            <Row align="middle" className="pt-4">
              <Col>
                <PrimaryButton
                  disabled={state.color == "" || state.size == ""}
                  onClick={() => {
                    checkIfExist();
                    // dispatch(addItemToCart(productDetails));
                  }}
                  className="mr-3"
                >
                  {addToCartLoading && <LoadingOutlined />} ADD TO CART
                </PrimaryButton>
              </Col>

              <Col>
                {wishlistItem.includes(productDetails._id) ? (
                  <div
                    className="wish-button"
                    onClick={() => {
                      removeItemFromWishlistFunc();
                      // dispatch(removeWishlistItem(productDetails._id));
                    }}
                  >
                    <BsSuitHeartFill className="icon" />
                    <div className="text">REMOVE FROM WISHLIST</div>
                  </div>
                ) : (
                  <div
                    className="wish-button"
                    onClick={() => {
                      addItemToWishlistFunc(productDetails);
                      // dispatch(addItemToWishlist(productDetails._id))
                    }}
                  >
                    <BsSuitHeart className="icon" />
                    <div className="text">ADD TO WISHLIST</div>
                  </div>
                )}
              </Col>
            </Row>

            <Collapse className="mt-5" ghost>
              <Panel header={<div style={{ fontWeight: 600 }}>Information</div>}>
                <div className="title">Shipping</div>
                <div className="description">
                  We currently offer free shipping worldwide on all orders over Rs. 1000.
                </div>

                <div className="title">Sizing</div>
                <div className="description">
                  Fits true to size. Do you need size advice?
                </div>

                <div className="title">Return & exchange</div>
                <div className="description">
                  If you are not satisfied with your purchase you can return it to us
                  within 14 days for an exchange or refund. More info.
                </div>

                <div className="title">Assistance</div>
                <div className="description">
                  Contact us on (+44) 555 88 65, or email us at
                  support@polkadotsretail.com.
                </div>
              </Panel>

              <Panel header={<div style={{ fontWeight: 600 }}>Specification</div>}>
                <Row align="middle">
                  <Col span={12}>
                    <div>BRAND</div>
                  </Col>
                  <Col span={12}>
                    <div className="description text-right m-0">
                      {productDetails.brandName}
                    </div>
                  </Col>
                  <Col span={24}>
                    <Divider style={{ margin: "16px 0" }} />
                  </Col>
                  <Col span={12}>
                    <div>MATERIAL</div>
                  </Col>
                  <Col span={12}>
                    <div className="description text-right m-0">
                      {productDetails.material}
                    </div>
                  </Col>
                  <Col span={24}>
                    <Divider style={{ margin: "16px 0" }} />
                  </Col>
                  <Col span={12}>
                    <div>SIZE</div>
                  </Col>
                  <Col span={12}>
                    <div className="description text-right m-0">L, M, S, XS, XL, XXL</div>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </div>
        </Col>
      </Row>

      <section className="mt-5" style={{ color: "#54595f", lineHeight: "28px" }}>
        <h2 style={{ color: "#54595f" }}>Description</h2>
        <p style={{ fontWeight: 300 }}>
          Compellingly grow performance based mindshare through parallel potentialities.
          Rapidiously underwhelm top-line catalysts for change before best-of-breed
          materials. Competently brand timely catalysts for change through sustainable
          systems. Completely expedite ubiquitous bandwidth after integrated action items.
          Progressively transform leading-edge supply chains whereas flexible niche
          markets.
        </p>
      </section>

      <section className="mt-5">
        <Collapse>
          <Panel
            header={
              <div style={{ fontSize: 20, letterSpacing: "1px", fontWeight: 600 }}>
                Reviews
              </div>
            }
            showArrow={false}
          >
            <ReviewListing productId={productDetails._id} reviews={reviews} />
          </Panel>
        </Collapse>
      </section>

      <section className="shop-card-section">
        <Row justify="space-between" gutter={[0, 40]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={11}>
            <ShopCard />
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={11}>
            <ShopCard />
          </Col>
        </Row>
      </section>

      <section className="my-5">
        <ProductCarousel padding={"0px"} />
      </section>
    </StyledPage>
  );
};

export default Order;

const StyledPage = styled.div`
  .product-image {
    margin-bottom: 8px;
    vertical-align: middle;
    width: 100%;
  }
  .size-box {
    border: 1px solid #ececec;
    padding: 4px 0;
    margin: 0 12px;
    cursor: pointer;
    width: 72px;
    text-align: center;

    &.selected {
      border: 1px solid #727272;
    }
  }

  .color-palette {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: relative;
    margin: 0 12px;
    cursor: pointer;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.09), -2px -2px 3px rgba(0, 0, 0, 0.09),
      -2px 2px 3px rgba(0, 0, 0, 0.09), 2px -2px 3px rgba(0, 0, 0, 0.09);

    &.selected:after {
      content: "";
      width: 40px;
      height: 40px;
      position: absolute;
      top: -4px;
      left: -4px;
      border: 1px solid #727272;
      border-radius: 50%;
    }
  }

  .wish-button {
    display: flex;
    align-items: center;
    color: #212529;
    font-weight: 600;
    cursor: pointer;

    .icon {
      font-size: 24px;
      margin-right: 8px;
    }
    .text {
      position: relative;
      :after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0%;
        background-color: #212529;
        transition: 0.3s;
      }

      :hover:after {
        width: 100%;
      }
    }
  }

  .title {
    color: #3a3d40;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
  }

  .description {
    color: #3a3d40;
    font-weight: 300;
    margin-bottom: 12px;
  }
  .shop-card-section {
    padding: 80px;
  }
  @media (max-width: 1024px) {
    padding: 20px !important;
    .shop-card-section {
      padding: 0px !important;
    }
  }
`;

export async function getServerSideProps(context) {
  try {
    var { data } = await axios.get(
      `http://64.227.31.159:1337/products/${context.params.product_id}`
    );
    // var stock = {};
    // data.inventories.forEach((item) => {
    //   if (stock.hasOwnProperty(item.color)) {
    //     stock[item.color][item.size] = item.quantity;
    //   } else {
    //     stock[item.color] = {
    //       [item.size]: item.quantity,
    //     };
    //   }
    // });
    var { data: reviews } = await axios.get(
      `http://64.227.31.159:1337/reviews/product/${context.params.product_id}`
    );
    var colors = [];
    data.inventories.forEach((item) => {
      if (!colors.includes(item.color)) {
        colors.push(item.color);
      }
    });
  } catch (err) {
    return {
      notFound: true,
    };
  }

  if (data == null) {
    return {
      // redirect: { destination: "/" },
      notFound: true,
    };
  } else {
    return {
      props: { productDetails: data, colors, reviews },
    };
  }
}
