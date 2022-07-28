import { Row, Col } from "antd";
import ProductCard from "../cards/productCardWithIcons";

const ProductListing = (props) => {
  const { columns, products, grid } = props;
  return (
    <Row gutter={[32, 32]}>
      {products.map((item, index) => (
        <Col key={index} xs={24} sm={24} md={12} lg={11} xl={8} xxl={24 / grid}>
          <ProductCard {...item} />
        </Col>
      ))}
    </Row>
  );
};

ProductListing.defaultProps = {
  grid: 3,
};

export default ProductListing;
