import styled from "styled-components";
import { Row, Col } from "antd";
import ProductCard from "../cards/productCard";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const carouselSettings = {
  dots: true,
  speed: 500,
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        autoplay: true,
        infinite: true,
      },
    },
  ],
};

const ProductCarousel = (props) => {
  const { items } = useSelector((state) => state.products);

  return (
    <StyledContent style={{ padding: props.padding ? props.padding : "80px" }}>
      <div className="text-center">
        <div style={{ fontSize: 40, color: "#54595f", fontWeight: 600 }}>JUST IN</div>
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
        {items.map((item, index) => (
          <div>
            <ProductCard {...item} />
          </div>
        ))}
      </Slider>
    </StyledContent>
  );
};

export default ProductCarousel;

const StyledContent = styled.div`
  // padding: 80px;

  @media only screen and (max-width: 576px) {
    margin: 0;
    padding: 0 8px;
  }
`;
