import styled from "styled-components";
import { Row, Col } from "antd";
import ProductCard from "../cards/productCard";

const ProductListing = (props) => {
  return (
    <StyledContent>
      <div className="text-center">
        <div style={{ fontSize: 40, color: "#54595f", fontWeight: 600 }}>JUST IN</div>
        <br />
        <span
          style={{
            fontSize: 15,
            color: "#54595f",
            borderBottom: "2px solid #54595f",
            fontWeight: 600,
            paddingBottom: 4,
          }}
        >
          SHOP NOW
        </span>
        <br />
        <br />
        <br />
      </div>
      <Row gutter={[32, 32]}>
        {[1, 2, 3, 4, , 5, 6, 7, 8].map((item) => (
          <Col key={item} xs={24} sm={24} md={12} lg={11} xl={8} xxl={6}>
            <ProductCard />
          </Col>
        ))}
      </Row>
    </StyledContent>
  );
};

export default ProductListing;

const StyledContent = styled.div`
  padding: 80px;
`;
