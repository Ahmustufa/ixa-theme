import styled from "styled-components";
import { ButtonWrapper } from "../buttons";

const ShopCard = (props) => {
  return (
    <StyledCard>
      <div className="item-details">
        <div className="title">Back in Black</div>
        <div className="description">
          Sharp, chic and glamorous—own the room in the power pairing that's always in
          style.
        </div>
        <ButtonWrapper style={{ width: 200 }}>SHOP NOW</ButtonWrapper>
      </div>
    </StyledCard>
  );
};

export default ShopCard;

const StyledCard = styled.div`
  background-image: url(/images/shop_card_image.jpg);
  background-size: cover;
  backgorund-position: center;
  height: 500px;
  width: 480px;
  position: relative;
  border-radius: 4px;

  .item-details {
    position: absolute;
    top: 100px;
    left: 80%;
    width: 300px;
  }

  .title {
    font-size: 48px;
    font-weight: 600;
    color: #54595f;
    line-height: 1;
  }

  .description {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3em;
    color: #54595f;
    margin: 40px 0;
  }

  @media only screen and (max-width: 1200px) {
    .item-details {
      left: 96%;
    }
  }
`;
