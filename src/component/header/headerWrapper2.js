import { useState, useEffect } from "react";
import Link from "next/link";
import router from "next/router";
import { Row, Col, Input, Dropdown, Menu } from "antd";
import { InputWrapper } from "../inputs";
import { menuItems } from "./menuItems";
/**
 * Icons
 */
import { SearchOutlined } from "@ant-design/icons";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineUser, AiFillHome } from "react-icons/ai";
import { BsTelephoneFill, BsSuitHeartFill } from "react-icons/bs";
import { RiUser3Fill } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import SidebarWrapper from "./sidebarWrapper";

const HeaderWrapper2 = () => {
  const [sidebar, toggleSidebar] = useState(false);
  return (
    <>
      <SidebarWrapper visible={sidebar} onClose={() => toggleSidebar(false)} />
      <div className="top-bar">
        <div
          className="d-flex align-items-center"
          style={{ color: "#727272", fontSize: 13 }}
        >
          <div>Welcome to our store</div>
          <BsTelephoneFill style={{ color: "#fa869b" }} className="ml-4 mr-2" />
          <div>Call Us: 123 - 456 - 7890</div>
        </div>

        {/* <div className="d-flex align-items-center" style={{ color: "#727272" }}>
          <div className="d-flex align-items-center" role="button">
            <BsSuitHeartFill style={{ color: "#fa869b", marginRight: 6 }} /> Wishlist
          </div>
          <div className="d-flex align-items-center ml-4" role="button">
            <RiUser3Fill style={{ color: "#fa869b", marginRight: 6 }} /> My account
          </div>
        </div> */}
        <div className="top-bar-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaGooglePlusG />
          <FaPinterestP />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      <div className="col-11 m-auto header-wrapper-2">
        <Row justify="space-between" align="middle">
          <Col xs={4} sm={4} md={3} lg={1} xl={1}>
            <IoMenuOutline
              style={{ fontSize: 32, cursor: "pointer" }}
              onClick={() => toggleSidebar(true)}
            />
          </Col>
          <Col span={3}>
            <img src="/images/app-logo-dark.svg" className="img-fluid site-logo" />
          </Col>

          <Col span={10}>
            <InputWrapper
              placeholder="Enter keywords to search..."
              size="large"
              addonAfter={<SearchOutlined />}
              className="search-box"
              style={{ outline: "none", borderRadius: 40 }}
            />
          </Col>

          <Col>
            <div className="icon-box">
              <BiHeadphone className="icon" />

              <div>
                <p className="title">Help is here</p>
                <sub className="sub-title">123456789</sub>
              </div>
            </div>
          </Col>

          <Col>
            <div className="icon-box" role="button">
              <AiOutlineUser className="icon" />

              <div>
                <p className="title">Sign in</p>
                <sub className="sub-title">My Account</sub>
              </div>
            </div>
          </Col>

          <Col>
            <div className="icon-box" role="button">
              <AiOutlineShoppingCart className="icon" />
              <p className="title">Cart</p>
            </div>
          </Col>
        </Row>
      </div>

      <menu
        className="menu-list d-none d-lg-flex justify-content-center align-items-center mb-0"
        style={{
          backgroundColor: "#fff",
          height: 64,
          lineHeight: "64px",
          border: "1px solid #f8f8f8",
          boxShadow: "1px 1px 2px #f8f8f8, -1px -1px 2px #f8f8f8",
          position: "sticky",
          top: 0,
          zIndex: 399,
        }}
      >
        {menuItems.map((menu) => {
          if (menu.submenu) {
            return (
              <Dropdown
                overlay={
                  <Menu style={{ minWidth: 240, marginTop: -4 }}>
                    {menu.submenu.map((subMenuItem, index) => {
                      if (subMenuItem.submenu) {
                        return (
                          <Menu.SubMenu
                            key={index}
                            title={<a className="navigation-link">{subMenuItem.title}</a>}
                          >
                            {subMenuItem.submenu.map((item, index) => (
                              <Menu.Item
                                role="button"
                                key={`sub-menu-${index}`}
                                style={{ minWidth: 240 }}
                              >
                                <Link href={item.link || ""}>
                                  <a className="navigation-link">{item.title}</a>
                                </Link>
                              </Menu.Item>
                            ))}
                          </Menu.SubMenu>
                        );
                      } else {
                        return (
                          <Menu.Item key={index}>
                            <Link href={subMenuItem.link || ""}>
                              <a className="navigation-link">{subMenuItem.title}</a>
                            </Link>
                          </Menu.Item>
                        );
                      }
                    })}
                  </Menu>
                }
              >
                <div
                  className={`menu-item ${router.pathname === menu.link ? "active" : ""}`}
                >
                  <Link href="/">
                    <a style={{ textTransform: "uppercase" }}>{menu.title}</a>
                  </Link>
                  <FiChevronDown className="ml-3" />
                </div>
              </Dropdown>
            );
          } else {
            return (
              <div
                className={`menu-item ${router.pathname === menu.link ? "active" : ""}`}
              >
                <Link href="/">
                  <a style={{ textTransform: "uppercase" }}>{menu.title}</a>
                </Link>
              </div>
            );
          }
        })}

        {/* <div className={`menu-item ${router.pathname === "discover" ? "active" : ""}`}>
          <Dropdown overlay={discoverOverlay}>
            <a>DISCOVER</a>
          </Dropdown>
        </div> */}
      </menu>
    </>
  );
};

export default HeaderWrapper2;
