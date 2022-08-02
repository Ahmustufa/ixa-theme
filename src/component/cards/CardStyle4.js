import Link from "next/link";
import styled from "styled-components";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { Rate } from "antd";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineSync,
} from "react-icons/ai";

const CardStyle4 = (props) => {
  const { _id, title, brandName, price, image } = props;

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "PKR",
  });

  return (
    <StyledCard>
      <Link href={`/product/${_id}`}>
        <div className="image-container" style={{ backgroundImage: `url(${image})` }}>
          {/* <img src={images[0]} alt={title} className="img-fluid product-image" /> */}
        </div>
      </Link>
      {/* <div className="new-item">NEW</div> */}

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
        <div className="product mt-2">{title}</div>
        {/* <div className="company mt-2">{brandName}</div> */}
        <Rate defaultValue={4} disabled style={{ color: "#ffa200", fontSize: 13 }} />

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

CardStyle4.defaultProps = {
  brandName: "Spotlight on Style",
};

export default CardStyle4;

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;

  .image-container {
    border: 1px solid #f2f2f2;
    border-bottom: none;
    border-radius: 4px;
    text-align: center;
    width: 100%;
    padding-top: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .product-image {
    border-radius: 4px;
    cursor: pointer;
    // height: 300px;
    object-fit: contain;
    padding: 18px;
  }

  .icon-section {
    position: relative;
    z-index: 100;
    bottom: 10px;
    left: 8px;
  }

  .icon {
    position: absolute;
    // left: 8px;
    bottom: -180px;
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

  :hover .icon-1 {
    bottom: 8px;
    transition-delay: 0.1s;
  }
  :hover .icon-2 {
    bottom: 8px;
    transition-delay: 0.2s;
  }
  :hover .icon-3 {
    bottom: 8px;
    transition-delay: 0.3s;
  }
  :hover .icon-4 {
    bottom: 8px;
    transition-delay: 0.4s;
  }

  .icon-1 {
    left: 20%;
    transition-delay: 0.1s;
  }
  .icon-2 {
    left: 35%;
    transition-delay: 0.2s;
  }
  .icon-3 {
    left: 50%;
    transition-delay: 0.3s;
  }
  .icon-4 {
    left: 65%;
    transition-delay: 0.4s;
  }

  .item-details {
    overflow: hidden;
    position: relative;
    background: #fff;
    z-index: 999;
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
    }
  }

  @media only screen and (max-width: 576px) {
    margin: 0 12px;
  }
`;
