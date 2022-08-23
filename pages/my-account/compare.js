import { Row, Col, Collapse, Divider, message } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import AccountSidebar from "src/component/sidebar/accountSidebar";
import { MdOutlineCompare } from "react-icons/md";
import { PrimaryButton } from "src/component/buttons";
import CardStyle6 from "src/component/cards/CardStyle6";

const Compare2 = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: compareList } = useSelector((state) => state.compareList);

  return (
    <StyledPage style={{ padding: 80 }}>
      <Row>
        <Col xs={0} sm={0} md={4} lg={4}>
          <AccountSidebar />
        </Col>

        <Col xs={24} sm={24} md={20} lg={20}>
          <h1
            style={{
              fontWeight: 600,
              marginBottom: 32,
              textAlign: "center",
              color: "#54595f",
            }}
          >
            Compare Products
          </h1>
          {compareList.length == 0 ? (
            <Row className="mt-3">
              <Col style={{ background: "#f9fafb" }} span={24} className="p-4">
                <div className="d-flex justify-content-start align-items-center">
                  <MdOutlineCompare color={"#ced4da"} size={50} />
                  <p className="mb-0 ml-5 title" style={{ color: "#808080" }}>
                    Your Compare List is currently empty.
                  </p>
                </div>
              </Col>
              <Link href={"/"}>
                <PrimaryButton className="mt-5">RETURN TO SHOP</PrimaryButton>
              </Link>
            </Row>
          ) : (
            <Row gutter={[24, 24]}>
              {compareList.map((item, index) => (
                <Col key={index} xs={24} sm={24} lg={6}>
                  <CardStyle6 {...item} productDetails={item} />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </StyledPage>
  );
};

export default Compare2;

const StyledPage = styled.div`
  .pagination-sec {
    background: #f8f8f8;
    padding: 30px 80px;
    p {
      color: #555555;
      font-weight: 600;
    }
    p:hover {
      cursor: pointer;
      color: #000;
    }
    span {
      color: #6c757d;
    }
  }

  @media (max-width: 1024px) {
    .detail-section {
      padding: 20px !important;
    }
    .pagination-sec {
      padding: 20px !important;
    }
  }
`;
