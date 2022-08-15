import { Row, Col } from "antd";
import Carousel1 from "src/component/carousel/carousel1";
import styled from "styled-components";
import Banner from "src/component/collectionBanner/banner";
import Title2 from "src/component/titles/title2";
import CardStyle1 from "src/component/cards/CardStyle1";
import CardStyle7 from "src/component/cards/CardStyle7";
import CardStyle6 from "src/component/cards/CardStyle6";
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
import Service1 from "src/component/services/service3";
import SubscriptionModal from "src/component/modals/subscriptionModal2";
import Head from "next/head";
import Title5 from "src/component/titles/title5";

let data = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0555/1000/7999/files/rtw-creation-14-august-azadi-sale-desktop.jpg",
    subHeading: "Welcome To Fashion",
    heading: "WOMEN BAGS",
    link: "#",
    placement: "end",
  },
  {
    image: "https://multikart-react.vercel.app/assets/images/home-banner/6.jpg",
    subHeading: "Welcome To Fashion",
    heading: "WOMEN BAGS",
    link: "#",
    placement: "center",
  },
  {
    image: "https://shopdemo.hasthemes.com/payne/p2/img/payne/hero-bg.jpg",
    subHeading: "Welcome To Fashion",
    heading: "SCHOOL BAGPACK",
    link: "#",
    placement: "start",
  },
  {
    image: "https://multikart-react.vercel.app/assets/images/home-banner/8.jpg",
    subHeading: "Welcome To Fashion",
    heading: "MEN BAGS",
    link: "#",
    placement: "center",
  },
];

const Bags = () => {
  return (
    <>
      <Head>
        <title>Bag Store</title>
      </Head>
      <SubscriptionModal />
      <Carousel1 data={data} />
      <div className="my-4">
        <Banner
          colSize={12}
          insideData={[
            {
              image:
                "https://cdn.shopify.com/s/files/1/0251/0520/3255/files/slider-image-02.png?v=1572514289",
              title1: "SAVE 30%",
              title2: "MEN",
            },
            {
              image:
                "https://www.gulahmedshop.com/media/catalog/product/2/9/291071_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=420&width=280",
              title1: "SAVE 60%",
              title2: "WOMEN",
            },
          ]}
          cardHeight={315}
          textAlign="end"
          title2Color="#222"
        />

        <Title5 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />

        <div className="col-11 m-auto">
          <Row gutter={[32, 32]}>
            {bagsProducts.slice(0, 4).map((item, index) => (
              <Col key={index} lg={6} sm={24} xs={24} className="">
                <CardStyle6 {...item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <Title5 subtitle="Recent Story" maintitle="NEW ARRIVALS" />

      <div className="col-11 m-auto">
        <Row gutter={[32, 32]}>
          {bagsProducts.slice(0, 8).map((item, index) => (
            <Col key={index} lg={6} sm={24} xs={24} className="">
              <CardStyle7 {...item} />
            </Col>
          ))}
        </Row>
      </div>

      <FullBgImageSection
        bgImage="https://shopdemo.hasthemes.com/payne/p2/img/payne/hero-bg.jpg"
        h1="Trending"
        h3="Men | Women"
        h5="Fashion"
      />
      {/* <div className="col-11 m-auto">
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
      </div> */}

      <BlogCarousel data={bagsBlogs} />
      <Service1 />
    </>
  );
};

export default Bags;

const StyledPage = styled.div``;
