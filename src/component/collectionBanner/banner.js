import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledBanner = styled.div`
  padding: 0 5%;
  .card-banner {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    background-position: center;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    cursor: pointer;
    position: relative;
    margin: auto;
    overflow: hidden;
    .img-div {
      transition: 0.5s ease;
      transform: scale(1);
      display: block;
      position: absolute;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 250px;
      width: 100%;
    }
    &:hover .img-div {
      transform: scale(1.03);
      transition: all 0.4s ease;
    }
    .text-div {
      z-index: 1;
      width: 100%;
      padding: 50px;

      h4 {
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 8px;
      }
      h2 {
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 0.1em;
        margin-bottom: -6px;
        text-transform: uppercase;
      }
    }
  }

  @media (max-width: 991px) {
  }
`;

const Banner = (props) => {
  return (
    <StyledBanner>
      <Row gutter={[40]} style={{ padding: 20 }}>
        {props.insideData.map((data, index) => (
          <Col key={index} xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <div
              className="card-banner"
              style={{
                height: props.cardHeight,
              }}
            >
              <div
                className="img-div"
                style={{ backgroundImage: `url(${data.image})` }}
              />

              <div
                style={{
                  textAlign: props.textAlign,
                  height: props.textHeight ? props.textHeight : "initial",
                }}
                className="text-div"
              >
                <h4>{data.title1}</h4>
                <h2 style={{ color: props.title2Color }}>{data.title2}</h2>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </StyledBanner>
  );
};
export default Banner;
