import React from "react";
import Title1 from "src/component/titles/title1";
import Breadcrumb from "src/component/breadcrumb";
import Title2 from "src/component/titles/title2";
import Title3 from "src/component/titles/title3";
import Title4 from "src/component/titles/title4";
import Title5 from "src/component/titles/title5";

const Title = () => {
  return (
    <>
      <Breadcrumb
        style={{ marginTop: 100 }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / TITLE"
      />
      <Title1 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />
      <Title2 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />
      <Title3 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />
      <Title4 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />
      <Title5 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />
    </>
  );
};
export default Title;
