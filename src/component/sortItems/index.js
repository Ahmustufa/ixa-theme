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

const StyledDiv = styled.div`
  padding: 20px 80px;

  .main-div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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

  .filter-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  .products-per-page {
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

const SortItems = () => {
  return (
    <StyledDiv>
      <div className="main-div">
        <Col span={8}>
          <div className="search-count">
            <h5>Showing Products 1-24 Of 10 Result</h5>
          </div>
        </Col>
        <Col span={8}>
          <div className="filter-div">
            <div>
              <CgMenuGridR style={{ fontSize: 22, cursor: "pointer", marginRight: 8 }} />
              <AiOutlineBars style={{ fontSize: 22, cursor: "pointer" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  display: "flex",
                  cursor: "pointer",
                  marginLeft: 5,
                  marginRight: 5,
                }}
              >
                {[1, 2].map((index) => (
                  <div
                    key={index}
                    style={{
                      height: 18,
                      width: 4,
                      backgroundColor: "red",
                      marginLeft: 2,
                      marginRight: 2,
                    }}
                  ></div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  cursor: "pointer",
                  marginLeft: 5,
                  marginRight: 5,
                }}
              >
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    style={{
                      height: 18,
                      width: 4,
                      backgroundColor: "red",
                      marginLeft: 2,
                      marginRight: 2,
                    }}
                  ></div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  cursor: "pointer",
                  marginLeft: 5,
                  marginRight: 5,
                }}
              >
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    style={{
                      height: 18,
                      width: 4,
                      backgroundColor: "red",
                      marginLeft: 2,
                      marginRight: 2,
                    }}
                  ></div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  cursor: "pointer",
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    style={{
                      height: 18,
                      width: 4,
                      backgroundColor: "red",
                      marginLeft: 2,
                      marginRight: 2,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </Col>
        <Col span={4}>
          <div style={{ borderRight: "1px solid #ddd" }} className="products-per-page">
            <select className="dropdown">
              <option style={{ padding: 8 }} value="actual value 1">
                24 Products Per Page
              </option>
              <option value="actual value 2">50 Products Per Page</option>
              <option value="actual value 3">100 Products Per Page</option>
            </select>
          </div>
        </Col>
        <Col span={4}>
          <div className="products-per-page">
            <select className="dropdown">
              <option style={{ padding: 8 }} value="actual value 1">
                24 Products
              </option>
              <option value="actual value 2">50 Products</option>
              <option value="actual value 3">100 Products</option>
            </select>
          </div>
        </Col>
      </div>
    </StyledDiv>
  );
};
export default SortItems;
