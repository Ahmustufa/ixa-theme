import Link from "next/link";
import styled from "styled-components";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { image1 } from "../../../images";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { Rate, Row, Col } from "antd";
import {
  addItemToCompareList,
  addItemToWishlist,
  removeWishlistItem,
} from "src/redux/actions";
import { addItemToCart } from "src/redux/actions/cartActions";

const CardStyle7 = (props) => {
  const { productDetails, _id, images, title, price, listView } = props;
  const dispatch = useDispatch();

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "PKR",
  });

  const { items: wishlist } = useSelector((state) => state.wishlist);
  let wishlistItem = wishlist?.map((item) => item._id);
  return (
    <StyledCard images={images}>
      <Row justify="space-between">
        <Col
          xs={24}
          sm={24}
          md={listView ? 8 : 24}
          lg={listView ? 6 : 24}
          xl={listView ? 4 : 24}
        >
          <Link href={`/product/${_id}`}>
            <div className="image-container"></div>
          </Link>
          <div className="cart-actions">
            <div className="add_to_wishlist">
              {wishlistItem.includes(_id) ? (
                <div
                  className="wish-button"
                  onClick={() => {
                    dispatch(removeWishlistItem(productDetails));
                  }}
                >
                  <BsSuitHeartFill className="icon" title="Remove from wishlist" />
                </div>
              ) : (
                <div
                  className="wish-button"
                  onClick={() => {
                    dispatch(addItemToWishlist(productDetails));
                  }}
                >
                  <BsSuitHeart className="icon" title="Add to wishlist" />
                </div>
              )}
            </div>
            <div
              className="add_to_cart"
              onClick={() => {
                dispatch(addItemToCart(productDetails));
              }}
              style={{ opacity: 1 }}
            >
              Add to cart
            </div>

            <div
              className="compare"
              onClick={() => {
                dispatch(addItemToCompareList(productDetails));
              }}
            >
              <AiOutlineEye size={20} title={"Quick View"} />
            </div>
          </div>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={listView ? 15 : 24}
          lg={listView ? 17 : 24}
          xl={listView ? 19 : 24}
        >
          <div
            className="item-details"
            style={{ textAlign: listView ? "left" : "center" }}
          >
            <Rate defaultValue={4} disabled style={{ color: "#ffa200", fontSize: 13 }} />
            <div className="product mt-2" title={title}>
              {title.length > 40 ? `${title.slice(0, 30)}...` : title}
            </div>

            <div className="price">
              {formatedPrice.format(price)}{" "}
              <small style={{ color: "#858585", textDecoration: "line-through" }}>
                PKR {price + 100}
              </small>
            </div>
            {listView ? (
              <div className="description">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters,It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters.
              </div>
            ) : null}
          </div>
        </Col>
      </Row>
    </StyledCard>
  );
};

export default CardStyle7;

const StyledCard = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  margin-bottom: 30px;

  .image-container {
    /* border: 1px solid #f2f2f2; */
    background-color: #fff;
    border-bottom: none;
    border-radius: 4px;
    text-align: center;
    width: 100%;
    padding-top: 132%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.images[0]});
    transition: 0.2s ease;
    /* min-height: 320px; */

    &:hover {
      background-image: url(${(props) =>
        props.images.length > 1 ? props.images[1] : props.images[0]});
    }
  }

  .cart-actions {
    .add_to_wishlist,
    .compare {
      color: #333;
      align-items: center;
      display: flex;
      justify-content: center;
      background-color: #dddddd;
      padding: 8px;
      transform: translateY(0px);
      transition: all 0.3s ease;
      border-radius: 6px;
      cursor: pointer;
      :hover {
        background-color: #f54c3b;
        color: white;
        transition: all 0.3s ease;
      }
    }
    .add_to_cart {
      background-color: #dddddd;
      padding: 8px 12px;
      border-radius: 6px;
      width: 185px;
      cursor: pointer;
      :hover {
        background-color: #f54c3b;
        color: white;
        transition: all 0.3s ease;
      }
    }
  }

  .cart-actions {
    opacity: 0;
    display: flex;
    justify-content: space-between;
    position: absolute;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    width: 80%;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -5px;
    text-align: center;
  }
  :hover .cart-actions {
    opacity: 1;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    bottom: 30px;
  }
  :hover .image-container {
    background-image: url(${(props) => props.images[1]});
  }

  .item-details {
    overflow: hidden;
    position: relative;
    /* text-align: center; */
    background: #fff;
    // z-index: 999;
  }

  .company {
    font-size: 14px;
    color: #abb8c3;
    font-weight: 600;
  }

  .product {
    font-size: 18px;
    font-weight: 400;
    color: #000;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
    color: #54595f;
  }
`;
