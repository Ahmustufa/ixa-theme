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

const Home = () => {
  return (
    <>
      <Head>
        <title>Polkadots | Home</title>
      </Head>

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

        <DressCategories />
        <ProductCarousel />

        <FullBgImageSection bgImage={brownHair} />

        <div className="" style={{ padding: 80 }}>
          <Row>
            <Col lg={6}>
              <SidebarFiltration />
            </Col>
            <Col lg={18}></Col>
          </Row>
        </div>

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
