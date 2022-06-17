import Head from "next/head";
import { Row, Col } from "antd";
import ShopCard from "../src/component/cards/shopCard";
import HomeCarousel from "../src/component/heroSection";
import DressCategories from "../src/component/categories/derssCategories";
import ProductListing from "../src/component/productListing";
import ProductCarousel from "../src/component/productListing/carousel";

const Home = () => {
  return (
    <>
      <Head>
        <title>Polkadots | Home</title>
      </Head>

      <HomeCarousel />

      <section style={{ padding: 80 }}>
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

      <section>
        <div style={{ fontSize: "3rem", color: "#54595f", textAlign: "center" }}>
          Reveal your edginess.
          <br />
          Make a statement.
        </div>

        <img src="/images/slide_3.jpg" className="img-fluid mt-4" />
      </section>
    </>
  );
};

export default Home;
