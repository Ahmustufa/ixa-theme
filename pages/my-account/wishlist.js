import { Row, Col, message } from "antd";
import styled from "styled-components";
import AccountSidebar from "../../src/component/sidebar/accountSidebar";
import { Queries, useFetch, errorHandler } from "../../src/api/config";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const Wishlist = () => {
  const { items } = useSelector((state) => state.wishlist);
  const [myOrders, setMyOrders] = useState([]);
  const [getOrdersApi, getOrderLoading] = useFetch(Queries.getMyOrders);

  console.log("items", items);
  // useEffect(() => {
  //   if (typeof window != undefined) {
  //     getOrdersApi(userData._id)
  //       .then(({ data }) => {
  //         setMyOrders(data);
  //       })
  //       .catch((err) => message.error(errorHandler(err)));
  //   }
  // }, []);

  return (
    <StyledPage style={{ padding: 80 }}>
      <Row>
        <Col xs={0} sm={0} md={4} lg={4}>
          <AccountSidebar />
        </Col>

        <Col xs={24} sm={24} md={20} lg={20}>
          {/* <Row className="table-header" justify="space-around">
        <Col span={8}>Product</Col>
        <Col span={3}>Price</Col>
        <Col span={3}>Quantity</Col>
        <Col span={3}>Ordered date</Col>
        <Col span={3}>Subtotal</Col>
      </Row>

      {[1, 2, 3].map((item, index) => (
        <div className="table-row">
          <Row justify="space-around">
            <Col span={8}>
              <div className="d-flex">
                <img
                  src="/images/demo_image.jpg"
                  style={{ width: 100, marginRight: 12 }}
                />
                <div>
                  <p>Black Lace Trim Tee - M</p>
                </div>
              </div>
            </Col>
            <Col span={3}>Rs. 1000</Col>
            <Col span={3}>2</Col>
            <Col span={3}>31 Feb 2023</Col>
            <Col span={3}>2000</Col>
          </Row>
        </div>
      ))} */}

          <Row gutter={[24, 24]}>
            {items.map((item, index) => (
              <Col key={index} span={12}>
                <p>asdf</p>
                {/* <div className="box d-flex align-items-center">
                  <div>
                    <img
                      src={
                        process.env.REACT_APP_STRAPI_URL +
                        item.inventry.product.images[0].url
                      }
                      style={{ width: 180 }}
                    />
                  </div>

                  <div className="ml-3">
                    <div className="product-name">
                      {item.inventry.product.productName}
                    </div>

                    <div className="">
                      <div
                        className="d-flex mb-1"
                        style={{ color: "#54595f", fontSize: 14 }}
                      >
                        <div className="">Price: </div>
                        <div className="font-weight-light ml-2">
                          PKR {item.inventry.product?.price?.toLocaleString()}
                        </div>
                      </div>
                      <div
                        className="d-flex mb-1"
                        style={{ color: "#54595f", fontSize: 14 }}
                      >
                        <div className="">Quantity: </div>
                        <div className="font-weight-light ml-2">{item.quantity}</div>
                      </div>
                      <div
                        className="d-flex mb-1"
                        style={{ color: "#54595f", fontSize: 14 }}
                      >
                        <div className="">Size: </div>
                        <div className="font-weight-light ml-2">{item.size}</div>
                      </div>
                      <div
                        className="d-flex mb-1"
                        style={{ color: "#54595f", fontSize: 14 }}
                      >
                        <div className="">Color: </div>
                        <div className="font-weight-light ml-2">{item.color}</div>
                      </div>
                      <div
                        className="d-flex mb-1"
                        style={{ color: "#54595f", fontSize: 14 }}
                      >
                        <div className="">Ordered date: </div>
                        <div className="font-weight-light ml-2">
                          {moment(item.createdAt).format("ddd DD/MM/YYYY")}
                        </div>
                      </div>
                      <div
                        className="d-flex mb-1"
                        style={{ color: "#54595f", fontSize: 14 }}
                      >
                        <div className="">Subtotal: </div>
                        <div className="font-weight-light ml-2">
                          PKR {(item.product?.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </StyledPage>
  );
};

export default Wishlist;

const StyledPage = styled.div`
  .table-header {
    background-color: #ececec;
    padding: 12px 0;
  }

  .table-row {
    border-bottom: 1px solid #e5e5e5;
    padding: 16px 0;

    :last-child {
      border: none;
    }
  }

  .box {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 12px;
    border: 1px solid #ececec;
  }

  .product-name {
    color: #0c0c0c;
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;

// export async function getServerSideProps(context) {
//   try {
//     var { data } = await axios.get(
//       `http://64.227.31.159:1337/orders/userId/${userId}`
//     );
//     return {
//       props: { data },
//     };
//   } catch (err) {
//     return {
//       notFound: true,
//     };
//   }
// }
