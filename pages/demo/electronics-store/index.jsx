import Head from "next/head";
import ProductCarousel from "src/component/productListing/carousel";
import HomeCarousel from "src/component/heroSection";
import styled from "styled-components";
import FullBgImageSection from "src/component/heroSection/FullBgImageSection";
import SubscriptionModal from "src/component/modals/subscriptionModal3";
import BlogCarousel from "src/component/productListing/blogCarousel";
import Category1 from "src/component/category/category1";
import Category3 from "src/component/category/category3";
import Title2 from "src/component/titles/title2";
import Service2 from "src/component/services/service3";
import Banner from "src/component/collectionBanner/banner";
import CardStyle6 from "src/component/cards/CardStyle6";
import { shoesProducts, shoesBlogs } from "src/mock/shoesProducts";
import FilterByTab from "src/component/sortItems/filterByTab";
import {
  productStyle1,
  productStyle2,
  productStyle3,
  productStyle4,
  productStyle5,
  productStyle6,
} from "src/mock/mockupData";

const ElectronicStore = () => {
  let data = [
    ...productStyle1,
    ...productStyle2,
    ...productStyle3,
    ...productStyle4,
    ...productStyle5,
    ...productStyle6,
  ];

  return (
    <>
      <Head>
        <title>Electronic Store</title>
      </Head>

      <StyledPage>
        <SubscriptionModal />

        <HomeCarousel
          btnDisplay={false}
          carouselData={[
            {
              title: "",
              subtitle: "",
              backgroundImage: [
                "/images/Electronics/banner/banner1.jpg",
                "/images/Electronics/banner/banner1.jpg",
              ],
            },
            {
              text: "",
              title: "",
              subtitle: "",
              backgroundImage: [
                "/images/Electronics/banner/banner2.jpg",
                "/images/Electronics/banner/banner2.jpg",
              ],
            },
            {
              text: "",
              title: "",
              subtitle: "",
              backgroundImage: [
                "/images/Electronics/banner/banner3.jpg",
                "/images/Electronics/banner/banner3.jpg",
              ],
            },
          ]}
        />

        <Title2 subtitle="Recent" maintitle="Discounted products" />

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

        <Banner
          colSize={8}
          insideData={[
            {
              image:
                "https://multikart-react.vercel.app/_next/static/images/banner1-62b0db6674a8f5ec6258c6d325b99543.jpg",
              title1: "10% OFF",
              title2: "NEW WATCH",
            },
            {
              image:
                "https://multikart-react.vercel.app/_next/static/images/banner2-6270a4161a1b6425cd2bb2a6e8b1813d.jpg",
              title1: "",
              title2: "",
            },
            {
              image:
                "https://multikart-react.vercel.app/_next/static/images/banner-c8a3b404055b43880ccda054576441e2.jpg",
              title1: "50% OFF",
              title2: "GOLD WATCH",
            },
          ]}
          cardHeight={200}
          textAlign="start"
          title2Color="#fff"
        />

        <div style={{ padding: "0px 5%" }}>
          <Title2 subtitle="" maintitle="Shop by Categories" />

          <FilterByTab
            headerTitle=""
            data={data}
            tabBarData={[
              { title: "New Arrival", id: 1, category: "new_arrival" },
              { title: "Featured", id: 2, category: "new_arrival" },
              { title: "Special", id: 3, category: "new_arrival" },
            ]}
          />
        </div>

        <FullBgImageSection
          h1=""
          h3=""
          h5=""
          bgImage="/images/Electronics/banner/fridge-banner.webp"
        />

        <Title2 subtitle="Recent Story" maintitle="From the Blog" />
        <BlogCarousel data={shoesBlogs} padding="0px 5% 5% 5%" />
      </StyledPage>
    </>
  );
};

export default ElectronicStore;

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