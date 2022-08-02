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
    position: relative;
    height: 5px;
    width: 45px;
    background-color: #ff1500;
    content: "";
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto 14px;
    ::before {
      position: absolute;
      height: 5px;
      width: 10px;
      content: "";
      background-color: #ff1500;
      left: 50px;
    }
    ::after {
      position: absolute;
      height: 5px;
      width: 10px;
      content: "";
      background-color: #ff1500;
      right: 50px;
    }
  }
  @media (max-width: 767px) {
    h2 {
      text-align: center;
      font-size: 24px;
    }
  }
`;

const Title3 = (props) => {
  return (
    <StyledDiv>
      <div
        style={{
          display: props.display == "none" ? "none" : "flex",
          justifyContent: "center",
          margin: "24px 0px",
        }}
      >
        <div>
          <h4>{props.subtitle}</h4>
          <h2>{props.maintitle}</h2>
          <div className="line"></div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Title3;
