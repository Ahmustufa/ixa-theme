import Slider from "react-slick";
import styled from "styled-components";
import Banner from "../collectionBanner/banner";

const StyledDiv = styled.div``;

const Category2 = (props) => {
  return (
    <StyledDiv style={{ width: "100%", backgroundColor: "#f1f5f4" }}>
      <Banner
        colSize={8}
        insideData={[
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat1-947e31f2645fbb4eb9817bb272606f67.jpg",
            title1: "SAVE 30%",
            title2: "MEN",
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat2-1228cf0bba01bae4640e0abff8ce6c75.jpg",
            title1: "SAVE 60%",
            title2: "WOMEN",
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat3-02f58218a31d0d2024577b3f86a47f33.jpg",
            title1: "SAVE 60%",
            title2: "KIDS",
          },
        ]}
        cardHeight={350}
        textAlign="end"
        textHeight="50%"
        title2Color="#222"
      />
    </StyledDiv>
  );
};

export default Category2;
