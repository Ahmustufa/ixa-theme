import Head from "next/head";
import Slider from "react-slick";
import HomeCarousel from "../src/component/heroSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Polkadots | Home</title>
      </Head>
      <HomeCarousel />
    </>
  );
};

export default Home;
