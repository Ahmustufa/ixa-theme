import Head from "next/head";
import { Row, Col } from "antd";
import ShopCard from "../src/component/cards/shopCard";
import HomeCarousel from "../src/component/heroSection";
import DressCategories from "../src/component/categories/derssCategories";
import ProductListing from "../src/component/productListing";
import ProductCarousel from "../src/component/productListing/carousel";
import styled from "styled-components";
import FullBgImageSection from "../src/component/heroSection/FullBgImageSection";
import { brownHair } from "../images";
import SidebarFiltration from "../src/component/sidebar/sidebarFiltration";
import SubscriptionModal from "../src/component/modals/subscriptionModal1";
import SortItems from "../src/component/sortItems";
import Heading from "../src/component/headings";
import BlogCarousel from "../src/component/productListing/blogCarousel";
import ProductVerticalCarousel from "../src/component/productListing/productVerticalCarousel";
import { productStyle5, productStyle8 } from "src/mock/mockupData";
import CardStyle5 from "src/component/cards/CardStyle5";

const Home = () => {
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

  return (
    <>
      <Head>
        <title>E-commerce Store | Home</title>
      </Head>

      <SubscriptionModal />
      <HomeCarousel />
      <StyledPage>
        <section className="section-wrapper">
          <Row justify="space-between" gutter={[0, 40]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={11}>
              <ShopCard />
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={11}>
              <ShopCard />
            </Col>
          </Row>
        </section>

        <SortItems />
        <DressCategories />
        <ProductCarousel CardStyle={CardStyle5} data={productCarouselData} />

        <FullBgImageSection bgImage={brownHair} />

        <div className="section-wrapper">
          <Row>
            <Col lg={6} xs={24} sm={24}>
              <SidebarFiltration />
            </Col>
            <Col lg={6} xs={24} sm={24}>
              <ProductVerticalCarousel headerTitle="NEW PRODUCTS" data={productStyle5} />
            </Col>
            <Col lg={12}></Col>
          </Row>
        </div>

        <BlogCarousel />

        <section>
          <div style={{ fontSize: "3rem", color: "#54595f", textAlign: "center" }}>
            Reveal your edginess.
            <br />
            Make a statement.
          </div>

          <img src="/images/slide_3.jpg" className="img-fluid mt-4" />
        </section>
      </StyledPage>
    </>
  );
};

export default Home;

const StyledPage = styled.div`
  .section-wrapper {
    padding: 80px;
  }

  @media only screen and (max-width: 576px) {
    .section-wrapper {
      padding: 24px;
    }
  }
`;
