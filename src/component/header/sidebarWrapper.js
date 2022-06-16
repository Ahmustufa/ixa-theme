import styled from "styled-components";
import { Drawer } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

const navOptions = [
  { label: "HOME", link: "/" },
  { label: "SHOP", link: "/shop" },
];

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

        <menu className="side-menu">
          <div className="side-menu-item">
            <Link href="/">HOME</Link>
          </div>
          <div className="side-menu-item d-flex align-items-center justify-content-between">
            <div>SHOP</div>
            <BiChevronDown style={{ fontSize: 24 }} />
          </div>
        </menu>
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
`;
