import { Row, Col } from "antd";
import styled from "styled-components";
import Link from "next/link";
import AccountSidebar from "../../src/component/sidebar/accountSidebar";

const Dashboard = () => {
  return (
    <StyledPage style={{ padding: 80 }}>
      <Row>
        <Col xs={0} sm={0} md={6} lg={6}>
          <AccountSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18}>
          <div className="dashboard">
            <div className="mb-4 fs-5">
              Hello <b>admin12345</b>
            </div>
            <div>
              From your account dashboard you can view your{" "}
              <Link href="/my-account/orders">
                <a className="link">recent orders</a>
              </Link>{" "}
              and{" "}
              <Link href="/my-account/setings">
                <a className="link">edit your password and account details.</a>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </StyledPage>
  );
};

export default Dashboard;

const StyledPage = styled.div`
  .dashboard {
    color: #54595f;
    font-weight: 300;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  .link {
    text-decoration: none;
    color: #54595f;
    font-weight: 500;
    border-bottom: 1px solid #54595f;
    transition: 0.3s;
    :hover {
      color: #0c0c0c;
    }
  }
`;
