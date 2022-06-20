import styled from "styled-components";
import { Row, Col, Rate, Divider } from "antd";
import { PrimaryButton } from "../buttons";
import ReviewForm from "./reviewForm";
import { useRef, useState } from "react";

const ReviewListing = (props) => {
  const [reviewVisible, toggleReview] = useState(false);
  const reviewRef = useRef();

  const showReview = () => {
    reviewRef.current.classList.toggle("visible");
  };
  return (
    <StyledContainer>
      <Rate disabled defaultValue={5} style={{ color: "#FF3E48", fontSize: 13 }} />{" "}
      <label>5/5</label>
      <div className="review">
        Compellingly grow performance based mindshare through parallel potentialities.
        Rapidiously underwhelm top-line catalysts for change before best-of-breed
        materials. Competently brand timely catalysts for change through sustainable
        systems
      </div>
      <Divider style={{ margin: "8px 0" }} />
      <Rate disabled defaultValue={5} style={{ color: "#FF3E48", fontSize: 13 }} /> 5/5
      <div className="review">
        Compellingly grow performance based mindshare through parallel potentialities.
        Rapidiously underwhelm top-line catalysts for change before best-of-breed
        materials. Competently brand timely catalysts for change through sustainable
        systems
      </div>
      <PrimaryButton className="mt-5 mb-3" onClick={showReview}>
        Add review
      </PrimaryButton>
      <div ref={reviewRef} className={`review-container`}>
        <ReviewForm />
      </div>
    </StyledContainer>
  );
};

export default ReviewListing;

const StyledContainer = styled.div`
  .ant-rate-star {
    margin-right: 4px;
  }

  .review {
    font-weight: 300;
  }

  .review-container {
    width: 100%;
    height: 0;
    transition: 0.5s;
    overflow: hidden;

    &.visible {
      height: 550px;
    }
  }
`;
