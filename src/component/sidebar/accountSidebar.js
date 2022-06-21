import styled from "styled-components";
import Link from "next/link";

const AccountSidebar = (props) => {
  return (
    <StyledSidebar>
      <h1 className="heading">My account</h1>
      <ul className="sidebar-list">
        <li className="sidebar-item selected">
          <Link href="#">
            <a className="hoverable dark">Dashboard</a>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link href="#">
            <a className="hoverable dark">Orders</a>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link href="#">
            <a className="hoverable dark">Account</a>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link href="#">
            <a className="hoverable dark">Logout</a>
          </Link>
        </li>
      </ul>
    </StyledSidebar>
  );
};

export default AccountSidebar;

const StyledSidebar = styled.div`
  padding: 16px;
  background-color: #fff;
  // box-shadow: 1px 1px 4px #e5e5e5;

  .heading {
    color: #54595f;
    font-weight: 600;
    margin-bottom: 32px;
  }

  .sidebar-list {
    padding: 0;
    list-style: none;
  }

  .sidebar-item {
    margin: 16px 0;

    &.selected {
      font-weight: 600;
      a {
        font-weight: 600;
      }
    }

    a {
      color: #0c0c0c;
      font-weight: 300;
      text-decoration: none;
    }
  }
`;