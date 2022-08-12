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
import { products } from "../../src/mock/products";
import ProductDetails from "../../src/component/products/productDetails";
import CardStyle5 from "src/component/cards/CardStyle5";

const { Panel } = Collapse;

const productCarouselData = [
  {
    _id: 1,
    image: "/images/shoes/featured/1.webp",
    title: "Metal Decor Combat Boots",
    brandName: "Caperion",
    price: 599,
    link: "#",
  },
  {
    _id: 2,
    image: "/images/shoes/featured/2.webp",
    title: "Knit Chunky Sock Boots",
    brandName: "CUCCOO",
    price: 1199,
    link: "#",
  },
  {
    _id: 3,
    image: "/images/shoes/featured/3.webp",
    title: "Knit Chunky Heel",
    brandName: "Vutte wixo",
    price: 1099,
    link: "#",
  },
  {
    _id: 4,
    image: "/images/shoes/featured/4.webp",
    title: "Minimalist Flatform Pumps",
    brandName: "Caperion",
    price: 599,
    link: "#",
  },
  {
    _id: 5,
    image: "/images/shoes/featured/5.webp",
    title: "Point Toe Stiletto Heeled",
    brandName: "Caperion",
    price: 599,
    link: "#",
  },
  {
    _id: 6,
    image: "/images/shoes/featured/6.webp",
    title: "Mesh Panel Lace Up Trainers",
    brandName: "CUCCOO",
    price: 1199,
    link: "#",
  },
];

const Order = (props) => {
  const { productDetails, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { visible, items } = useSelector((state) => state.cart);

  const [state, setState] = useState({ color: "", size: "" });

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
      product: productDetails._id,
      quantity: 1,
    };
    userData._id && (body.users_permissions_user = userData._id);
    try {
      const { data } = await addToCart(body);
      dispatch(addItemToCart(data));
      setState({ color: "", size: "" });
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
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

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

  return (
    <StyledPage style={{ padding: 80 }}>
      <Row className="mx-auto position-relative" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={14} className="p-0 pr-lg-5">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gridGap: 12,
              gridAutoFlow: "dense",
            }}
          >
            {productDetails.images.map((item, index) => (
              <div
                key={index}
                style={{ gridColumn: `span ${Math.ceil(item.width / item.height)}` }}
              >
                <img
                  key={index}
                  alt="card-image"
                  src={item}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </Col>

        <Col xs={24} sm={24} lg={10} className={"p-0"}>
          <ProductDetails productDetails={productDetails} />
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

      {/* <section className="mt-5">
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
      </section> */}

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
        <ProductCarousel
          CardStyle={CardStyle5}
          data={productCarouselData}
          padding={"0px"}
        />
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

const productDetails = {
  _id: "123",
  title: "TRIM DRESS",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  price: 5000,
  images: [
    "/images/sout_image_1.jpg",
    "/images/sout_image_4.jpg",
    "/images/sout_image_3.jpg",
    "/images/sout_image_2.jpg",
  ],
};

export async function getServerSideProps(context) {
  return {
    props: { productDetails },
  };
}
