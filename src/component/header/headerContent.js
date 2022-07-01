import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Dropdown, message } from "antd";
import Hamburger from "../hamburger";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { BiUser } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import SidebarWrapper from "./sidebarWrapper";
import { ModalConstant } from "../../redux/constants";
import { addItemToCart, openCart } from "../../redux/actions/cartActions";
import { logoutAction } from "../../redux/actions";
import { errorHandler, Queries, useFetch } from "../../api/config";

const HeaderContent = (props) => {
  const dispatch = useDispatch();
  const { isLoggedIn, data } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.cart);
  const [allCategories, setAllCategories] = useState([]);
  const router = useRouter();
  const [drawer, setDrawer] = useState(false);

  /**
   * This useEffect function is used to change header background-color
   */
  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && router.pathname === "/") {
        navRef.current.classList.add("nav-wrapper-fixed");
      }
      if (window.scrollY <= 20 && router.pathname === "/") {
        navRef.current.classList.remove("nav-wrapper-fixed");
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [getAllCategories] = useFetch(Queries.getAllCategories);

  const getCategories = async () => {
    try {
      const { data } = await getAllCategories();

      data.forEach((item) => {
        allCategories.push(item.type);
      });
      setAllCategories([...allCategories]);
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  // =============GET MY CART DATA==============
  const [getMyCart] = useFetch(Queries.getMyCart);

  const getCart = async (id) => {
    try {
      const { data } = await getMyCart(id);
      console.log("carts data", data);
      addItemToCart(data);
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  const accountOverlay = (
    <AccountOverlay>
      <ul className="account-menu-list">
        <li className="menu-item">
          <Link href="/my-account/dashboard">
            <a className="hoverable dark">Dashboard</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/my-account/orders">
            <a className="hoverable dark">Orders</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/my-account/settings">
            <a className="hoverable dark">Account</a>
          </Link>
        </li>
        <li className="menu-item">
          <a
            onClick={() => {
              dispatch(logoutAction());
            }}
            className="hoverable dark"
          >
            Logout
          </a>
        </li>
      </ul>
    </AccountOverlay>
  );

  const discoverOverlay = (
    <StyledOverlay justify="space-between">
      <Col xs={24} sm={24} md={7} lg={7}>
        {allCategories.map((item, index) => (
          <div key={index}>
            <Link href={`/category/${item}`}>
              <a>{item}</a>
            </Link>
          </div>
        ))}
      </Col>

      <Col xs={24} sm={24} md={10} lg={10}>
        <img src="/images/model.jpg" className="img-fluid" />
      </Col>
    </StyledOverlay>
  );

  useEffect(() => {
    getCategories();
    getCart(data._id);
  }, []);

  return (
    <>
      <SidebarWrapper visible={drawer} onClose={() => setDrawer(false)} />
      <header className="header">
        <nav
          ref={navRef}
          className={`navbar-wrapper ${
            router.pathname === "/" ? "" : "nav-wrapper-fixed"
          } `}
        >
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
                <MdOutlineShoppingBag
                  className="icon"
                  onClick={() => {
                    dispatch(openCart());
                  }}
                />
                <div className="cart-items">{items.length}</div>
                {isLoggedIn ? (
                  <Dropdown overlay={accountOverlay} trigger="click">
                    <BiUser className="icon" />
                  </Dropdown>
                ) : (
                  <BiUser
                    onClick={() => {
                      dispatch({ type: ModalConstant.OPEN_LOGIN_MODAL });
                    }}
                    className="icon"
                  />
                )}
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
  box-shadow: 1px 1px 4px #e5e5e5;

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

const AccountOverlay = styled.div`
  background-color: #fff;
  padding: 18px;
  width: 200px;
  box-shadow: 1px 1px 4px #e5e5e5;

  .account-menu-list {
    list-style: none;
    padding: 0;
    .menu-item {
      margin-bottom: 12px;
    }
    .menu-item a {
      text-decoration: none;
      color: #0c0c0c;
      font-size: 14px;
    }
  }
`;
