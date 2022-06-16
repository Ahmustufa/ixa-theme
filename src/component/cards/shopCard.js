import styled from "styled-components";
import { ButtonWrapper } from "../buttons";

const ShopCard = (props) => {
  return (
    <StyledCard>
      <div className="title">Back in Black</div>
      <div className="description">
        Sharp, chic and glamorous—own the room in the power pairing that's always in
        style.
      </div>
      <ButtonWrapper>SHOP NOW</ButtonWrapper>
    </StyledCard>
  );
};

export default ShopCard;

const StyledCard = styled.div`
  background-size: cover;
  backgorund-position: center;
`;
