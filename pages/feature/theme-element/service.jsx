import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import Service1 from "src/component/services/service1";
import Service2 from "src/component/services/service2";
import Service3 from "src/component/services/service3";

const HomeSlider = () => {
  return (
    <>
      <Breadcrumb
        style={{ margin: "20px 0px" }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / SERVICE"
      />
      <div style={{ padding: "5%" }}>
        <Service1 />
        <Service2 />
        <Service3 />
      </div>
    </>
  );
};
export default HomeSlider;
