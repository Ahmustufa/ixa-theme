import { useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import Breadcrumb from "src/component/breadcrumb";
import ProductListing from "src/component/productListing";
import ShopSidebar from "src/component/sidebar/shopSidebar";
import SortBar from "src/component/sortItems";
import { bagsProducts } from "src/mock/bagsProducts";

const ProductListin = (props) => {
  const { items } = useSelector((state) => state.products);
  const { products } = props;
  const [gridColumn, setGridColumn] = useState(3);
  return (
    <>
      <Breadcrumb title="SHOP" link="HOME / SHOP" className="my-5" />

      <div className="col-11 mx-auto mb-5">
        <Row gutter={[32, 0]}>
          {/* <Col xs={0} sm={0} md={0} lg={6}>
            <ShopSidebar />
          </Col> */}

          <Col xs={24} sm={24} md={24} lg={24}>
            <img src="/images/shop_card_1.png" width="100%" className="mb-3" />

            <SortBar className="my-5" setGridColumn={setGridColumn} />

            <ProductListing products={products} grid={gridColumn} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductListin;

export async function getServerSideProps(context) {
  const products = bagsProducts.filter(
    (item) => item.category == context?.params?.category
  );
  if (products) {
    return {
      props: { products },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
