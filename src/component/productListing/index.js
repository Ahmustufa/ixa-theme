import { Row, Col } from "antd";
import ProductCard from "../cards/productCardWithIcons";
import CardStyle1 from "../cards/CardStyle1";

const ProductListing = (props) => {
  const { columns, products, grid, CardStyle } = props;
  const span = 24 / grid;

  return (
    <Row gutter={[32, 32]}>
      {products.map((item, index) => {
        return (
          <Col key={index} xs={24} sm={24} md={12} lg={11} xl={span} xxl={span}>
            <CardStyle listView={grid == 1 ? true : false} {...item} />
          </Col>
        );
      })}
    </Row>
  );
};

ProductListing.defaultProps = {
  grid: 3,
  CardStyle: CardStyle1,
};

export default ProductListing;
