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
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    margin: auto;
    overflow: hidden;
    img {
      transition: 0.5s ease;
      transform: scale(1);
      display: block;
      position: absolute;
    }
    &:hover img {
      transform: scale(1.03);
      transition: all 0.4s ease;
    }
    .text-div {
      z-index: 1;
      width: 100%;
      padding: 0px 50px;

      h4 {
        color: #ff1500;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 0;
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
`;

const Banner = (props) => {
  return (
    <StyledBanner>
      <Row gutter={[40]} style={{ padding: 20 }}>
        {props.insideData.map((data, index) => (
          <Col key={index} span={props.colSize}>
            <div
              className="card-banner"
              style={{
                height: props.cardHeight,
              }}
            >
              <img src={data.image} width="100%" />

              <div style={{ textAlign: props.textAlign }} className="text-div">
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