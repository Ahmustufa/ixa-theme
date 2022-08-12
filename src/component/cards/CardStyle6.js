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

const CardStyle6 = (props) => {
  const { images, title, price } = props;
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
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
      </Link>
      <div className="cart-actions">
        <div className="add_to_cart" style={{ opacity: 1 }}>
          <AiOutlineShoppingCart size={20} title={"Add to cart"} />
        </div>
        <div className="add_to_wishlist">
          <AiOutlineHeart size={20} title={"Add to wishlist"} />
        </div>
        <div className="quick_view">
          <AiOutlineSearch size={20} title={"Quick view"} />
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
            {price * 1.5}
          </small>
        </div>
      </div>
    </StyledCard>
  );
};

export default CardStyle6;

const StyledCard = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  margin-bottom: 30px;
  margin-left: 12px;
  margin-right: 12px;

  .image-container {
    border: 1px solid #f2f2f2;
    background-color: #fff;
    border-bottom: none;
    border-radius: 4px;
    text-align: center;
    width: 100%;
    padding-top: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 320px;
  }

  .cart-actions {
    .add_to_cart,
    .add_to_wishlist,
    .quick_view,
    .compare {
      color: #333;
      align-items: center;
      justify-content: center;
      transform: translateY(0px);
      transition: all 0.3s ease;
      cursor: pointer;
      :hover {
        color: #f5513c;
      }
    }
  }

  .cart-actions {
    opacity: 0;
    display: flex;
    justify-content: space-between;
    position: absolute;
    border-radius: 30px;
    background-color: #fff;
    padding: 10px;
    -webkit-transition: all 0.5s ease;
    box-shadow: 0px 0px 5px 0px #929292;
    transition: all 0.5s ease;
    width: 50%;
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
    bottom: 30%;
  }

  .item-details {
    overflow: hidden;
    position: relative;
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
