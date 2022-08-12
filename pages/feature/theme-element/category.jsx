import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import Category1 from "src/component/category/category1";
import Category2 from "src/component/category/category2";
import Category3 from "src/component/category/category3";
import Category4 from "src/component/category/category4";

const Category = () => {
  return (
    <>
      <Breadcrumb
        style={{ margin: "20px 0px" }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / CATEGORY"
      />
      <Category1
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

      <Category2 />

      <Category3 />

      <Category4
        insideData={[
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat2-cd63b7c8fc62f886e77d95575e1b271a.png",
            title: "calculator watch",
            para: [
              "Watchmaking conglomerates",
              "Breitling SA",
              "Casio watches",
              "Citizen Watch",
            ],
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat3-2ef9aaedeb9143b4f416c8e0225f8a99.png",
            title: "Antimagnetic watch",
            para: [
              "Watchmaking conglomerates",
              "Breitling SA",
              "Casio watches",
              "Citizen Watch",
            ],
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat1-40d0b04fc613bd810301208b79a6d94b.png",
            title: "Watch models",
            para: [
              "Watchmaking conglomerates",
              "Breitling SA",
              "Casio watches",
              "Citizen Watch",
            ],
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat3-2ef9aaedeb9143b4f416c8e0225f8a99.png",
            title: "Formal watch",
            para: [
              "Watchmaking conglomerates",
              "Breitling SA",
              "Casio watches",
              "Citizen Watch",
            ],
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat1-40d0b04fc613bd810301208b79a6d94b.png",
            title: "Watch style",
            para: [
              "Watchmaking conglomerates",
              "Breitling SA",
              "Casio watches",
              "Citizen Watch",
            ],
          },
        ]}
      />
    </>
  );
};
export default Category;
