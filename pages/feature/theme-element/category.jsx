import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import Category1 from "src/component/category/category1";
import Category2 from "src/component/category/category2";
import Category3 from "src/component/category/category3";
import Category4 from "src/component/category/category4";
import { bagsProducts } from "src/mock/bagsProducts";

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
            image: "/images/Shoes/category/women-shoes.png",
            title: "Women Shoes",
            link: "#",
          },
          {
            image: "/images/Shoes/category/men-shoes.webp",
            title: "Men Shoes",
            link: "#",
          },
          {
            image: "/images/Shoes/category/formal.webp",
            title: "Formal",
            link: "#",
          },
          {
            image: "/images/Shoes/category/slippers.webp",
            title: "Slippers",
            link: "#",
          },
          {
            image: "/images/Shoes/category/heels.webp",
            title: "Heels",
            link: "#",
          },
          {
            image: "/images/Shoes/category/boots.png",
            title: "Boots",
            link: "#",
          },
        ]}
      />

      <Category2 />

      <Category3 />

      <Category4 insideData={bagsProducts} />
    </>
  );
};
export default Category;
