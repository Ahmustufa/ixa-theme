import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import ProductListing from "../../src/component/productListing";
import ShopSidebar from "../../src/component/sidebar/shopSidebar";

const ShopLeftSidebar = (props) => {
  const { items } = useSelector((state) => state.products);
  return (
    <Row>
      <Col span={6}>
        <ShopSidebar />
      </Col>

      <Col span={18}>
        <ProductListing products={items} />
      </Col>
    </Row>
  );
};

export default ShopLeftSidebar;
