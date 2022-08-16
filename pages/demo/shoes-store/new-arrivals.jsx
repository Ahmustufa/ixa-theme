import { useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import Breadcrumb from "src/component/breadcrumb";
import ProductListing from "src/component/productListing";
import ShopSidebar from "src/component/sidebar/shopSidebar";
import SortBar from "src/component/sortItems";
import CardStyle6 from "src/component/cards/CardStyle6";
import { newArrivalShoes } from "src/mock/shoesProducts";
import ProductCardWithIcons from "src/component/cards/productCardWithIcons";

const NewArrivals = (props) => {
  const { items } = useSelector((state) => state.products);
  const [gridColumn, setGridColumn] = useState(3);

  return (
    <>
      <Breadcrumb title="SHOP" link="HOME / SHOES STORE / WOMEN" className="my-5" />

      <div className="col-11 mx-auto mb-5">
        <Row gutter={[32, 0]}>
          {/* <Col xs={0} sm={0} md={0} lg={6}>
            <ShopSidebar />
          </Col> */}

          <Col xs={24} sm={24} md={24} lg={24}>
            <img
              //   src="/images/Shoes/banner/Women-banner.jpg"
              src="https://www.berleigh.com/wp-content/uploads/2019/09/banner-new-arrivals.jpg"
              width="100%"
              className="mb-3"
            />

            <SortBar
              count={newArrivalShoes.length}
              className="my-5"
              setGridColumn={setGridColumn}
            ></SortBar>

            <ProductListing
              CardStyle={ProductCardWithIcons}
              products={newArrivalShoes}
              grid={gridColumn}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NewArrivals;
