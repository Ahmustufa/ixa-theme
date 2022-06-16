import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Drawer, Dropdown } from "antd";
import Hamburger from "../hamburger";
import Link from "next/link";
import { useRouter } from "next/router";
import { LoadingOutlined, DownOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { ModalConstant } from "../../redux/constants";
import { avatar, profile, dashboard, logout } from "../../../images";
// import { HeaderLink } from "../buttons";
// import { IoChatbubblesOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

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
      {navOptions.map((item, index) => (
        <li
          key={index}
          className={`menu-item${router.pathname === item.link ? " active" : ""}`}
        >
          <Link href={item.link}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
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
        drawerStyle={{ backgroundColor: "#565656", padding: 0, margin: 0 }}
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
        <nav ref={navRef} className="navbar-wrapper nav-wrapper-fixed">
          <Row
            align="middle"
            justify="space-between"
            gutter={[32, 0]}
            className="nav-container"
          >
            <Col span={4}>
              <Link href="/">
                <a>
                  <img
                    alt="logilogos.com"
                    src="/images/LogiLogos-light.svg"
                    style={{ width: 150 }}
                    className="app-logo"
                  />
                </a>
              </Link>
            </Col>

            <Col className="menu-wrapper">{menuList}</Col>

            <Col span={20}>
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
