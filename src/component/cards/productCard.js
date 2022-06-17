import styled from "styled-components";
import { ButtonWrapper } from "../buttons";

const ProductCard = (props) => {
  return (
    <StyledCard>
      <div
        className="product-image"
        style={{ backgroundImage: "url(/images/shop_card_image.jpg)" }}
      />
      <div className="item-details">
        <div className="company">QUISUITO</div>
        <div className="product">Black Lace Sleeve plete top</div>
        <div className="price">Rs. 1599</div>
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
  }

  .item-details {
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

  @media only screen and (max-width: 1200px) {
    .item-details {
      left: 96%;
    }
  }
`;
