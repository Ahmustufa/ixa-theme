import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Dropdown } from "antd";
import Hamburger from "../hamburger";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { BiUser } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import SidebarWrapper from "./sidebarWrapper";

const navOptions = [
  { label: "HOME", link: "/" },
  { label: "SHOP", link: "/shop" },
];

const HeaderContent = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [drawer, setDrawer] = useState(false);
  // useEffect(() => {
  //   function setWindowSizeChange() {
  //     if (window.innerWidth > 1024) {
  //       setDrawer(false);
  //     }
  //   }

  //   window.addEventListener("resize", setWindowSizeChange);
  //   return () => {
  //     window.removeEventListener("resize", setWindowSizeChange);
  //   };
  // });

  /**
   * This useEffect function is used to change header background-color
   */
  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navRef.current.classList.add("nav-wrapper-fixed");
      }
      if (window.scrollY <= 20) {
        navRef.current.classList.remove("nav-wrapper-fixed");
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <SidebarWrapper visible={drawer} onClose={() => setDrawer(false)} />
      <header className="header">
        <nav ref={navRef} className="navbar-wrapper">
          <Row align="middle" justify="space-between" className="nav-container">
            <Col xs={12} sm={12} md={6} lg={5} xl={4}>
              <div className="d-flex align-items-center">
                <img
                  alt="Polkadotsretail"
                  src="/images/LogiLogos-light.svg"
                  className="app-logo"
                />

                <menu className="menu-list d-none d-lg-flex align-items-center p-0">
                  <div className={`menu-item ${router.pathname === "/" ? "active" : ""}`}>
                    <Link href="/">
                      <a>HOME</a>
                    </Link>
                  </div>

                  <div
                    className={`menu-item ${router.pathname === "/shop" ? "active" : ""}`}
                  >
                    <Link href="/">
                      <a>SHOP</a>
                    </Link>
                  </div>

                  <div
                    className={`menu-item ${
                      router.pathname === "discover" ? "active" : ""
                    }`}
                  >
                    <Dropdown overlay={discoverOverlay}>
                      <a>DISCOVER</a>
                    </Dropdown>
                  </div>
                </menu>

                <div
                  className="d-flex d-sm-flex d-md-flex d-lg-none"
                  onClick={() => setDrawer((prev) => !prev)}
                >
                  <Hamburger open={drawer} />
                </div>
              </div>
            </Col>

            <Col xs={10} sm={10} md={6} lg={5} xl={4}>
              <div className="icons-wrapper d-flex align-items-center">
                <BiSearch className="icon" />
                <MdOutlineShoppingBag className="icon" />
                <div className="cart-items">2</div>
                <BiUser className="icon" />
              </div>
            </Col>
          </Row>
        </nav>
      </header>
    </>
  );
};

export default HeaderContent;

const StyledOverlay = styled(Row)`
  background-color: #fff;
  padding: 40px;
  width: 600px;

  div {
    margin-bottom: 12px;
    :last-child {
      margin: 0;
    }
  }

  a {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 0%;
      background-color: #000;
      transition: 0.3s;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;

const discoverOverlay = (
  <StyledOverlay justify="space-between">
    <Col xs={24} sm={24} md={7} lg={7}>
      <div>
        <Link href="/">
          <a>New arrivals</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Sales</a>
        </Link>
      </div>
    </Col>

    <Col xs={24} sm={24} md={7} lg={7}>
      <div>
        <Link href="/">
          <a>Accessories</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Dressed</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Jackets</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Jeans</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Jumpsuits</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Outwear</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Pants</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Skirts</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Top</a>
        </Link>
      </div>
    </Col>

    <Col xs={24} sm={24} md={10} lg={10}>
      <img src="/images/model.jpg" className="img-fluid" />
    </Col>
  </StyledOverlay>
);
