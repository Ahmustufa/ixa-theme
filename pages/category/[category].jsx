import { Row, Col } from "antd";
import axios from "axios";
import ProductCard from "../../src/component/cards/productCard";

const ProductListings = (props) => {
  const { productList } = props;
  return (
    <div style={{ padding: 80 }}>
      <Row justify="space-between">
        {productList.map((item, index) => (
          <Col key={index} xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductListings;

export async function getServerSideProps(context) {
  const uri = `http://64.227.31.159:1337/categories/type/${context.params.category}`;
  try {
    const { data } = await axios.get(uri);
    return {
      props: { productList: data.products },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
