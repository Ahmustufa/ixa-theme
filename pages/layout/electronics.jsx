import { Row, Col } from "antd";
import Carousel1 from "src/component/carousel/carousel1";
import styled from "styled-components";
import Banner from "src/component/collectionBanner/banner";
import Title2 from "src/component/titles/title2";
import CardStyle4 from "src/component/cards/CardStyle4";
import {
  productStyle1,
  productStyle2,
  productStyle3,
  productStyle4,
} from "src/mock/mockupData";
import FullBgImageSection from "src/component/heroSection/FullBgImageSection";
import ProductVerticalCarousel from "src/component/productListing/productVerticalCarousel";
import BlogCarousel from "src/component/productListing/blogCarousel";

const Fashion2 = () => {
  return (
    <>
      <Carousel1 data={data} />

      <div className="my-4">
        <Banner
          colSize={8}
          insideData={[
            {
              image:
                "https://multikart-react.vercel.app/_next/static/images/5-10b7de6113f434b468e642b0aefdd75c.jpg",
              title1: "10% OFF",
              title2: "SPEAKER",
            },
            {
              image:
                "https://multikart-react.vercel.app/_next/static/images/6-beb254897edd39e33d5c23dee7ecec7b.jpg",
              title1: "10% OFF",
              title2: "EARPLUG",
            },
            {
              image:
                "https://multikart-react.vercel.app/_next/static/images/7-b16b82e48bde03cafa1e3d8421633125.jpg",
              title1: "60% OFF",
              title2: "BEST DEAL",
            },
          ]}
          cardHeight={218}
          textAlign="end"
          title2Color="#222"
        />
      </div>

      <Title2 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />

      <div className="col-11 m-auto">
        <Row gutter={[32, 32]}>
          {productStyle4.map((item, index) => (
            <Col key={index} lg={6} sm={24} xs={24} className="">
              <CardStyle4 {...item} />
            </Col>
          ))}
        </Row>
      </div>

      <FullBgImageSection bgImage="/images/headphone.avif" />

      <div className="col-11 m-auto">
        <Row gutter={[32, 0]}>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductVerticalCarousel headerTitle="NEW PRODUCTS" data={productStyle1} />
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductVerticalCarousel headerTitle="FEATURE PRODUCT" data={productStyle2} />
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductVerticalCarousel headerTitle="BEST SELLER" data={productStyle3} />
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductVerticalCarousel headerTitle="ON SELL" data={productStyle4} />
          </Col>
        </Row>
      </div>

      <BlogCarousel />
    </>
  );
};

export default Fashion2;

const data = [
  {
    image: "https://multikart-react.vercel.app/assets/images/home-banner/16.jpg",
    subHeading: "Welcome To Fashion",
    heading: "Home accessories",
    link: "#",
    placement: "start",
  },
  {
    image: "https://multikart-react.vercel.app/assets/images/home-banner/32.jpg",
    subHeading: "Welcome To Fashion",
    heading: "decorations",
    link: "#",
    placement: "end",
  },
  {
    image: "https://multikart-react.vercel.app/assets/images/home-banner/15.jpg",
    subHeading: "Welcome To Fashion",
    heading: "men fashion",
    link: "#",
    placement: "start",
  },
];
