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
const carouselSettings = {
  // dots: true,
  speed: 500,
  // autoplay: true,
  infinite: true,
  vertical: true,
  verticalSwiping: false,
  // adaptiveHeight: true,
  slidesToShow: 3,
  slidesToScroll: 3,
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

const blogData = [
  { id: 1, image: image1, title: "Pink Tutu with Headband" },
  { id: 2, image: image2, title: "Pink Tutu with Headband" },
  { id: 3, image: image3, title: "Pink Tutu with Headband" },
  { id: 4, image: image3, title: "Pink Tutu with Headband" },
  { id: 5, image: image3, title: "Pink Tutu with Headband" },
  { id: 6, image: image3, title: "Pink Tutu with Headband" },
  { id: 7, image: image3, title: "Pink Tutu with Headband" },
];

const ProductVerticalCarousel = (props) => {
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <StyledContent style={{ padding: props.padding ? props.padding : "5%" }}>
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="mb-0">NEW PRODUCT</h6>
        <div className="icons-group">
          <FiChevronLeft size={30} onClick={() => previous()} />
          <FiChevronRight size={30} onClick={() => next()} />
        </div>
      </div>
      <Divider />

      <Slider ref={sliderRef} {...carouselSettings}>
        {blogData.map((item, index) => (
          <div className="d-flex justify-content-start align-items-center w-100">
            <img src={image4} width="30%" height={"160px"} />
            <div className="content ml-4">
              <Rate className="mb-2" disabled defaultValue={2} />
              <h6>TRIM DRESS</h6>
              <h4>$266</h4>
            </div>
          </div>
        ))}
      </Slider>
    </StyledContent>
  );
};

export default ProductVerticalCarousel;

const StyledContent = styled.div`
  .content {
    h6 {
      font-size: 14px;
      color: #777;
    }
  }
  .icons-group {
    color: #838383;
  }
  .icons-group svg:nth-child(1):hover,
  svg:nth-child(2):hover {
    cursor: pointer;
    color: #222222;
  }

  @media only screen and (max-width: 576px) {
    margin: 0;
    padding: 0 8px;
  }
`;
