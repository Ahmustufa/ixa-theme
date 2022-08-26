import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import Banner from "src/component/collectionBanner/banner";

const CollectionBanner = () => {
  return (
    <>
      <Breadcrumb
        style={{ margin: "20px 0px" }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / COLLECTION BANNER"
      />
      <Banner
        colSize={12}
        insideData={[
          {
            image: "/images/Small-banner-1.jpg",
            // title1: "SAVE 30%",
            // title2: "MEN",
          },
          {
            image: "/images/Small-banner-2.jpg",
            // title1: "SAVE 60%",
            // title2: "WOMEN",
          },
        ]}
        cardHeight={315}
        textAlign="end"
        title2Color="#222"
      />

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
            image: "/images/watch-1.png",
            title1: "10% OFF",
            title2: "NEW WATCH",
          },
          {
            image: "/images/sale_banner.jpg",
            title1: "",
            title2: "",
          },
          {
            image: "/images/watch-2.png",
            title1: "50% OFF",
            title2: "GOLD WATCH",
          },
        ]}
        cardHeight={200}
        textAlign="end"
        title2Color="#fff"
      />

      <Banner
        colSize={6}
        insideData={[
          {
            image: "/images/collection-2.png",
            title1: "SAVE 30%",
            title2: "SHIRTS",
          },
          {
            image: "/images/collection-1.png",
            // title1: "SAVE 50%",
            // title2: "HEADSETS",
          },
          {
            image: "/images/collection-3.png",
            title1: "SAVE 60%",
            title2: "SHOES",
          },
          {
            image: "/images/collection-4.png",
            title1: "SAVE 70%",
            title2: "JEWELLERY",
          },
        ]}
        cardHeight={180}
        textAlign="start"
        title2Color="#fff"
      />
    </>
  );
};
export default CollectionBanner;
