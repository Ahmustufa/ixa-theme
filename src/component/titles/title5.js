import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledDiv = styled.div`
  padding: 30px 0px;
  h4 {
    color: #ff1500;
    text-align: center;
    font-size: 18px;
    margin: 0px;
  }
  h2 {
    position: relative;
    text-align: center;
    font-weight: bold;
    margin: 8px 0px 10px;
    line-height: 1.1em;
    font-size: 36px;
    width: max-content;
    padding-bottom: 0px;
  }
  .line {
    border: 0 solid;
    height: 1px;
    background-image: linear-gradient(to right, transparent, #ff1500, transparent);
    display: block;
    width: 80%;
    margin: 15px auto 14px;

    ::before {
      position: absolute;
      border: 1px solid #ff1500;
      background-color: #fff;
      padding: 5px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      left: 50%;
      margin: -6px 0 0;
      content: "";
    }
  }
  @media (max-width: 767px) {
    h2 {
      text-align: center;
      font-size: 24px;
    }
  }
`;

const Title5 = (props) => {
  return (
    <StyledDiv>
      <div
        style={{
          display: props.display == "none" ? "none" : "flex",
          justifyContent: "center",
          margin: "8px 0px",
        }}
      >
        <div>
          <h4>{props.subtitle}</h4>
          <h2>{props.maintitle}</h2>
          <hr className="line"></hr>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Title5;
