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
import { electronicsMenu } from "../../../src/mock/menus";
import { electronicItems } from "../../../src/mock/electronicProducts";

const ProductListin = (props) => {
  const { items } = useSelector((state) => state.products);
  const router = useRouter();
  const { products } = props;
  const [gridColumn, setGridColumn] = useState(4);

  console.log(products);
  const categoryBanners = [
    { category: "fridge", image: "/images/Electronics/banner/fridge-banner.webp" },
    { category: "fan", image: "/images/Electronics/banner/fan-banner.webp" },
    {
      category: "health-and-beauty",
      image: "/images/Electronics/banner/health-and-beauty-banner.webp",
    },
  ];
  return (
    <>
      <Breadcrumb
        title="SHOP"
        link={`HOME / ${router.query.category.toUpperCase()}`}
        className="my-5"
      />

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
  let products = electronicItems.filter(
    (item) => item.category == context.params?.category

    // (item) => true
  );
  // products = JSON.parse(JSON.stringify(products));

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
