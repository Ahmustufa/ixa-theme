import { useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import Breadcrumb from "../../src/component/breadcrumb";
import ProductListing from "../../src/component/productListing";
import ShopSidebar from "../../src/component/sidebar/shopSidebar";
import SortBar from "../../src/component/sortItems";
import { shoesProducts } from "src/mock/shoesProducts";

const ShopLeftSidebar = (props) => {
  const { items } = useSelector((state) => state.products);
  const [gridColumn, setGridColumn] = useState(3);

  return (
    <>
      <Breadcrumb title="SHOP" link="HOME / SHOP" className="my-5" />

      <div className="col-11 mx-auto mb-5">
        <Row gutter={[32, 0]}>
          <Col xs={0} sm={0} md={0} lg={6}>
            <ShopSidebar />
          </Col>

          <Col xs={24} sm={24} md={24} lg={18}>
            <img src="/images/shop_card_1.png" width="100%" className="mb-3" />
            <div style={{ fontSize: 20 }}>Fashion</div>
            <div style={{ fontWeight: 600 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <p style={{ fontSize: 14, color: "#858585", margin: "12px 0" }}>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.`}
            </p>

            <SortBar className="my-5" setGridColumn={setGridColumn} />

            <ProductListing grid={gridColumn} products={shoesProducts} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ShopLeftSidebar;
