import Head from "next/head";
import ShopCard from "../src/component/cards/shopCard";
import HomeCarousel from "../src/component/heroSection";
import { Row, Col } from "antd";

const Home = () => {
  return (
    <>
      <Head>
        <title>Polkadots | Home</title>
      </Head>
      <HomeCarousel />

      <Row wrap={false}>
        <Col>
          <ShopCard />
        </Col>

        <Col>
          <ShopCard />
        </Col>
      </Row>
    </>
  );
};

export default Home;
