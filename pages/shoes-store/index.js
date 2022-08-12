import Head from "next/head";
import { Row, Col } from "antd";
import ShopCard from "src/component/cards/shopCard";
// import HomeCarousel from "src/component/heroSection";
import Carousel1 from "src/component/carousel/carousel1";
import DressCategories from "src/component/categories/derssCategories";
import ProductListing from "src/component/productListing";
import ProductCarousel from "src/component/productListing/carousel";
import styled from "styled-components";
import FullBgImageSection from "src/component/heroSection/FullBgImageSection";
import { brownHair } from "images";
import SidebarFiltration from "src/component/sidebar/sidebarFiltration";
import SubscriptionModal from "src/component/modals/subscriptionModal3";
import SortItems from "src/component/sortItems";
import Heading from "src/component/headings";
import BlogCarousel from "src/component/productListing/blogCarousel";
import ProductVerticalCarousel from "src/component/productListing/productVerticalCarousel";
import { productStyle5, productStyle8 } from "src/mock/mockupData";
import Category1 from "src/component/category/category1";
import Category3 from "src/component/category/category3";
import Title4 from "src/component/titles/title4";
import Service2 from "src/component/services/service3";
import Banner from "src/component/collectionBanner/banner";
import CardStyle6 from "src/component/cards/CardStyle6";
import { shoesProducts } from "src/mock/shoesProducts";

const BagStore = () => {
  const carousel1Data = [
    {
      image: "https://multikart-react.vercel.app/assets/images/home-banner/6.jpg",
      subHeading: "Welcome To Fashion",
      heading: "Leather Bags",
      link: "#",
      placement: "center",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/home-banner/7.jpg",
      subHeading: "Welcome To Fashion",
      heading: "Women Bags",
      link: "#",
      placement: "center",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/home-banner/8.jpg",
      subHeading: "Welcome To Fashion",
      heading: "Men Bags",
      link: "#",
      placement: "center",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0555/1000/7999/files/rtw-creation-14-august-azadi-sale-desktop.jpg",
      subHeading: "Get FREE shipping when you buy any two!",
      heading: "AZADI SALE",
      link: "#",
      placement: "end",
    },
  ];

  return (
    <>
      <Head>
        <title>Shoes Store</title>
      </Head>

      <StyledPage>
        <SubscriptionModal />
        <Title4 subtitle="" maintitle="Shop by Categories" />
        <Category1
          padding="0px 0px 5% 0px"
          insideData={[
            {
              image:
                "https://cdn.shopify.com/s/files/1/0490/2443/4341/products/I35127_SILVER_1024x1024.jpg",
              title: "Women Shoes",
            },
            {
              image:
                "https://cdn.shopify.com/s/files/1/0490/2443/4341/products/M26051_NAVY_300x.jpg",
              title: "Men Shoes",
            },
            {
              image:
                "https://cdn.shopify.com/s/files/1/0490/2443/4341/products/M34054_BROWNb_300x.jpg",
              title: "Formal",
            },
            {
              image:
                "https://cdn.shopify.com/s/files/1/0490/2443/4341/products/M18023_MAROON_300x.jpg",
              title: "Slippers",
            },
            {
              image:
                "https://cdn.shopify.com/s/files/1/0490/2443/4341/products/I47203_MAROON_300x.jpg",
              title: "Heels",
            },
            {
              image:
                "https://www.ebhshop.com/wp-content/uploads/2022/03/0660-10D0001_Black-510x510.jpg",
              title: "Boots",
            },
          ]}
        />
        <Category3 />

        <Service2 style={{ borderBottom: "0px" }} />

        <Banner
          colSize={8}
          insideData={[
            {
              image: "/images/Shoes/featured/Righ-banner.jpg",
              title1: "40% OFF",
              title2: "Men Shoes",
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

        <ProductCarousel CardStyle={CardStyle6} data={shoesProducts} />

        <FullBgImageSection
          h1="Trending"
          h3="Men | Women"
          h5="Fashion"
          bgImage="https://www.smartertravel.com/wp-content/uploads/2017/08/All-Birds-hero.jpg"
        />

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

export default BagStore;

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
