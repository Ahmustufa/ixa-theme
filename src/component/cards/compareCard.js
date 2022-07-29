import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { ButtonWrapper, SwipeButton, VictoriaButton } from "../buttons";

const CompareCard = (props) => {
  return (
    <StyledCard>
      <div className="close-btn">
        <AiOutlineClose size={20} />
      </div>
      <div className="img-section">
        <img
          className="img-fluid"
          src="https://multikart-react.vercel.app/assets/images/pro3/1.jpg"
        />
        <Link href={"#"}>
          <h5>Slim fit shirt</h5>
        </Link>
        <h5>$555</h5>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>discription</h5>
        </div>
        <div className="inner-detail">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>brand name</h5>
        </div>
        <div className="inner-detail">
          <p>Zara</p>
        </div>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>size</h5>
        </div>
        <div className="inner-detail">
          <p>S, XS</p>
        </div>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>color</h5>
        </div>
        <div className="inner-detail">
          <p>Blue, Pink</p>
        </div>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>material</h5>
        </div>
        <div className="inner-detail">
          <p>Cotton</p>
        </div>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>availability</h5>
        </div>
        <div className="inner-detail">
          <p>In stock</p>
        </div>
      </div>
      <div className="btn-part">
        <VictoriaButton text={"ADD TO CART"} />
      </div>
    </StyledCard>
  );
};

export default CompareCard;

const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-right: none;
  position: relative;
  .close-btn {
    background-color: transparent;
    border: none;
    font-size: 25px;
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
  }
  .img-section {
    padding: 0 15px 15px;
    img {
      width: 50%;
      margin: 0 auto;
      padding-top: 25px;
    }
    h5 {
      margin-bottom: 0;
      text-transform: capitalize;
      margin-top: 10px;
      font-size: 16px;
    }
  }

  .detail-part .title-detail {
    background-color: #f7f8fa;
    text-align: center;
    padding: 8px 0;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    h5 {
      margin-bottom: 0;
      text-transform: uppercase;
      font-weight: 400;
      line-height: 24px;
      font-size: 16px;
      color: #222;
      letter-spacing: 0.05em;
    }
  }
  .detail-part .inner-detail {
    padding: 15px;
    p {
      margin-bottom: 0;
      line-height: 1.2;
      letter-spacing: 0.05em;
      font-size: 14px;
      color: #777;
    }
  }
  .btn-part {
    text-align: center;
    padding: 15px;
    border-top: 1px solid #ddd;
  }
`;
