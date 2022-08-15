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
  const { images, title, price, brandName } = props;
  const dispatch = useDispatch();

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "PKR",
  });

  return (
    <StyledCard images={images}>
      {/* <img src={image} width="100%" /> */}
      <Link href={`/product}`}>
        <div
          className="image-container"
          // style={{ backgroundImage: `url(${images[0]})` }}
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
        <Rate
          defaultValue={5}
          disabled
          style={{ color: "#ffa200", fontSize: 14, marginTop: 8 }}
        />
        <div title={title} className="product mt-2">
          {title}
        </div>

        <div style={{ fontSize: 12, color: "brown" }}>({brandName})</div>

        <div className="price">
          {formatedPrice.format(price)}{" "}
          {/* <small style={{ color: "#858585", textDecoration: "line-through" }}>
            {price * 1.5}
          </small> */}
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
    padding-top: 130%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.images[0]});
    transition: 0.2s ease;
    /* min-height: 320px; */

    &:hover {
      background-image: url(${(props) => props.images[1]});
    }
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
    justify-content: space-evenly;
    position: absolute;
    border-radius: 30px;
    background-color: #fff;
    padding: 10px 4% 10px 4%;
    -webkit-transition: all 0.5s ease;
    box-shadow: 0px 0px 5px 0px #929292;
    transition: all 0.5s ease;
    min-width: 100px;
    max-width: 200px;
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
    bottom: 150px;
  }
  :hover .image-container {
    background-image: url(${(props) => props.images[1]});
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
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 400;
    color: #000;
    &:hover {
      cursor: pointer;
    }
  }

  .price {
    font-size: 14px;
    font-weight: 500;
    color: #696969;
    margin-top: 10px;
  }
`;
