import { Row, Col, Collapse, Divider, message } from "antd";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Breadcrumb from "src/component/breadcrumb";
import RecentBlogs from "../../src/component/blogListing/recentBlogs";
import PopularBlogs from "../../src/component/blogListing/popularBlogs";
import BlogListingCard from "../../src/component/blogListing/blogListingCard";
import BlogCard from "src/component/cards/blogCard";
import BlogCard2 from "src/component/cards/blogCard2";
import { bagsBlogs } from "src/mock/bagsProducts";

const BlogLeftSidebar = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { visible, items } = useSelector((state) => state.cart);

  const [state, setState] = useState({ color: "", size: "" });

  const blogData = [
    {
      images: ["https://multikart-react.vercel.app/assets/images/blog/2.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      images: ["https://multikart-react.vercel.app/assets/images/blog/2.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      images: ["https://multikart-react.vercel.app/assets/images/blog/2.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      images: ["https://multikart-react.vercel.app/assets/images/blog/2.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      images: ["https://multikart-react.vercel.app/assets/images/blog/2.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },

    {
      images: ["https://multikart-react.vercel.app/assets/images/blog/2.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
  ];

  return (
    <StyledPage>
      <Breadcrumb title="BLOG" link="BLOG / WITH LEFT SIDEBAR" className="my-5" />

      <div style={{ padding: 80 }} className="detail-section">
        <Row gutter={[30, 30]} className="flex-column-reverse flex-lg-row">
          <Col lg={6} sm={24} xs={24}>
            <RecentBlogs />
            {/* <PopularBlogs className="mt-5" /> */}
          </Col>
          <Col lg={18} sm={24} xs={24}>
            <Row gutter={[0, 30]}>
              {bagsBlogs.map((item, index) => {
                return (
                  <Col key={index} lg={8} sm={24} xs={24}>
                    <BlogCard2 {...item} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </StyledPage>
  );
};

export default BlogLeftSidebar;

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
