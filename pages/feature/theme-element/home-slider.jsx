import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import Carousel1 from "src/component/carousel/carousel1";

const HomeSlider = () => {
  return (
    <>
      <Breadcrumb
        style={{ margin: "20px 0px" }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / HOME SLIDER"
      />
      <Carousel1 />
    </>
  );
};
export default HomeSlider;
