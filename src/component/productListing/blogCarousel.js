import styled from "styled-components";
import { Row, Col } from "antd";
import ProductCard from "../cards/productCard";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import ProductCardWithIcons from "../cards/productCardWithIcons";
import Heading from "../headings";
import BlogCard from "../cards/blogCard";
import { image1, image2, image3 } from "../../../images";

const carouselSettings = {
  // dots: true,
  speed: 500,
  // autoplay: true,
  infinite: true,
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
];

const BlogCarousel = (props) => {
  const { items } = useSelector((state) => state.products);

  return (
    <StyledContent style={{ padding: props.padding ? props.padding : "5%" }}>
      <div className="text-center">
        <Heading backgroundColor={"#f54c3b"}>
          <h6 style={{ color: "#f54c3b" }}>Recent Story</h6>
          FROM THE BLOG
        </Heading>
      </div>

      <Slider {...carouselSettings}>
        {blogData.map((item, index) => (
          <div>
            <BlogCard {...item} />
          </div>
        ))}
      </Slider>
    </StyledContent>
  );
};

export default BlogCarousel;

const StyledContent = styled.div`
  // padding: 80px;

  @media only screen and (max-width: 576px) {
    margin: 0;
    padding: 0 8px;
  }
`;