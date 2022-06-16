import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Drawer, Dropdown } from "antd";
import Hamburger from "../hamburger";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

const navOptions = [
  { label: "HOME", link: "/" },
  { label: "SHOP", link: "/shop" },
];

const HeaderContent = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [drawer, setDrawer] = useState(false);

  const menuList = (
    <ul className="menu-list">
      <li>
        <img
          alt="Polkadotsretail"
          src="/images/LogiLogos-light.svg"
          style={{ width: 160 }}
          className="app-logo"
        />
      </li>

      {navOptions.map((item, index) => (
        <li
          key={index}
          className={`menu-item ${router.pathname === item.link ? "active" : ""}`}
        >
          <Link href={item.link}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
      <li className={`menu-item ${router.pathname === "discover" ? "active" : ""}`}>
        <Dropdown overlay={discoverOverlay}>
          <a>Discover</a>
        </Dropdown>
      </li>
    </ul>
  );

  useEffect(() => {
    function setWindowSizeChange() {
      if (window.innerWidth > 1024) {
        setDrawer(false);
      }
    }

    window.addEventListener("resize", setWindowSizeChange);
    return () => {
      window.removeEventListener("resize", setWindowSizeChange);
    };
  });

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
      <Drawer
        title=""
        placement="left"
        visible={drawer}
        closable={false}
        drawerStyle={{ backgroundColor: "#fff", padding: 0, margin: 0 }}
        bodyStyle={{ padding: 0 }}
        mask={false}
        width={"100%"}
      >
        <IoCloseCircleOutline
          onClick={() => setDrawer(false)}
          style={{ fontSize: 32, color: "#fff" }}
        />
        {menuList}
      </Drawer>

      <header className="header">
        <nav ref={navRef} className="navbar-wrapper">
          <Row
            align="middle"
            justify="space-between"
            gutter={[32, 0]}
            className="nav-container"
          >
            <Col>
              <div className="menu-wrapper">{menuList}</div>
            </Col>

            <Col>
              <div className="icons-wrapper d-flex align-items-center">
                <BiSearch className="icon" />
                <MdOutlineShoppingBag className="icon" />
                <div className="cart-items">2</div>
                <div className="account">Account</div>
              </div>
            </Col>

            <Col span={0}>
              <div className="hamburger" onClick={() => setDrawer((prev) => !prev)}>
                <Hamburger open={drawer} />
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
