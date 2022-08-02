import React from "react";
import Breadcrumb from "src/component/Breadcrumb";
import Banner from "src/component/collectionBanner/banner";

const CollectionBanner = () => {
  return (
    <>
      <Breadcrumb
        style={{ marginTop: 100 }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / COLLECTION BANNER"
      />
      <Banner
        colSize={12}
        insideData={[
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/sub-banner1-d89099e9c448c84a71f131fd01d931ec.jpg",
            title1: "SAVE 30%",
            title2: "MEN",
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/sub-banner2-8eaf597c5af59e6bda754e95b855d860.jpg",
            title1: "SAVE 60%",
            title2: "WOMEN",
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

      <Banner
        colSize={6}
        insideData={[
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/5-c73dd261c1c941b269fbcfb9fc765c65.jpg",
            title1: "SAVE 30%",
            title2: "SHIRTS",
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/10-d8ca5f380ceb0e3d2755fed37801d6b2.jpg",
            title1: "SAVE 50%",
            title2: "HEADSETS",
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/8-3e04defea974ff2f2bfd983b6999d378.jpg",
            title1: "SAVE 60%",
            title2: "SHOES",
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/9-799c3d822bf4312a36fa1ab9573ef232.jpg",
            title1: "SAVE 70%",
            title2: "JEWELLERY",
          },
        ]}
        cardHeight={180}
        textAlign="end"
        title2Color="#fff"
      />
    </>
  );
};
export default CollectionBanner;
