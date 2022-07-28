import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import Breadcrumb from "../../src/component/breadcrumb";
import ProductListing from "../../src/component/productListing";
import ShopSidebar from "../../src/component/sidebar/shopSidebar";

const ShopLeftSidebar = (props) => {
  const { items } = useSelector((state) => state.products);
  return (
    <div className="col-11 mx-auto mb-5">
      <Breadcrumb title="SHOP" link="HOME / SHOP" className="my-5" />
      <Row gutter={[32, 0]}>
        <Col span={6}>
          <ShopSidebar />
        </Col>

        <Col span={18}>
          <img
            src="https://multikart-react.vercel.app/_next/static/images/2-beb8795ec9decb581e91c6b47f6882ec.jpg"
            width="100%"
            className="mb-3"
          />
          <div style={{ fontSize: 20 }}>Fashion</div>
          <div style={{ fontWeight: 600 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <p style={{ fontSize: 14, color: "#858585", margin: "12px 0" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <ProductListing products={items} />
        </Col>
      </Row>
    </div>
  );
};

export default ShopLeftSidebar;
