import Link from "next/link";
import styled from "styled-components";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import moment from "moment";
import { image1 } from "../../../images";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineSync,
} from "react-icons/ai";
import { Rate } from "antd";

const CardStyle7 = (props) => {
  const { image, title, price } = props;
  const dispatch = useDispatch();

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "PKR",
  });

  return (
    <StyledCard>
      {/* <img src={image} width="100%" /> */}
      <Link href={`/product}`}>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </Link>
      <div className="cart-actions">
        <div className="add_to_wishlist">
          <AiOutlineHeart size={20} title={"Add to wishlist"} />
        </div>
        <div className="add_to_cart" style={{ opacity: 1 }}>
          Add to cart
        </div>

        <div className="compare">
          <AiOutlineSync size={20} title={"Compare"} />
        </div>
      </div>
      <div className="item-details">
        <Rate defaultValue={4} disabled style={{ color: "#ffa200", fontSize: 13 }} />
        <div className="product mt-2">{title}</div>

        <div className="price">
          {formatedPrice.format(price)}{" "}
          <small style={{ color: "#858585", textDecoration: "line-through" }}>
            PKR {price + 100}
          </small>
        </div>
      </div>
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
    border: 1px solid #f2f2f2;
    background-color: #fff;
    border-bottom: none;
    border-radius: 4px;
    text-align: center;
    width: 100%;
    padding-top: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
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
    bottom: 100px;
  }

  .item-details {
    overflow: hidden;
    position: relative;
    text-align: center;
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
