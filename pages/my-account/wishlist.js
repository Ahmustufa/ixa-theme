import { Row, Col, message } from "antd";
import styled from "styled-components";
import AccountSidebar from "../../src/component/sidebar/accountSidebar";
import { Queries, useFetch, errorHandler, Mutations } from "../../src/api/config";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { PrimaryButton } from "../../src/component/buttons";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { removeWishlistItem } from "../../src/redux/actions";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.wishlist);

  // --------------REMOVE FROM WISHLIST-------------
  const [removeFromWishlist, removeFromWishlistLoading] = useFetch(
    Mutations.removeFromWishlist
  );
  const removeItemFromWishlistFunc = async (productDetails) => {
    try {
      const { data } = await removeFromWishlist(productDetails._id);
      dispatch(removeWishlistItem(data));
      message.success("Remove from wishlist successfully");
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  return (
    <StyledPage style={{ padding: 80 }}>
      <Row>
        <Col xs={0} sm={0} md={4} lg={4}>
          <AccountSidebar />
        </Col>

        <Col xs={24} sm={24} md={20} lg={20}>
          {items.length == 0 ? (
            <Row className="mt-3">
              <Col style={{ background: "#f9fafb" }} span={24} className="p-4">
                <div className="d-flex justify-content-start align-items-center">
                  <AiOutlineShopping color={"#ced4da"} size={50} />
                  <p className="mb-0 ml-5 title" style={{ color: "#808080" }}>
                    Your wishlist is currently empty.
                  </p>
                </div>
              </Col>
              <Link href={"/"}>
                <PrimaryButton className="mt-5">RETURN TO SHOP</PrimaryButton>
              </Link>
            </Row>
          ) : (
            <Row gutter={[24, 24]}>
              {items.map((item, index) => (
                <Col key={index} xs={24} sm={24} lg={6}>
                  <div className="box">
                    <div>
                      <img
                        src={
                          process.env.REACT_APP_STRAPI_URL + item.product.images[0].url
                        }
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="item-details">
                      <div className="company">{item.product.productName}</div>
                      <div className="product">{item.product.productName}</div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="price">PKR {item.product.price}</div>
                        <div
                          title="Remove form wishlist"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            removeItemFromWishlistFunc(item);
                          }}
                        >
                          <BsSuitHeartFill className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
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

  .company {
    font-size: 14px;
    color: #abb8c3;
    font-weight: 600;
    margin-top: 20px;
  }

  .product {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3em;
    color: #000;
    margin: 12px 0;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
    color: #54595f;
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
