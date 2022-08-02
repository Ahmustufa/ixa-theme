import { useState, useEffect } from "react";
import Link from "next/link";
import router from "next/router";
import { Row, Col, Input, Dropdown, Menu } from "antd";
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

const HeaderWrapper2 = () => {
  return (
    <>
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

      <div className="container header-wrapper-2">
        <Row justify="space-between" align="middle">
          <Col span={3}>
            <img src="/images/app-logo-dark.svg" className="img-fluid site-logo" />
          </Col>

          <Col span={10}>
            <Input
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
          boxShadow: "2px 2px 4px #f8f8f8, -2px -2px 4px #f8f8f8",
          position: "sticky",
          top: 0,
          zIndex: 399,
        }}
      >
        {header.map((menu) => {
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

const header = [
  {
    title: "home",
    submenu: [
      {
        title: "Clothing",
        submenu: [
          { title: "Fashion 1", link: "/layout/fashion-1" },
          { title: "Fashion 2", link: "/fashion-2" },
          { title: "Fashion 3", link: "/fashion-3" },
          { title: "Fashion 4", link: "/fashion-4" },
        ],
      },
      { title: "Grocery", link: "/" },
      { title: "Electronics", link: "/" },
    ],
    link: "/",
  },
  {
    title: "shop",
    submenu: [
      { title: "Left Sidebar", link: "/shop/left-sidebar" },
      { title: "Right Sidebar", link: "/shop/right-sidebar" },
      { title: "No Sidebar", link: "/shop/no-sidebar" },
      { title: "Thee Grid", link: "/shop/three-grid" },
      { title: "Six Grid", link: "/shop/six-grid" },
      { title: "List View", link: "/shop/list-view" },
    ],
  },
  {
    title: "products",
    link: "/products",
    submenu: [
      { title: "4-image", link: "/product/4-image" },
      { title: "Sticky", link: "/product/sticky" },
      { title: "Carousel", link: "/product/carousel" },
      {
        title: "Thumbnails",
        submenu: [
          { title: "Right thumbnail", link: "/product/right-thumbnail" },
          { title: "Left thumbnail", link: "/product/left-thumbnail" },
          { title: "Bottom thumbnail", link: "/product/bottom-thumbnail" },
        ],
      },
    ],
  },
  {
    title: "feature",
    link: "/feature",
    submenu: [{ title: "Product Box", link: "/feature/product-element/product-box" }],
  },
  {
    title: "pages",
    link: "/pages",
    submenu: [
      {
        title: "Compare",
        submenu: [
          { title: "Compare", link: "/page/compare" },
          { title: "Compare 2", link: "/page/compare-2" },
        ],
      },
    ],
  },
  {
    title: "blog",
    link: "/blog",
    submenu: [
      { title: "Blog left sidebar", link: "/blog/blog-left-sidebar" },
      { title: "Blog right sidebar", link: "/blog/blog-right-sidebar" },
      { title: "No sidebar", link: "/blog/no-sidebar" },
    ],
  },
];
