import { Row, Col, Collapse, Divider, message } from "antd";
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
import Slider from "react-slick";
import BlogCard from "../../src/component/cards/blogCard";
import CompareCard from "../../src/component/cards/compareCard";
import { TiShoppingCart } from "react-icons/ti";
import { PrimaryButton } from "src/component/buttons";
import { closeCart } from "src/redux/actions/cartActions";

const { Panel } = Collapse;

const carouselSettings = {
  // dots: true,
  // speed: 500,
  // autoplay: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

const Compare2 = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: compareList } = useSelector((state) => state.compareList);

  return (
    <StyledPage>
      <div className="pagination-sec mt-5">
        <Row className="d-flex justify-content-end align-items-center">
          <Col lg={6} sm={24} xs={24}>
            <h5 className="m-0 text-dark">COMPARE</h5>
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
            <span> COMPARE</span>
          </Col>
        </Row>
      </div>
      <div style={{ padding: 80 }} className="detail-section">
        {compareList.length > 0 ? (
          <Row gutter={[30, 30]} className="flex-column-reverse flex-lg-row">
            <Col lg={24} sm={24} xs={24}>
              <Slider {...carouselSettings}>
                {compareList.map((item, index) => (
                  <div key={index}>
                    <CompareCard productDetails={item} {...item} />
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
              width: "100%",
              textAlign: "center",
            }}
          >
            <div>
              <TiShoppingCart style={{ fontSize: 64, marginBottom: 24 }} />
              <h5>Your compare list is currently empty.</h5>

              <PrimaryButton style={{ borderRadius: 100 }} className="mt-2 w-100">
                <Link href={"/"}>Continue Shopping</Link>
              </PrimaryButton>
            </div>
          </div>
        )}
      </div>
    </StyledPage>
  );
};

export default Compare2;

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

  @media (max-width: 1024px) {
    .detail-section {
      padding: 20px !important;
    }
    .pagination-sec {
      padding: 20px !important;
    }
  }
`;
