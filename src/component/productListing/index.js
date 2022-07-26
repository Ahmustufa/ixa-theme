import { Row, Col } from "antd";
import ProductCard from "../cards/productCardWithIcons";

const ProductListing = (props) => {
  const { columns, products } = props;
  return (
    <Row gutter={[32, 32]} className="container-fluid">
      {products.map((item, index) => (
        <Col key={index} xs={24} sm={24} md={12} lg={11} xl={8} xxl={8}>
          <ProductCard {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductListing;
