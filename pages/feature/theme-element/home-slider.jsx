import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import HomeSliderComponent from "src/component/slider";

const HomeSlider = () => {
  return (
    <>
      <Breadcrumb
        style={{ marginTop: 100 }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / HOME SLIDER"
      />
      <HomeSliderComponent />
    </>
  );
};
export default HomeSlider;
