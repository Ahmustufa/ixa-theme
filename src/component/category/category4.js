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
      /* padding: 24px 24px; */
      img {
        width: 100%;
        margin-bottom: 34px;
        max-height: 370px;
      }
      h5 {
        padding: 0px 12px;
        font-weight: 600;
        margin-bottom: 16px;
        color: #54595f;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        font-size: 12px;
        color: #858585;
      }
    }
  }

  .slick-slide img {
    display: initial;
  }
`;

const Category4 = (props) => {
  const settings = {
    // autoplay: true,
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
              <img style={{ width: "100%", marginBottom: 24 }} src={data.images[0]} />
              <h5 title={data.title}>{data.title}</h5>

              <p key={index} style={{ marginBottom: 0 }}>
                {data.para}
              </p>

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
