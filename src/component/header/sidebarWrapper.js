import styled from "styled-components";
import { Drawer, Collapse, Row, Col } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

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
      bodyStyle={{ padding: 40 }}
      width={"100%"}
    >
      <StyledContent>
        <div className="d-flex align-items-center justify-content-between">
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
          <div className="side-menu-item">
            <Link href="/">HOME</Link>
          </div>

          <Collapse ghost>
            <Panel showArrow={false} header={<div className="side-menu-item">SHOP</div>}>
              <Row justify="space-between">
                <Col xs={24} sm={24} md={7} lg={7}>
                  <div className="sub-menu-item">
                    <Link href="/">
                      <a>New arrivals</a>
                    </Link>
                  </div>
                  <div className="sub-menu-item">
                    <Link href="/">
                      <a>Sales</a>
                    </Link>
                  </div>
                </Col>

                <Col xs={24} sm={24} md={7} lg={7}>
                  <div className="sub-menu-item">
                    <Link href="/">
                      <a>Accessories</a>
                    </Link>
                  </div>
                  <div className="sub-menu-item">
                    <Link href="/">
                      <a>Dressed</a>
                    </Link>
                  </div>
                  <div className="sub-menu-item">
                    <Link href="/">
                      <a>Jackets</a>
                    </Link>
                  </div>
                  <div className="sub-menu-item">
                    <Link href="/">
                      <a>Jeans</a>
                    </Link>
                  </div>
                  <div className="sub-menu-item">
                    <Link href="/">
                      <a>Jumpsuits</a>
                    </Link>
                  </div>
                  <div className="sub-menu-item">
                    <Link href="/">
                      <a>Outwear</a>
                    </Link>
                  </div>
                  <div className="sub-menu-item">
                    <Link href="/">
                      <a>Pants</a>
                    </Link>
                  </div>
                  <div className="sub-menu-item">
                    <Link href="/">
                      <a>Skirts</a>
                    </Link>
                  </div>
                  <div className="sub-menu-item">
                    <Link href="/">
                      <a>Top</a>
                    </Link>
                  </div>
                </Col>

                <Col xs={24} sm={24} md={10} lg={10}>
                  <img src="/images/model.jpg" className="img-fluid" />
                </Col>
              </Row>
            </Panel>
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

  .side-menu-item {
    padding: 24px 0;
    border-bottom: 1px solid #e9e9e9;
    :last-child {
      border: none;
    }
  }
  .sub-menu-item {
    margin-bottom: 12px;

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
  }
  .ant-collapse-header {
    padding: 0;
  }
`;
