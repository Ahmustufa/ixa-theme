import Slider from "react-slick";
import styled from "styled-components";
import { ButtonWrapper } from "../buttons";
import { Row, Col } from "antd";

const StyledDiv = styled.div`
  .main-div {
    display: flex;
    align-items: center;
    justify-content: center;
    .inside-main {
      border: 1px solid #dddada;
      text-align: center;
      margin-left: 24px;
      margin-right: 24px;
      padding: 40px 0px;
    }
  }

  .slick-slide img {
    display: initial;
  }
`;

const Category4 = (props) => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <StyledDiv style={{ width: "100%", padding: "4% 2%" }}>
      <Slider {...settings}>
        {props.insideData.map((data, index) => (
          <div key={index} className="main-div">
            <div className="inside-main">
              <img src={data.image} />
              <h4>{data.title}</h4>
              {data?.para?.map((data2, index) => (
                <p key={index} style={{ marginBottom: 0 }}>
                  {data2}
                </p>
              ))}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ButtonWrapper style={{ margin: "24px 0px", maxWidth: 200 }}>
                  Read More
                </ButtonWrapper>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </StyledDiv>
  );
};

export default Category4;
