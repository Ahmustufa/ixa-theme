import { Row, Col, Collapse, Divider, message } from "antd";
import styled from "styled-components";
import ReviewListing from "../../../src/component/reviews/reviewListing";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineSync,
} from "react-icons/ai";
import Slider from "react-slick";
import BlogCard from "../../../src/component/cards/blogCard";
import CompareCard from "../../../src/component/cards/compareCard";
import ProductCardWithIcons from "../../../src/component/cards/productCardWithIcons";
import CardStyle1 from "../../../src/component/cards/CardStyle1";
import CardStyle2 from "../../../src/component/cards/CardStyle2";
import CardStyle3 from "../../../src/component/cards/CardStyle3";

const { Panel } = Collapse;

const ProductBox = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.products);

  console.log("items", items);
  const [state, setState] = useState({ color: "", size: "" });

  const productStyle1 = [
    {
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 40,
      title: "Waist dress",
    },
    {
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      price: 40,
      title: "Belted dress",
    },
    {
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      price: 40,
      title: "Rain Jacket",
    },
    {
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      price: 40,
      title: "DANVOUY Womens ",
    },
  ];

  const productStyle2 = [
    {
      image: "https://multikart-react.vercel.app/assets/images/pro1/16.jpg",
      price: 250,
      title: "Bag 1",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/pro1/1.jpg",
      price: 450,
      title: "Bag 2",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/pro1/12.jpg",
      price: 710,
      title: "Bag 3",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/pro1/10.jpg",
      price: 400,
      title: "Bag 4",
    },
  ];

  return (
    <StyledPage>
      <div className="pagination-sec mt-5">
        <Row className="d-flex justify-content-end align-items-center">
          <Col lg={6} sm={24} xs={24}>
            <h5 className="m-0 text-dark">ELEMENTS</h5>
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
            <Link href="">
              <p className="m-0 mx-1"> ELEMENTS / </p>
            </Link>{" "}
            <span> PRODUCT-BOX</span>
          </Col>
        </Row>
      </div>

      <div style={{ padding: 80 }} className="detail-section">
        <div className=" d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 1</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex">
            {productStyle1.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle1 {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div
        className="detail-section"
        style={{ backgroundColor: " #f8f8f8", padding: 80 }}
      >
        <div className="d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 2</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex ">
            {productStyle2.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle2 {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div style={{ padding: 80 }} className="detail-section">
        <div className=" d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 3</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex">
            {productStyle1.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle3 {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </StyledPage>
  );
};

export default ProductBox;

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

  .title2 {
    text-align: center;
    .title-inner2{
        margin-bottom: 50px;
        position: relative;
        display: inline-block;
        padding: 0 25px;
        font-size: 36px;
        color: #222;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 1;
        letter-spacing: .02em;
        ::after{
            position: absolute;
            height: 5px;
            width: 100%;
            background-color: #f9b7b1;
            opacity: .4;
            content: "";
            left: 0;
            right: 0;
            margin: 0 auto;
            bottom: 3px;
            z-index: -1;
        }
    }
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
