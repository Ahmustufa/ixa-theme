import styled from "styled-components";
import { Row, Col, Divider } from "antd";
import ProductCard from "../cards/productCard";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import ProductCardWithIcons from "../cards/productCardWithIcons";
import { image1, image2, image3, image4 } from "../../../images";
import { Rate } from "antd";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef } from "react";

const blogData = [
  { id: 1, image: image1, title: "Pink Tutu with Headband" },
  { id: 2, image: image2, title: "Pink Tutu with Headband" },
  { id: 3, image: image3, title: "Pink Tutu with Headband" },
  { id: 4, image: image3, title: "Pink Tutu with Headband" },
  { id: 5, image: image3, title: "Pink Tutu with Headband" },
  { id: 6, image: image3, title: "Pink Tutu with Headband" },
  { id: 7, image: image3, title: "Pink Tutu with Headband" },
];

const RecentBlogs = (props) => {
  return (
    <StyledContent>
      <div className="title-header">
        <h4 className="">RECENT BLOG</h4>
      </div>

      <div>
        {blogData?.slice(0, 6)?.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-start align-items-center mt-4 w-100"
          >
            <img
              src={"https://multikart-react.vercel.app/assets/images/blog/2.jpg"}
              width="35%"
              height={"60px"}
            />
            <div className="content ml-3">
              <h6>25 January 2018</h6>
              <p>0 hits</p>
            </div>
          </div>
        ))}
      </div>
    </StyledContent>
  );
};

export default RecentBlogs;

const StyledContent = styled.div`
  border: 1px solid #ddd;
  padding: 25px;
  .title-header h4 {
    color: #333;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 18px;
  }
  .content {
    p {
      line-height: 20px;
      margin-bottom: 0;
      color: #555;
    }
    h6 {
      margin-bottom: 0;
      line-height: 20px;
      color: #333;
      font-weight: 700;
    }
  }
`;
