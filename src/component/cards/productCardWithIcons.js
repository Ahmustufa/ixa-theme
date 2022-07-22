import Link from "next/link";
import styled from "styled-components";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineSync,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeWishlistItem } from "../../redux/actions";
import { cardBackground1 } from "../../../images";
import { Slide } from "react-awesome-reveal";

const ProductCardWithIcons = (props) => {
  const { _id, title, brandName, price, images } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "PKR",
  });

  return (
    <StyledCard>
      <Link href={`/product/${_id}`}>
        <div className="product-image" style={{ backgroundImage: `url(${images[0]})` }}>
          <div className="new_item_tag rounded-circle m-2 d-flex justify-content-center align-items-center">
            <p>NEW</p>
          </div>
          <div className="d-flex flex-column icon-section">
            <div className="add_to_cart">
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
        </div>
      </Link>

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
  margin: 0 24px;
  .product-image {
    background-size: cover;
    background-position: center;
    height: 500px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    z-index: 999;
    overflow: hidden;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1), -2px -2px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #ececec;
  }

  .icon-section {
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .icon-section .add_to_cart {
    position: absolute;
    padding-right: 10px;
    top: 70%;
    right: -75%;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    transition: all 0.2s;
  }
  .icon-section .add_to_wishlist {
    position: absolute;
    padding-right: 10px;
    top: 77%;
    right: -75%;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -ms-transition: all 0.4s;
    transition: all 0.4s;
  }

  .icon-section .quick_view {
    position: absolute;
    padding-right: 10px;
    top: 83%;
    right: -75%;
    -webkit-transition: all 0.6s;
    -moz-transition: all 0.6s;
    -ms-transition: all 0.6s;
    transition: all 0.6s;
  }

  .icon-section .compare {
    position: absolute;
    padding-right: 10px;
    top: 89%;
    right: -75%;
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    -ms-transition: all 0.8s;
    transition: all 0.8s;
  }
  .add_to_cart:hover {
    color: #f54c3b;
  }
  .add_to_wishlist:hover {
    color: #f54c3b;
  }
  .quick_view:hover {
    color: #f54c3b;
  }
  .compare:hover {
    color: #f54c3b;
  }
  .product-image:hover div {
    right: 0px;
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

  .new_item_tag {
    width: 40px;
    height: 40px;
    background: #f54c3b;
    p {
      font-size: 10px;
      margin-bottom: 0;
      color: #fff;
    }
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
