import styled from "styled-components";
import { Row, Col } from "antd";
import ProductCard from "../cards/productCard";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import ProductCardWithIcons from "../cards/productCardWithIcons";

const carouselSettings = {
  dots: false,
  speed: 500,
  autoplay: true,
  infinite: true,
  easing: true,
  slidesToShow: 5,
  slidesToScroll: 1,
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

const ProductCarousel = (props) => {
  const { CardStyle } = props;
  return (
    <StyledContent style={{ padding: props.padding ? props.padding : "5%" }}>
      <div className="text-center">
        <div
          className="heading"
          style={{
            fontSize: 40,
            color: "#54595f",
            fontWeight: 600,
            position: "relative",
          }}
        >
          Featured Collection
        </div>
        <br />
        <span
          style={{
            fontSize: 15,
            color: "#54595f",
            borderBottom: "2px solid #54595f",
            fontWeight: 600,
            paddingBottom: 4,
          }}
        >
          SHOP NOW
        </span>
        <br />
        <br />
        <br />
      </div>

      <Slider {...carouselSettings}>
        {props.data.map((item, index) => (
          <div>
            <CardStyle {...item} />
            {/* <ProductCard {...item} /> */}
          </div>
        ))}
      </Slider>
    </StyledContent>
  );
};

export default ProductCarousel;

const StyledContent = styled.div`
  // padding: 80px;

  .heading {
    ::before {
      content: "#Featured";
      opacity: 0.05;
      font-family: Poppins, sans-serif;
      font-size: calc(40px + 215 * ((100vw - 320px) / 1600));
      font-weight: 700;
      color: #000;
      position: absolute;
      left: 0;
      right: 0;
      top: -100px;
      text-align: center;
      z-index: 1;
      pointer-events: none;
    }
  }

  @media only screen and (max-width: 576px) {
    margin: 0;
    padding: 0 8px;
  }
`;
