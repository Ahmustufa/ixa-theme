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

const RecentBlogs = (props) => {
  return (
    <StyledContent>
      <div className="title-header">
        <h4 className="">RECENT BLOG</h4>
      </div>

      <div>
        {props.data?.slice(0, 6)?.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-start align-items-center mt-4 w-100"
          >
            <img src={item.images[0]} width="35%" height={"60px"} />
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

RecentBlogs.defaultProps = {
  data: [
    { id: 1, images: [image1], title: "Pink Tutu with Headband" },
    { id: 2, images: [image2], title: "Pink Tutu with Headband" },
    { id: 3, images: [image3], title: "Pink Tutu with Headband" },
    { id: 4, images: [image3], title: "Pink Tutu with Headband" },
    { id: 5, images: [image3], title: "Pink Tutu with Headband" },
    { id: 6, images: [image3], title: "Pink Tutu with Headband" },
    { id: 7, images: [image3], title: "Pink Tutu with Headband" },
  ],
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
