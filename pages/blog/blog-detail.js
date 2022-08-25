import { Row, Col, Collapse, Divider, message, Avatar } from "antd";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "src/component/breadcrumb";
import RecentBlogs from "../../src/component/blogListing/recentBlogs";
import PopularBlogs from "../../src/component/blogListing/popularBlogs";
import BlogListingCard from "../../src/component/blogListing/blogListingCard";
import { AiOutlineHeart } from "react-icons/ai";
import {
  BsHandIndexThumb,
  BsHandThumbsDown,
  BsHandThumbsDownFill,
  BsHandThumbsUp,
  BsHandThumbsUpFill,
} from "react-icons/bs";

const BlogDetail = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);

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

      <div style={{ padding: "50px 80px" }} className="detail-section">
        <Row gutter={[30, 30]} className="border">
          <Col lg={18} sm={24} xs={24}>
            <Row gutter={[30, 30]} className="m-4">
              <Col lg={12} sm={24} xs={24} className="d-flex">
                <Avatar
                  className="border"
                  size={60}
                  src="https://joeschmoe.io/api/v1/random"
                />
                <div className="ml-3 d-flex flex-column justify-content-between">
                  <p className="mb-0 font-weight-bold">Hunter Chang</p>
                  <p className="mb-0 ">Aug 20, 2021</p>
                </div>
              </Col>
              <Col
                lg={12}
                sm={24}
                xs={24}
                className="d-flex justify-content-end align-items-center"
              >
                {like ? (
                  <BsHandThumbsUpFill
                    className="likeBtn"
                    onClick={() => {
                      setLike(false);
                    }}
                    size={40}
                  />
                ) : (
                  <BsHandThumbsUp
                    className="likeBtn"
                    onClick={() => {
                      setLike(true);
                    }}
                    size={40}
                  />
                )}
                {disLike ? (
                  <BsHandThumbsDownFill className="dislikeBtn"  onClick={() => setDisLike(false)} size={40} />
                ) : (
                  <BsHandThumbsDown className="dislikeBtn" onClick={() => setDisLike(true)} size={40} />
                )}
              </Col>
            </Row>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <RecentBlogs />
          </Col>
        </Row>
      </div>
    </StyledPage>
  );
};

export default BlogDetail;

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

  .likeBtn, .dislikeBtn{
    border: 1px solid gray;
    border-radius: 100px;
    padding: 7px;
    margin: 0 10px;
  }
  .likeBtn:hover{
    border: 1px solid #147814;
    background: #9eff9e;
  }
  .dislikeBtn:hover{
    border: 1px solid #147814;
    background: #9eff9e;
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
