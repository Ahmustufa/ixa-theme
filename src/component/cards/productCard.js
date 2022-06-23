import Link from "next/link";
import styled from "styled-components";
import { ButtonWrapper } from "../buttons";
import { Row, Col } from "antd";
import { BsSuitHeart } from "react-icons/bs";

const ProductCard = (props) => {
  return (
    <StyledCard>
      <Link href="/product/123">
        <div
          className="product-image"
          style={{ backgroundImage: "url(/images/shop_card_image.jpg)" }}
        />
      </Link>

      <div className="item-details">
        <div className="company">QUISUITO</div>
        <div className="product">Black Lace Sleeve plete top</div>
        <div className="price">Rs. 1599</div>

        <div className="card-footer d-flex">
          <div
            className="hoverable dark"
            style={{ fontSize: 13, marginRight: 12, cursor: "pointer", fontWeight: 600 }}
          >
            ADD TO CART
          </div>
          <div
            style={{ fontSize: 13, marginLeft: 12, cursor: "pointer", fontWeight: 600 }}
            className="d-flex align-items-center"
          >
            <BsSuitHeart className="mr-1" />
            <div className="text hoverable dark">ADD TO WISHLIST</div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default ProductCard;

const StyledCard = styled.div`
  margin: 0 24px;
  .product-image {
    background-size: cover;
    background-position: center;
    height: 500px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
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
    font-size: 20px;
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

  .card-footer {
    border: none;
    background-color: #fff;
    transition: 0.6s;
    position: absolute;
    bottom: -100%;
    // left: 0;
  }

  :hover .card-footer {
    bottom: -6px;
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
