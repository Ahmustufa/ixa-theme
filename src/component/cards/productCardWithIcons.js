import Link from "next/link";
import styled from "styled-components";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineSync,
} from "react-icons/ai";
import { useEffect, useRef } from "react";
const ProductCardWithIcons = (props) => {
  const { _id, title, brandName, price, images } = props;
  const cardRef = useRef();

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "PKR",
  });

  // console.log("REf", cardRef);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (cardRef.current.childrenNodes) {
        const height = Math.ceil(cardRef.current.clientHeight / 100) * 100;
        console.log("Height", height);
        cardRef.current.childrenNodes[0].style.height = height;
      }
    }
  });

  return (
    <StyledCard ref={cardRef} height={Math.ceil(354 / 100) * 100}>
      {/* <Link href={`/product/${_id}`}>
      </Link> */}
      <div className="image-container">
        <img src={images[0]} alt={title} className="img-fluid product-image" />
      </div>

      <div className="new-item">NEW</div>

      <div className="icon-section">
        <div className="icon icon-1">
          <AiOutlineShoppingCart size={20} title={"Add to cart"} />
        </div>
        <div className="icon icon-2">
          <AiOutlineHeart size={20} title={"Add to wishlist"} />
        </div>
        <div className="icon icon-3">
          <AiOutlineSearch size={20} title={"Quick view"} />
        </div>
        <div className="icon icon-4">
          <AiOutlineSync size={20} title={"Compare"} />
        </div>
      </div>

      <div className="item-details">
        <div className="company">{brandName}</div>
        <div className="product">{title}</div>
        <div className="price">{formatedPrice.format(price)}</div>
      </div>
    </StyledCard>
  );
};

export default ProductCardWithIcons;

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;

  .image-container {
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    text-align: center;
  }

  .product-image {
    border-radius: 4px;
    cursor: pointer;
    // height: 400px;
    object-fit: contain;
    padding: 18px;
  }

  .icon-section {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 8px;
  }

  .icon {
    position: absolute;
    left: -48px;
    cursor: pointer;
    background-color: #fde4e4;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #f2f2f2;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.09);
    transition: all 0.6s;
    :hover {
      background-color: #ff0000a8;
      color: #fff;
    }
  }

  .icon-1 {
    top: 8px;
    transition-delay: 0.1s;
  }
  .icon-2 {
    top: 48px;
    transition-delay: 0.2s;
  }
  .icon-3 {
    top: 88px;
    transition-delay: 0.3s;
  }
  .icon-4 {
    top: 128px;
    transition-delay: 0.4s;
  }

  :hover {
    .icon-1,
    .icon-2,
    .icon-3,
    .icon-4 {
      left: 0px;
    }
  }

  .item-details {
    overflow: hidden;
    psotion: relative;
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

  .new-item {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f54c3b;
    color: #fff;
    line-height: 36px;
    text-align: center;
    font-size: 10px;
  }

  @media only screen and (max-width: 1200px) {
    .item-details {
      left: 96%;
    }
  }

  @media only screen and (max-width: 576px) {
    margin: 0 12px;
  }
`;
