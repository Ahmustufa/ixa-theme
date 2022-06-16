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
// import { BiUser, BiPhone } from "react-icons/bi";

const navOptions = [
  { label: "WEB DESIGN", link: "/web_design" },
  { label: "LOGO DESIGN", link: "/logo_design" },
  { label: "PORTFOLIO", link: "/portfolio" },
  { label: "PRICING", link: "/pricing" },
  { label: "FAQ's", link: "/faqs" },
  { label: "CONTACT", link: "/contact_us" },
];

const HeaderContent = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const menuList = (
    <ul className="menu-list">
      {/* For Mobile Devices */}
      {window.innerWidth < 1018 ? (
        props.isLoggedIn ? (
          <li className="menu-item-user">
            <Dropdown
              overlay={userDropdownOverlay}
              trigger="hover"
              placement="bottomCenter"
              arrow
            >
              <div className="user-info-logged">
                <p className="m-0 text-uppercase">{`${firstInitial} ${secondInitial}`}</p>
              </div>
            </Dropdown>
          </li>
        ) : (
          <li className="menu-item">
            <p
              onClick={() => dispatch({ type: ModalConstant.OPEN_LOGIN_MODAL })}
              className="m-0 menu-item-login-mobile"
            >
              LOGIN
            </p>
          </li>
        )
      ) : null}

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

      {window.innerWidth > 1018 ? (
        props.isLoggedIn ? (
          <li className="menu-item-user">
            <Dropdown
              overlay={userDropdownOverlay}
              trigger="hover"
              placement="bottomRight"
              arrow
            >
              <div className="user-info-logged-parent">
                <div className="user-info-logged">
                  <img
                    src={avatar}
                    alt="Avatar"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                {`${user.firstName} ${user.lastName} `}
                <DownOutlined style={{ marginLeft: 12 }} />
              </div>
            </Dropdown>
          </li>
        ) : (
          <li className="menu-item-user">
            <div
              className="user-info"
              onClick={() => dispatch({ type: ModalConstant.OPEN_LOGIN_MODAL })}
            >
              <p className="m-0">LOGIN</p>
            </div>
          </li>
        )
      ) : null}
    </ul>
  );

  const [drawer, setDrawer] = useState(false);

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
      if (window.scrollY > 1) {
        navRef.current.classList.add("nav-wrapper-fixed");
      }
      if (window.scrollY <= 2) {
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
      >
        {menuList}
      </Drawer>

      <header className="header">
        {/* <div className="topbar">
          <div className="container text-lg-right text-center p-0">
            <HeaderLink>
              <IoChatbubblesOutline />
              My Account
            </HeaderLink>

            <HeaderLink>
              <BiUser />
              Live Chat
            </HeaderLink>

            <HeaderLink>
              <BiPhone /> +123456789
            </HeaderLink>
          </div>
        </div> */}

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
