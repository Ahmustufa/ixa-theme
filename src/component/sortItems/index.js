import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Col, Input, Button, Checkbox } from "antd";
import Link from "next/link";
import Cookies from "js-cookie";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { CgMenuGridR, CgLoadbar } from "react-icons/cg";
import { AiOutlineBars } from "react-icons/ai";

const SortBar = (props) => {
  const { className, style, setGridColumn } = props;
  return (
    <StyledDiv className={className} style={style}>
      <Row className="main-div">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="search-count">
            <h5>Showing Products 1-24 Of 30 Result</h5>
          </div>
        </Col>

        <Col xs={0} sm={0} md={8} lg={8} xl={8}>
          <div className="filter-div">
            <div>
              <CgMenuGridR
                style={{ fontSize: 22, cursor: "pointer", marginRight: 8 }}
                onClick={() => setGridColumn(3)}
              />
              <AiOutlineBars
                style={{ fontSize: 22, cursor: "pointer" }}
                onClick={() => setGridColumn(1)}
              />
            </div>

            <div className="d-flex">
              <div className="d-flex mx-1" role="button" onClick={() => setGridColumn(2)}>
                {[1, 2].map((index) => (
                  <div key={index} className="grid-count"></div>
                ))}
              </div>

              <div className="d-flex mx-1" role="button" onClick={() => setGridColumn(3)}>
                {[1, 2, 3].map((index) => (
                  <div key={index} className="grid-count"></div>
                ))}
              </div>

              <div className="d-flex mx-1" role="button" onClick={() => setGridColumn(4)}>
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="grid-count"></div>
                ))}
              </div>

              <div className="d-flex mx-1" role="button" onClick={() => setGridColumn(6)}>
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="grid-count"></div>
                ))}
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={4} lg={4} xl={4}>
          <div style={{ borderRight: "1px solid #ddd" }} className="select-wrapper">
            <select className="dropdown">
              <option value="1">24 Products Per Page</option>
              <option value="2">50 Products Per Page</option>
              <option value="3">100 Products Per Page</option>
            </select>
          </div>
        </Col>

        <Col xs={24} sm={24} md={4} lg={4} xl={4}>
          <div className="select-wrapper">
            <select className="dropdown" placeholder="Sorting items">
              <option value="1">Low to high</option>
              <option value="2">High to low</option>
              <option value="3">Newest</option>
            </select>
          </div>
        </Col>
      </Row>
    </StyledDiv>
  );
};

SortBar.defaultProps = {
  setGridColumn: () => {},
};

export default SortBar;

const StyledDiv = styled.div`
  .main-div {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .search-count {
    border-right: 1px solid #ddd;
    padding: 20px;
    h5 {
      font-size: 16px;
      font-weight: 400;
      color: #222;
      line-height: 24px;
      letter-spacing: 0.05em;
      margin: 0px;
    }
  }

  .grid-count {
    height: 18px;
    width: 4px;
    background-color: red;
    margin: 0 2px;
  }

  .filter-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid #ddd;
    padding: 20px;
  }

  .select-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    .dropdown {
      border: 0px !important;
      outline: none !important;
      padding: 20px;
      width: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
      cursor: pointer;
      background: url(https://themes.pixelstrap.com/multikart/assets/images/dropdown.png)
        no-repeat 91%;
    }
  }
`;
