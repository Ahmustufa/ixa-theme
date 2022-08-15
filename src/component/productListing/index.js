import { Row, Col } from "antd";
import ProductCard from "../cards/productCardWithIcons";

const ProductListing = (props) => {
  const { products, grid } = props;
  const span = 24 / grid;

  return (
    <Row gutter={[32, 32]}>
      {products.map((item, index) => {
        return (
          <Col key={index} xs={24} sm={24} md={12} lg={11} xl={span} xxl={span}>
            <ProductCard {...item} listView={grid == 1 ? true : false} />
          </Col>
        );
      })}
    </Row>
  );
};

ProductListing.defaultProps = {
  grid: 3,
};

export default ProductListing;
