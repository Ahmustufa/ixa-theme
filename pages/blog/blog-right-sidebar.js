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
import CollectionCard from "../../src/component/cards/collectionCard";
import RecentBlogs from "../../src/component/blogListing/recentBlogs";
import PopularBlogs from "../../src/component/blogListing/popularBlogs";
import BlogListingCard from "../../src/component/blogListing/blogListingCard";
const { Panel } = Collapse;

const BlogRightSidebar = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { visible, items } = useSelector((state) => state.cart);

  const [state, setState] = useState({ color: "", size: "" });

  const blogData = [
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/2.jpg",
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/6.jpg",
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/10.jpg",
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/14.jpg",
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/18.jpg",
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },

    {
      image: "https://multikart-react.vercel.app/assets/images/portfolio/metro/3.jpg",
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
  ];

  return (
    <StyledPage>
      <div className="pagination-sec mt-5">
        <Row className="d-flex justify-content-end align-items-center">
          <Col lg={6} sm={24} xs={24}>
            <h5 className="m-0 text-dark">BLOG LEFT SIDEBAR</h5>
          </Col>
          <Col
            lg={18}
            sm={24}
            xs={24}
            className="d-flex justify-content-sm-start justify-content-lg-end"
          >
            <Link href="">
              <p className="m-0 mx-1"> BLOG / </p>
            </Link>{" "}
            <span> BLOG LEFT SIDEBAR</span>
          </Col>
        </Row>
      </div>
      <div style={{ padding: 80 }} className="detail-section">
        <Row gutter={[30, 30]} className="">
          <Col lg={18} sm={24} xs={24}>
            {blogData.map((item, index) => {
              return <BlogListingCard key={index} {...item} />;
            })}
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <RecentBlogs />
            <PopularBlogs className="mt-5" />
          </Col>
        </Row>
      </div>
    </StyledPage>
  );
};

export default BlogRightSidebar;

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
