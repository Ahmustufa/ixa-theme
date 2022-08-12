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

const CardStyle5 = (props) => {
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
      <div className="product-detail">
        <h6>{title}</h6>

        <h4>
          {formatedPrice.format(price)}{" "}
          <small style={{ color: "#858585", textDecoration: "line-through" }}>
            PKR {price + 100}
          </small>
        </h4>
      </div>
    </StyledCard>
  );
};

export default CardStyle5;

const StyledCard = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  margin-bottom: 30px;
  :hover .cart-actions .add_to_wishlist {
    transform: translateY(4px);
    opacity: 1;
    transition: all 0.5s ease;
  }
  :hover .cart-actions .quick_view {
    transform: translateY(6px);
    opacity: 1;
    transition: all 0.8s ease;
  }
  :hover .cart-actions .compare {
    transform: translateY(8px);
    opacity: 1;
    transition: all 1s ease;
  }

  .image-container {
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    text-align: center;
    width: 100%;
    padding-top: 120%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.5s ease;
    transform: scale(1);
    :hover {
      transform: scale(1.2) rotate(2deg);
      transition: all 0.4s ease;
    }
  }

  .cart-actions {
    top: 7px;
    right: 7px;
    opacity: 1;
    position: absolute;
    bottom: 40px;
    text-align: center;
    margin: 0 auto;
    display: inline-block;
    justify-content: center;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    .add_to_cart,
    .add_to_wishlist,
    .quick_view,
    .compare {
      border-radius: 100%;
      border: 1px solid #fff;
      margin: 5px 0;
      background-color: hsla(0, 0%, 100%, 0.8);
      padding: 7px;
      color: #333;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(0px);
      transition: all 0.1s ease;
      box-shadow: 0px 0px 5px 0px #929292;
      :hover {
        color: #f5513c;
      }
    }
  }

  .product-detail {
    opacity: 0;
    position: absolute;
    background-color: #fff;
    padding: 10px;
    -webkit-transition: all 0.5s ease;
    box-shadow: 0px 0px 5px 0px #929292;
    transition: all 0.5s ease;
    width: 65%;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -10px;
    text-align: center;
    h6 {
      color: #525252;
      font-size: 16px;
    }
    h4 {
      font-size: 18px;
      font-weight: 400;
      color: #000;
      margin-bottom: 0;
    }
  }
  :hover .product-detail {
    opacity: 1;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    bottom: 15px;
  }
`;
