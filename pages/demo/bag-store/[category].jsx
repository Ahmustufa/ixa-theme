import { useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import Breadcrumb from "src/component/breadcrumb";
import ProductListing from "src/component/productListing";
import SortBar from "src/component/sortItems";
import { bagsProducts } from "src/mock/bagsProducts";
import { useRouter } from "next/router";
import CardStyle7 from "src/component/cards/CardStyle7";
import styled from "styled-components";
import Link from "next/link";

const ProductListin = (props) => {
  const { items } = useSelector((state) => state.products);
  const router = useRouter();
  const { products } = props;
  const [gridColumn, setGridColumn] = useState(4);

  const categoryBanners = [
    { category: "women", image: "/images/Bags/banner/pbanner1.png" },
    { category: "travel", image: "/images/Bags/banner/pbanner2.png" },
    { category: "others", image: "/images/Bags/banner/Others-banner.jpg" },
  ];
  return (
    <>
      {/* <Breadcrumb title="SHOP" link="HOME / SHOP" className="my-5" /> */}
      <StyledPage>
        <div className="pagination-sec mt-5 mb-5">
          <Row className="d-flex justify-content-end align-items-center">
            <Col lg={6} sm={24} xs={24}>
              <h5 className="m-0 text-dark">SHOP</h5>
            </Col>
            <Col
              lg={18}
              sm={24}
              xs={24}
              className="d-flex justify-content-sm-start justify-content-lg-end"
            >
              <Link href="/">
                <p className="m-0 mx-1"> SHOP / </p>
              </Link>{" "}
              <Link href="/">
                <p className="m-0 mx-1"> WOMEN FASHION BAGS </p>
              </Link>
            </Col>
          </Row>
        </div>
      </StyledPage>
      <div className="col-11 mx-auto mb-5">
        <Row gutter={[32, 0]}>
          {/* <Col xs={0} sm={0} md={0} lg={6}>
            <ShopSidebar />
          </Col> */}

          <Col xs={24} sm={24} md={24} lg={24}>
            {categoryBanners.map((item) => {
              if (item.category == router.query.category) {
                return <img src={item.image} width="100%" className="mb-3" key={index} />;
              }
            })}

            <SortBar
              count={bagsProducts.length}
              className="my-5"
              setGridColumn={setGridColumn}
            />

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
  let products = bagsProducts.filter(
    (item) => item.category == context?.params?.category
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

const StyledPage = styled.div`
  .pagination-sec {
    background: #f8f8f8;
    padding: 30px 80px;
    p {
      color: #555555;
      font-weight: 600;
    }
    p:hover {
      cursor: pointer;
      color: #000;
    }
    span {
      color: #6c757d;
    }
  }
`;
