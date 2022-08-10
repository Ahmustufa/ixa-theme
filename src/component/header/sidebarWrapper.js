import styled from "styled-components";
import { Drawer, Collapse, Row, Col } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { menuItems } from "./menuItems";

const { Panel } = Collapse;

const SidebarWrapper = (props) => {
  const { visible, onClose } = props;
  const router = useRouter();
  return (
    <Drawer
      title=""
      placement="left"
      visible={visible}
      closable={false}
      drawerStyle={{ backgroundColor: "#fff", padding: 0, margin: 0 }}
      bodyStyle={{ padding: 0 }}
      width={300}
    >
      <StyledContent>
        <div className="d-flex align-items-center justify-content-between px-4 pt-5">
          <img
            alt="Polkadotsretail"
            src="/images/app-logo-dark.svg"
            style={{ width: 160 }}
            className="app-logo"
          />
          <IoCloseCircleOutline
            onClick={onClose}
            style={{ fontSize: 32, color: "#000" }}
          />
        </div>

        <div className="side-menu">
          <Collapse ghost className="main-menu">
            {menuItems.map((menu, i) => {
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
                                    <a className="navigation-link">{item.title}</a>
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
                              <a className="navigation-link">{subMenuItem.title}</a>
                            </Link>
                          </div>
                        );
                      }
                    })}
                  </div>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </StyledContent>
    </Drawer>
  );
};

export default SidebarWrapper;

const StyledContent = styled.div`
  .side-menu {
    padding: 0;
    margin-top: 48px;
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

  .sub-menu-1 {
  }

  .sidebar-item-wrapper {
    border-top: 1px solid #ececec;
    :last-child {
      border-bottom: 1px solid #ececec;
    }
  }
`;
