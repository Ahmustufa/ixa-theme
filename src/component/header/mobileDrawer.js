import styled from "styled-components";
import { Drawer, Collapse } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { InputWrapper } from "../inputs";
import { BsSearch, BsSuitHeart } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";

const { Panel } = Collapse;

const MobileDrawer = (props) => {
  const { visible, onClose } = props;

  const menu = useSelector((state) => state.menu);
  const menuItems = menu.template || [];

  const closeSidebar = () => {
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <Drawer
      title=""
      placement="left"
      visible={visible}
      closable={false}
      drawerStyle={{ backgroundColor: "#fff", padding: 0, margin: 0, maxWidth: 576 }}
      bodyStyle={{ padding: 0, maxWidth: 576 }}
      style={{ maxWidth: 576 }}
      width={"100%"}
    >
      <StyledContent>
        <div className="d-flex align-items-center justify-content-between p-4">
          <Link href="/">
            <a onClick={closeSidebar} style={{ textDecoration: "none" }}>
              <img
                alt="Polkadotsretail"
                src="/images/app-logo-dark.svg"
                style={{ height: 32 }}
                className="app-logo"
              />
            </a>
          </Link>
          <IoCloseCircleOutline
            onClick={onClose}
            style={{ fontSize: 32, color: "#000" }}
          />
        </div>

        <div className="col-11 mx-auto mb-4">
          <InputWrapper
            placeholder="Enter keywords to search..."
            size="large"
            addonAfter={<BsSearch />}
            className="search-box"
            style={{ outline: "none", borderRadius: 40 }}
          />
        </div>

        <div
          className="d-flex justify-content-around  mt-3 py-2"
          style={{ borderTop: "1px solid #ececec" }}
        >
          <div className="text-center" style={{ flex: "33%", color: "#727272" }}>
            <BsSuitHeart style={{ fontSize: 20 }} />
            <div>Wishlist</div>
          </div>

          <div
            className="text-center"
            style={{
              flex: "33%",
              borderRight: "1px solid #ececec",
              borderLeft: "1px solid #ececec",
              color: "#727272",
            }}
          >
            <AiOutlineShoppingCart style={{ fontSize: 20 }} />
            <div>Cart</div>
          </div>

          <div className="text-center" style={{ flex: "33%", color: "#727272" }}>
            <AiOutlineUser style={{ fontSize: 20 }} />
            <div>Account</div>
          </div>
        </div>

        <div className="side-menu">
          <Collapse ghost className="main-menu">
            {menuItems.map((menu, i) => {
              if (menu.submenu) {
                return (
                  <Panel
                    key={i}
                    showArrow={false}
                    className="sidebar-item-wrapper"
                    header={
                      <div className={`sidebar-item`}>
                        {menu.title}
                        <FiChevronDown className="ml-3" style={{ fontSize: 20 }} />
                      </div>
                    }
                  >
                    <div>
                      {menu.submenu.map((subMenuItem, index) => {
                        if (subMenuItem.submenu) {
                          return (
                            <Collapse ghost>
                              <Panel
                                key={index}
                                showArrow={false}
                                header={
                                  <div className={`navigation-link`}>
                                    {subMenuItem.title}
                                    <FiChevronDown
                                      className="ml-3"
                                      style={{ fontSize: 16 }}
                                    />
                                  </div>
                                }
                              >
                                {subMenuItem.submenu.map((item, index) => (
                                  <div
                                    role="button"
                                    key={`sub-menu-${index}`}
                                    style={{ minWidth: 240 }}
                                  >
                                    <Link href={item.link || ""}>
                                      <a
                                        className="navigation-link"
                                        onClick={closeSidebar}
                                      >
                                        {item.title}
                                      </a>
                                    </Link>
                                  </div>
                                ))}
                              </Panel>
                            </Collapse>
                          );
                        } else {
                          return (
                            <div key={index}>
                              <Link href={subMenuItem.link || ""}>
                                <a className="navigation-link" onClick={closeSidebar}>
                                  {subMenuItem.title}
                                </a>
                              </Link>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </Panel>
                );
              } else {
                return (
                  <div key={i} className={`sidebar-item`}>
                    <Link href={menu.link || ""}>
                      <a
                        onClick={closeSidebar}
                        className="hoverable dark"
                        style={{ textDecoration: "none" }}
                      >
                        {menu.title}
                      </a>
                    </Link>
                  </div>
                );
              }
            })}
          </Collapse>
        </div>
      </StyledContent>
    </Drawer>
  );
};

export default MobileDrawer;

const StyledContent = styled.div`
  .side-menu {
    padding: 0;
    /* margin-top: 48px; */
  }
  .ant-collapse-header,
  .ant-collapse-header-text {
    display: block;
    width: 100%;
    padding: 0 !important;
  }

  .sidebar-item {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
  }

  .navigation-link {
    margin-left: 24px;
  }
  a {
    color: #000;
  }

  .sub-menu-1 {
  }

  .sidebar-item-wrapper {
    border-top: 1px solid #ececec;
    :last-child {
      border-bottom: 1px solid #ececec;
    }
  }
`;
