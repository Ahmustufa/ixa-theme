import { Row, Col } from "antd";
import ProductCard from "../cards/productCardWithIcons";

const ProductListing = (props) => {
  const { columns, products, grid } = props;
  const span = 24 / grid;
  console.log("GRID", grid);
  console.log("COLUMN SIZE", span);
  return (
    <Row gutter={[32, 32]}>
      {products.map((item, index) => {
        console.log("item", item);

        return (
          <Col key={index} xs={24} sm={24} md={12} lg={11} xl={span} xxl={span}>
            <ProductCard {...item} />
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
