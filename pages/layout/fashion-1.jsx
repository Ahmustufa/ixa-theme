import { Row, Col } from "antd";
import Carousel1 from "src/component/carousel/carousel1";
import styled from "styled-components";
import Banner from "src/component/collectionBanner/banner";
import Title2 from "src/component/titles/title2";
import CardStyle1 from "src/component/cards/CardStyle1";
import {
  productStyle1,
  productStyle2,
  productStyle3,
  productStyle4,
} from "src/mock/mockupData";
import FullBgImageSection from "src/component/heroSection/FullBgImageSection";
import ProductVerticalCarousel from "src/component/productListing/productVerticalCarousel";

const Fashion1 = () => {
  return (
    <>
      <Carousel1 />
      <div className="my-4">
        <Banner
          colSize={12}
          insideData={[
            {
              image:
                "https://multikart-react.vercel.app/_next/static/images/sub-banner1-d89099e9c448c84a71f131fd01d931ec.jpg",
              title1: "SAVE 30%",
              title2: "MEN",
            },
            {
              image:
                "https://multikart-react.vercel.app/_next/static/images/sub-banner2-8eaf597c5af59e6bda754e95b855d860.jpg",
              title1: "SAVE 60%",
              title2: "WOMEN",
            },
          ]}
          cardHeight={315}
          textAlign="end"
          title2Color="#222"
        />

        <Banner
          colSize={12}
          insideData={[
            {
              image:
                "https://multikart-react.vercel.app/_next/static/images/3-fc01b574690976aa7fe54dde2a11586d.jpg",
              title1: "SAVE 30%",
              title2: "SANDLE",
            },
            {
              image:
                "https://multikart-react.vercel.app/_next/static/images/4-6a057d09491278d90ade1d433a34abfa.jpg",
              title1: "SAVE 60%",
              title2: "KIDS",
            },
          ]}
          cardHeight={315}
          textAlign="start"
          title2Color="#222"
        />

        <Title2 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />

        <div className="col-11 m-auto">
          <Row gutter={[32, 32]}>
            {productStyle1.map((item, index) => (
              <Col key={index} lg={6} sm={24} xs={24} className="">
                <CardStyle1 {...item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <FullBgImageSection bgImage="/images/bg.jpg" data={productStyle2} />

      <div className="col-11 m-auto">
        <Row gutter={[32, 0]}>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductVerticalCarousel data={productStyle1} />
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductVerticalCarousel data={productStyle2} />
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductVerticalCarousel data={productStyle3} />
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductVerticalCarousel data={productStyle4} />
          </Col>
        </Row>
      </div>

      <div className="text-center my-5">
        <h1># INSTAGRAM</h1>
        Put Instagram section here
      </div>
    </>
  );
};

export default Fashion1;

const StyledPage = styled.div``;
