import { useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import Breadcrumb from "src/component/breadcrumb";
import ProductListing from "src/component/productListing";
import ShopSidebar from "src/component/sidebar/shopSidebar";
import SortBar from "src/component/sortItems";
import { bagsProducts } from "src/mock/bagsProducts";
import { useRouter } from "next/router";
import CardStyle7 from "src/component/cards/CardStyle7";
import { clothProducts } from "src/mock/clothProducts";

const ProductListin = (props) => {
  const { items } = useSelector((state) => state.products);
  const router = useRouter();
  const { products } = props;
  const [gridColumn, setGridColumn] = useState(4);

  const categoryBanners = [
    { category: "dress", image: "/images/clothing/banner/Small-banner-1.jpg" },
    { category: "jacket", image: "/images/clothing/banner/Small-banner-2.jpg" },
    { category: "sweater", image: "/images/clothing/banner/Small-banner-3.jpg" },
  ];
  return (
    <>
      <Breadcrumb title="SHOP" link="HOME / SHOP" className="my-5" />

      <div className="col-11 mx-auto mb-5">
        <Row gutter={[32, 0]}>
          {/* <Col xs={0} sm={0} md={0} lg={6}>
            <ShopSidebar />
          </Col> */}

          <Col xs={24} sm={24} md={24} lg={24}>
            {categoryBanners.map((item) => {
              if (item.category == router.query.category) {
                return <img src={item.image} width="100%" className="mb-3" />;
              }
            })}

            <SortBar className="my-5" setGridColumn={setGridColumn} />

            <ProductListing
              CardStyle={CardStyle7}
              products={products}
              grid={gridColumn}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductListin;

export async function getServerSideProps(context) {
  let products = clothProducts.filter(
    // (item) => item.category == context?.params?.category
    (item) => true
  );

  products = JSON.parse(JSON.stringify(products));

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
