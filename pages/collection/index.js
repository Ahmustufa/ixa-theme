import { Row, Col, Collapse, Divider, message } from "antd";
import ShopCard from "../../src/component/cards/shopCard";
import ProductCarousel from "../../src/component/productListing/carousel";
import { PrimaryButton } from "../../src/component/buttons";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ReviewListing from "../../src/component/reviews/reviewListing";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineSync,
} from "react-icons/ai";
const { Panel } = Collapse;

const Collection = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { visible, items } = useSelector((state) => state.cart);

  const [state, setState] = useState({ color: "", size: "" });

  const gridData = [
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/2.jpg",
      price: "$40",
      title: "Women sunglasses",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/6.jpg",
      price: "$40",
      title: "maroon women bag",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/10.jpg",
      price: "$40",
      title: "man black t-shirt",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/14.jpg",
      price: "$40",
      title: "gray sneaker",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/18.jpg",
      price: "$40",
      title: "trending watch",
    },

    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/3.jpg",
      price: "$40",
      title: "Women sunglasses",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/7.jpg",
      price: "$40",
      title: "Women sunglasses",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/11.jpg",
      price: "$40",
      title: "Women sunglasses",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/15.jpg",
      price: "$40",
      title: "Women sunglasses",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/19.jpg",
      price: "$40",
      title: "Women sunglasses",
    },

    { image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/4.jpg" },
    { image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/8.jpg" },
    { image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/12.jpg" },
    { image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/16.jpg" },
    { image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/20.jpg" },

    { image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/5.jpg" },
    { image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/9.jpg" },
    { image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/13.jpg" },
    { image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/17.jpg" },
    { image: "https://multikart-react.vercel.app/assets/images/fashion/lookbook/7.jpg" },
  ];

  return (
    <StyledPage>
      <div className="pagination-sec mt-5">
        <Row className="d-flex justify-content-end align-items-center">
          <Col lg={6} sm={24} xs={24}>
            <h5 className="m-0 text-dark">COLLECTION</h5>
          </Col>
          <Col
            lg={18}
            sm={24}
            xs={24}
            className="d-flex justify-content-sm-start justify-content-lg-end"
          >
            <Link href="">
              <p className="m-0 mx-1"> HOME / </p>
            </Link>{" "}
            <span> COLLECTION</span>
          </Col>
        </Row>
      </div>
      <div style={{ padding: 80 }} className="detail-section">
        <img
          src={
            "https://multikart-react.vercel.app/_next/static/images/2-beb8795ec9decb581e91c6b47f6882ec.jpg"
          }
          width="100%"
        />
        <h5 className="my-3">FASHION</h5>
        <h5 className="my-3">
          ALSO THE LEAP INTO ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY UNCHANGED.
        </h5>

        <p>
          Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue
          id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus
          ut augue nec justo viverra laoreet. Nunc efficitur, arcu ac cursus gravida,
          lorem elit commodo urna, id viverra libero tellus non ipsum. Fusce molestie
          ultrices nibh feugiat pretium. Donec pulvinar arcu metus, et dapibus odio
          condimentum id. Quisque malesuada mauris sit amet dui feugiat, ut pretium mauris
          luctus. Ut aliquam, tellus nec molestie condimentum, tellus arcu dignissim quam,
          a gravida nunc nulla vel magna. Sed pulvinar tortor et euismod blandit. Proin
          accumsan orci ac nunc fermentum vehicula.
        </p>
        <Row gutter={[30, 30]}>
          <Col lg={6} sm={24} xs={24}>
            {gridData.slice(0, 5).map((item, index) => {
              return (
                <div className="image-card">
                  <img src={item.image} width="100%" />
                  <div className="cart-actions">
                    <div className="add_to_cart">
                      <AiOutlineShoppingCart size={20} title={"Add to cart"} />
                    </div>
                    <div className="add_to_wishlist">
                      <AiOutlineHeart size={20} title={"Add to wishlist"} />
                    </div>
                    <div className="quick_view">
                      <AiOutlineSearch size={20} title={"Quick view"} />
                    </div>
                    <div className="compare">
                      <AiOutlineSync size={20} title={"Compare"} />
                    </div>
                  </div>
                  <div className="product-detail">
                    <h6>{item.title}</h6>
                    <h4>{item.price}</h4>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col lg={6} sm={24} xs={24}>
            {gridData.slice(5, 10).map((item, index) => {
              return (
                <div className="image-card">
                  <img src={item.image} width="100%" />
                </div>
              );
            })}
          </Col>
          <Col lg={6} sm={24} xs={24}>
            {gridData.slice(10, 15).map((item, index) => {
              return (
                <div className="image-card">
                  <img src={item.image} width="100%" />
                </div>
              );
            })}
          </Col>
          <Col lg={6} sm={24} xs={24}>
            {gridData.slice(15, 20).map((item, index) => {
              return (
                <div className="image-card">
                  <img src={item.image} width="100%" />
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
    </StyledPage>
  );
};

export default Collection;

const StyledPage = styled.div`
  .pagination-sec {
    background: #f8f8f8;
    padding: 30px 80px;
    p {
      color: #555555;
      font-weight: 600;
    }
    p:hover {
      cursor: pointer;
      color: #000;
    }
    span {
      color: #6c757d;
    }
  }
  .detail-section {
    p {
      font-size: 14px;
      color: #777777;
      line-height: 24px;
      letter-spacing: 0.03em;
    }
  }

  .image-card {
    position: relative;
    margin: auto;
    overflow: hidden;
    margin-bottom: 30px;
    img {
      transition: 0.5s ease;
      transform: scale(1);
      display: block;
    }
    :hover img {
      transform: scale(1.2) rotate(2deg);
      transition: all 0.4s ease;
    }
    :hover .cart-actions .add_to_wishlist {
      animation: fadeInDown 0.5s ease-in-out;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .cart-actions {
      top: 7px;
      right: 7px;
      opacity: 1;
      position: absolute;
      bottom: 40px;
      text-align: center;
      margin: 0 auto;
      display: inline-block;
      justify-content: center;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;

      .add_to_cart,
      .add_to_wishlist,
      .quick_view,
      .compare {
        border-radius: 100%;
        border: 1px solid #fff;
        margin: 5px 0;
        background-color: hsla(0, 0%, 100%, 0.8);
        padding: 7px;
        color: #333;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .product-detail {
      opacity: 0;
      position: absolute;
      background-color: #fff;
      padding: 10px;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      width: 65%;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: -10px;
      text-align: center;
      h6 {
        color: #525252;
        font-size: 16px;
      }
      h4 {
        font-size: 18px;
        font-weight: 400;
        color: #000;
        margin-bottom: 0;
      }
    }
    :hover .product-detail {
      opacity: 1;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      bottom: 15px;
    }
  }

  @media (max-width: 1024px) {
    .detail-section {
      padding: 20px !important;
    }
    .pagination-sec {
      padding: 20px !important;
    }
  }
`;
