import Head from "next/head";
import { Row, Col } from "antd";
import ShopCard from "../src/component/cards/shopCard";
import HomeCarousel from "../src/component/heroSection";
import styled from "styled-components";
import FullBgImageSection from "../src/component/heroSection/FullBgImageSection";
import { brownHair } from "../images";
import SubscriptionModal from "../src/component/modals/subscriptionModal1";
import BlogCarousel from "../src/component/productListing/blogCarousel";
import SortItems from "../src/component/sortItems";
import DressCategories from "../src/component/categories/derssCategories";
import ProductCarousel from "../src/component/productListing/carousel";
import CardStyle5 from "src/component/cards/CardStyle5";
import { shoesProducts } from "src/mock/shoesProducts";
import ProductListing from "../src/component/productListing";
import SidebarFiltration from "../src/component/sidebar/sidebarFiltration";
import ProductVerticalCarousel from "../src/component/productListing/productVerticalCarousel";
import { productStyle5, productStyle8 } from "src/mock/mockupData";
import Heading from "../src/component/headings";
import DragToScroll from "src/component/scroll/dragToScroll";

const Home = () => {
  return (
    <>
      <Head>
        <title>E-commerce Store | Home</title>
      </Head>

      <SubscriptionModal image="/images/subscriptionModalBg.png" />
      <HomeCarousel
        btnDisplay={true}
        carouselData={[
          {
            title: "Women's week",
            subtitle: "Take advantage of promotions upto 60%",
            backgroundImage: ["/images/slide_1.jpg", "/images/slide_1.jpg"],
          },
          {
            text: "NEW TREND",
            title: "THE BASICS",
            subtitle: "An exclusive selction of season's trends.",
            backgroundImage: ["/images/slide_2.jpg", "/images/slide_2.jpg"],
          },
          {
            text: "NEW COLLECTION",
            title: "Bellemount '20",
            subtitle: (
              <div>
                Rapidiously redifine dynamic niche markets before
                <br />
                plug-and-play collaboration and idea-sharing Continually
                <br />
                utlilize focused convergence via top-line outsourcing
              </div>
            ),
            backgroundImage: ["/images/slide_3.jpg", "/images/slide_3.jpg"],
          },
        ]}
      />
      <StyledPage>
        <section className="section-wrapper">
          <Row justify="space-between" gutter={[0, 40]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={11}>
              <ShopCard
                title="London"
                description="Classy, urban clothing, fashion."
                link="/demo/clothing"
              />
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={11}>
              <ShopCard
                title="Melbourne"
                description="Urban, backpacks, travel, camping."
                link="/demo/bag-store"
              />
            </Col>
          </Row>
        </section>

        <FullBgImageSection
          h1="Trending"
          h3="Men | Women"
          h5="Fashion"
          bgImage={brownHair}
        />

        <section
          style={{
            backgroundImage: "url(/images/bg-features.png)",
            backgroundAttachment: "fixed",
            padding: "48px 0",
          }}
        >
          {/* <div
            style={{
              position: "sticky",
              top: "50%",
              transform: "translateY(-50%) rotate(270deg)",
              width: "fit-content",
              fontSize: 48,
              color: "#727272",
              fontWeight: 600,
            }}
          >
            demos
          </div> */}

          <div className="col-11 m-auto">
            <h3 className="heading-5" style={{ fontWeight: 600, margin: "16px 0" }}>
              HOME PAGES
            </h3>
            <DragToScroll>
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={`/images/home_pages/image-${item}.png`}
                  alt={`home-image-${item}`}
                  style={{ width: 300, objectFit: "contain", margin: "0 24px" }}
                />
              ))}
            </DragToScroll>
          </div>

          <div className="col-11 m-auto pt-5">
            <h3 className="heading-5" style={{ fontWeight: 600, margin: "16px 0" }}>
              PRODUCT PAGES
            </h3>
            <DragToScroll>
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={`/images/product_pages/image-${item}.png`}
                  alt={`product-image-${item}`}
                  style={{ width: 300, objectFit: "contain", margin: "0 24px" }}
                />
              ))}
            </DragToScroll>
          </div>

          <div className="col-11 m-auto pt-5">
            <h3 className="heading-5" style={{ fontWeight: 600, margin: "16px 0" }}>
              SHOP PAGES
            </h3>
            <DragToScroll>
              {[1, 4, 3, 2].map((item) => (
                <img
                  key={item}
                  src={`/images/shop_pages/image-${item}.png`}
                  alt={`shop-image-${item}`}
                  style={{ width: 300, objectFit: "contain", margin: "0 24px" }}
                />
              ))}
            </DragToScroll>
          </div>

          <div className="col-11 m-auto pt-5">
            <h3 className="heading-5" style={{ fontWeight: 600, margin: "16px 0" }}>
              GENERAL PAGES
            </h3>
            <DragToScroll>
              {[1, 2, 3, 5].map((item) => (
                <img
                  key={item}
                  src={`/images/general_pages/image-${item}.png`}
                  alt={`shop-image-${item}`}
                  style={{ width: 300, objectFit: "contain", margin: "0 24px" }}
                />
              ))}
            </DragToScroll>
          </div>
        </section>

        <section className="text-center">
          <div style={{ fontSize: "2rem", color: "#001719" }}>Email Template</div>
          <div style={{ color: "#979797", width: 500, margin: "auto" }}>
            Polkadotsretail comes with tons of email template which include order success,
            promotion and give away tamplates
          </div>

          <img src="/images/email_templates.png" className="w-100" />
        </section>

        <section
          style={{ backgroundImage: "url(/images/bg-features.png)", padding: "48px 0" }}
        >
          <div className="features col-11 col-xl-10 m-auto">
            <h1 style={{ fontWeight: 600 }} className="text-center heading-4 my-5">
              Clean, <span style={{ fontWeight: 400 }}>lightweight</span> & highly modular
            </h1>

            <Row gutter={[0, 32]} justify="space-around">
              {features.map(({ image, heading, description }, index) => (
                <Col key={index} xs={24} sm={24} md={12} lg={8} l={8}>
                  <div className="feature-card">
                    <img src={image} />
                    <h3 className="heading">{heading}</h3>
                    <p className="description">{description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
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

  .features {
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid #fff4f4;
    box-shadow: 2px 2px 3px #fff4f4;
    background-image: url("/images/bg-clean.jpg");
  }

  .feature-card {
    max-width: 340px;
    margin: auto;

    .heading {
      color: #070707;
      font-size: 24px;
      font-weight: 600;
      margin: 20px 0;
    }

    .description {
      color: #070707;
      line-height: 32px;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 576px) {
    .section-wrapper {
      padding: 24px;
    }
  }
`;

const features = [
  {
    image:
      "https://reythemecom.b-cdn.net/wp-content/themes/rey-child/rey-site/images/features/font-preloader.svg",
    heading: "Font Preloader",
    description:
      "A single source of truth for your Google and Adobe fonts, avoiding performance hiccups.",
  },
  {
    image:
      "https://reythemecom.b-cdn.net/wp-content/themes/rey-child/rey-site/images/features/modularity.svg",
    heading: "Modularity",
    description:
      "Load and unload various built-in functionalities with ease. The general principle - only load what’s in use.",
  },
  {
    image:
      "https://reythemecom.b-cdn.net/wp-content/themes/rey-child/rey-site/images/features/dev-friendly.svg",
    heading: "Developer friendly",
    description:
      "Love coding? Awesome, so do i! Easily extend functionalities with hooks and built-in features.",
  },
  {
    image:
      "https://reythemecom.b-cdn.net/wp-content/themes/rey-child/rey-site/images/features/future.svg",
    heading: "Built for the future",
    description: "Because we need to work and think ahead.",
  },
  {
    image:
      "https://reythemecom.b-cdn.net/wp-content/themes/rey-child/rey-site/images/features/seo-friendly.svg",
    heading: "SEO friendly",
    description: "Clean markup following web standards.",
  },
  {
    image:
      "https://reythemecom.b-cdn.net/wp-content/themes/rey-child/rey-site/images/features/svg-images.svg",
    heading: "Built-in SVG support",
    description: "Insert those lovely crisp and colored vector images.",
  },
];
