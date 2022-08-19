import { Row, Col, Collapse, Divider, message } from "antd";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "src/component/breadcrumb";
import RecentBlogs from "../../src/component/blogListing/recentBlogs";
import PopularBlogs from "../../src/component/blogListing/popularBlogs";
import BlogListingCard from "../../src/component/blogListing/blogListingCard";

const BlogRightSidebar = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { visible, items } = useSelector((state) => state.cart);

  const [state, setState] = useState({ color: "", size: "" });

  const blogData = [
    {
      images: ["https://multikart-react.vercel.app/assets/images/portfolio/metro/2.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      images: ["https://multikart-react.vercel.app/assets/images/portfolio/metro/6.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      images: ["https://multikart-react.vercel.app/assets/images/portfolio/metro/10.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      images: ["https://multikart-react.vercel.app/assets/images/portfolio/metro/14.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      images: ["https://multikart-react.vercel.app/assets/images/portfolio/metro/18.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },

    {
      images: ["https://multikart-react.vercel.app/assets/images/portfolio/metro/3.jpg"],
      price: "$40",
      title:
        "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
  ];

  return (
    <StyledPage>
      <Breadcrumb title="BLOG" link="BLOG / WITH RIGHT SIDEBAR" className="my-5" />

      <div style={{ padding: 80 }} className="detail-section">
        <Row gutter={[30, 30]} className="">
          <Col lg={18} sm={24} xs={24}>
            {blogData.map((item, index) => {
              return <BlogListingCard key={index} {...item} />;
            })}
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <RecentBlogs />
            {/* <PopularBlogs className="mt-5" /> */}
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
