import { Row, Col, Collapse, Divider, message } from "antd";
import ShopCard from "../../src/component/cards/shopCard";
import ProductCarousel from "../../src/component/productListing/carousel";
import styled from "styled-components";
import ReviewListing from "../../src/component/reviews/reviewListing";
import ProductDetails from "../../src/component/products/productDetails";
import ImageCarousel from "../../src/component/carousel";
import CardStyle5 from "src/component/cards/CardStyle5";

const { Panel } = Collapse;

const productCarouselData = [
  {
    _id: 1,
    image: "/images/shoes/featured/1.webp",
    title: "Metal Decor Combat Boots",
    brandName: "Caperion",
    price: 599,
    link: "#",
  },
  {
    _id: 2,
    image: "/images/shoes/featured/2.webp",
    title: "Knit Chunky Sock Boots",
    brandName: "CUCCOO",
    price: 1199,
    link: "#",
  },
  {
    _id: 3,
    image: "/images/shoes/featured/3.webp",
    title: "Knit Chunky Heel",
    brandName: "Vutte wixo",
    price: 1099,
    link: "#",
  },
  {
    _id: 4,
    image: "/images/shoes/featured/4.webp",
    title: "Minimalist Flatform Pumps",
    brandName: "Caperion",
    price: 599,
    link: "#",
  },
  {
    _id: 5,
    image: "/images/shoes/featured/5.webp",
    title: "Point Toe Stiletto Heeled",
    brandName: "Caperion",
    price: 599,
    link: "#",
  },
  {
    _id: 6,
    image: "/images/shoes/featured/6.webp",
    title: "Mesh Panel Lace Up Trainers",
    brandName: "CUCCOO",
    price: 1199,
    link: "#",
  },
];

const Order = (props) => {
  const { productDetails } = props;

  return (
    <StyledPage style={{ padding: 80 }}>
      <Row className="mx-auto position-relative" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={14} className="p-0 pr-lg-5">
          <ImageCarousel direction="left" images={productDetails.images} />
        </Col>

        <Col xs={24} sm={24} lg={10} className={"p-0"}>
          <ProductDetails productDetails={productDetails} />
        </Col>
      </Row>

      <section className="mt-5" style={{ color: "#54595f", lineHeight: "28px" }}>
        <h2 style={{ color: "#54595f" }}>Description</h2>
        <p style={{ fontWeight: 300 }}>
          Compellingly grow performance based mindshare through parallel potentialities.
          Rapidiously underwhelm top-line catalysts for change before best-of-breed
          materials. Competently brand timely catalysts for change through sustainable
          systems. Completely expedite ubiquitous bandwidth after integrated action items.
          Progressively transform leading-edge supply chains whereas flexible niche
          markets.
        </p>
      </section>

      <section className="my-5">
        <ProductCarousel
          CardStyle={CardStyle5}
          data={productCarouselData}
          padding={"0px"}
        />
      </section>
    </StyledPage>
  );
};

export default Order;

const StyledPage = styled.div`
  .product-image {
    margin-bottom: 8px;
    vertical-align: middle;
    width: 100%;
  }
  .wish-button {
    display: flex;
    align-items: center;
    color: #212529;
    font-weight: 600;
    cursor: pointer;

    .icon {
      font-size: 24px;
      margin-right: 8px;
    }
    .text {
      position: relative;
      :after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0%;
        background-color: #212529;
        transition: 0.3s;
      }

      :hover:after {
        width: 100%;
      }
    }
  }

  .shop-card-section {
    padding: 80px;
  }
  @media (max-width: 1024px) {
    padding: 20px !important;
    .shop-card-section {
      padding: 0px !important;
    }
  }
`;

const productDetails = {
  _id: "123",
  title: "TRIM DRESS",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  price: 5000,
  images: [
    "/images/sout_image_1.jpg",
    "/images/sout_image_4.jpg",
    "/images/sout_image_2.jpg",
    "/images/sout_image_3.jpg",
  ],
};

export async function getServerSideProps(context) {
  return {
    props: { productDetails },
  };
}
