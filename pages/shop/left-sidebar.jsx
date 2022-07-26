import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import Breadcrumb from "../../src/component/breadcrumb";
import ProductListing from "../../src/component/productListing";
import ShopSidebar from "../../src/component/sidebar/shopSidebar";

const ShopLeftSidebar = (props) => {
  const { items } = useSelector((state) => state.products);
  return (
    <div className="m-auto">
      <Breadcrumb title="SHOP" link="HOME / SHOP" className="my-5" />
      <Row>
        <Col span={6}>
          <ShopSidebar />
        </Col>

        <Col span={18}>
          <ProductListing products={items} />
        </Col>
      </Row>
    </div>
  );
};

export default ShopLeftSidebar;
