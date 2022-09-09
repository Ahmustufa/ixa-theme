import { Row, Col, Collapse, Divider, message } from "antd";
import ShopCard from "../../src/component/cards/shopCard";
import ProductCarousel from "../../src/component/productListing/carousel";
import styled from "styled-components";
import ReviewListing from "../../src/component/reviews/reviewListing";
import ProductDetails from "../../src/component/products/productDetails";
import ImageCarousel from "../../src/component/carousel";
import CardStyle5 from "src/component/cards/CardStyle5";
import { shoesProducts } from "src/mock/shoesProducts";

const { Panel } = Collapse;

const Order = (props) => {
  const { productDetails } = props;

  return (
    <StyledPage style={{ padding: 80 }}>
      <Row className="mx-auto position-relative" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={14} className="p-0 pr-lg-5">
          <ImageCarousel direction="right" images={productDetails.images} />
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
        <ProductCarousel padding={"5% 0%"} CardStyle={CardStyle5} data={shoesProducts} />
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
  _id: "eef55462-8c33-432e-a85f-1a940451e524",
  title: "Denim Peplum Motorcycle Jacket-1",
  quantit: 1,
  price: 9.85,
  brandName: "Roadiez",
  description:
    "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
  category: "jacket",
  images: [
    "/images/clothing/Jackets/DenimJacket-1.jpg",
    "/images/clothing/Jackets/DenimJacket-2.jpg",
    "/images/clothing/Jackets/DenimJacket-3.jpg",
  ],
  rating: { rate: 4.7, count: 130 },
};

export async function getServerSideProps(context) {
  return {
    props: { productDetails },
  };
}
