import { Row, Col } from "antd";
import Carousel1 from "src/component/carousel/carousel1";
import styled from "styled-components";
import Banner from "src/component/collectionBanner/banner";
import Title2 from "src/component/titles/title2";
import CardStyle1 from "src/component/cards/CardStyle1";
import CardStyle7 from "src/component/cards/CardStyle7";
import CardStyle6 from "src/component/cards/CardStyle6";
import CardStyle2 from "src/component/cards/CardStyle2";

import {
  productStyle1,
  productStyle2,
  productStyle3,
  productStyle4,
} from "src/mock/mockupData";
import FullBgImageSection from "src/component/heroSection/FullBgImageSection";
import ProductVerticalCarousel from "src/component/productListing/productVerticalCarousel";
import BlogCarousel from "src/component/productListing/blogCarousel";
import { bagsBlogs, bagsProducts } from "src/mock/bagsProducts";
import Service1 from "src/component/services/service1";
import SubscriptionModal from "src/component/modals/subscriptionModal1";
import Head from "next/head";
import Title5 from "src/component/titles/title5";
import { clothProducts } from "src/mock/clothProducts";
import Title3 from "src/component/titles/title3";

let data = [
  {
    image: "/images/clothing/banner/Main-banner.jpg",
    subHeading: "",
    heading: "",
    link: "#",
    placement: "start",
  },
  {
    image: "/images/clothing/banner/Main-banner-2.jpg",
    subHeading: "",
    heading: "",
    link: "#",
    placement: "start",
    buttonShow: false,
  },
  {
    image: "/images/clothing/banner/Main-banner-3.jpg",
    subHeading: "",
    heading: "",
    link: "#",
    placement: "start",
    buttonShow: false,
  },
];

const Clothing = () => {
  return (
    <>
      <Head>
        <title>Clothing Store</title>
      </Head>
      <SubscriptionModal />

      <div className="my-4">
        <div>
          <Carousel1 data={data} />
        </div>
        <div
          style={{
            position: "relative",
            bottom: 100,
            zIndex: 100,
            backgroundColor: "#fff",
            boxShadow: "0px 0px 15px -10px #000",
            margin: "0px 2%",
          }}
        >
          <Service1 />
        </div>

        <Banner
          colSize={8}
          insideData={[
            {
              image: "/images/clothing/banner/Small-banner-1.jpg",
              title1: "",
              title2: "",
            },
            {
              image: "/images/clothing/banner/Small-banner-2.jpg",
              title1: "",
              title2: "",
            },
            {
              image: "/images/clothing/banner/Small-banner-3.jpg",
              title1: "",
              title2: "",
            },
          ]}
          cardHeight={200}
          textAlign="end"
          title1Color="red"
          title2Color="#222"
        />

        <Title3 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />

        <div className="col-11 m-auto">
          <Row>
            <Col lg={6} sm={24} xs={24} className="">
              <ProductVerticalCarousel headerTitle="BEST SELLER" data={clothProducts} />
            </Col>
            <Col lg={18} sm={24} xs={24}>
              <Row gutter={[32, 32]}>
                {clothProducts.slice(0, 8).map((item, index) => (
                  <Col key={index} lg={6} sm={24} xs={24} className="">
                    <CardStyle2 {...item} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <Title3 subtitle="Recent Story" maintitle="NEW ARRIVALS" />

      <div className="col-11 m-auto">
        <Row gutter={[32, 32]}>
          {clothProducts.slice(0, 8).map((item, index) => (
            <Col key={index} lg={6} sm={24} xs={24} className="">
              <CardStyle7 {...item} />
            </Col>
          ))}
        </Row>
      </div>

      <FullBgImageSection
        color="#fff"
        bgImage="/images/clothing/banner/Fix.jpg"
        h1="Trending"
        h3="Men | Women"
        h5="Fashion"
      />

      <Title3 subtitle="Recent Story" maintitle="OUR BLOGS" />
      <BlogCarousel data={clothProducts} />
    </>
  );
};

export default Clothing;

const StyledPage = styled.div``;
