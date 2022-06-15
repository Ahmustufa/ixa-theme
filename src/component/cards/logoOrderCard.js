import { useState } from "react";
import styled, { css } from "styled-components";
import { HexColorPicker } from "react-colorful";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { InputWrapper } from "../inputs";
import { Badge } from "antd";

const StyledSection = styled.section`
  * {
    user-select: none;
  }
  text-align: center;
  opacity: ${(props) => (props.isSelected ? "0.7" : "1")};
  border: ${(props) => (props.isSelected ? "1px solid #0025FF" : "1px solid #e5e5e5")};
  border-radius: 2px;
  height: 375px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    border: 1px solid #0025ff;
  }

  .order-image-banner {
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#fff"};

    .order-image {
      top: 32px;
      position: relative;
      width: calc(100% - 64px);
      margin: 0 auto;
    }
    .order-image img {
      object-fit: contain;
      width: -webkit-fill-available;
      width: -moz-available;
      margin: 0;
    }
  }

  .card-title {
    margin-top: 48px;
    font-weight: 600;
  }
  .card-description {
    font-size: 14px;
    font-weight: 600;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
    `}
`;

const LogoOrderCard = (props) => {
  const { disabled, selected } = props;
  // const [selected, setSelected] = useState(false);
  console.log("---> selected", selected);
  // const handleSelect = () => {
  //   disabled ? null : setSelected(!selected);
  // };

  const badgeStyle = {
    zIndex: 1,
    fontSize: 16,
    padding: 16,
    lineHeight: 0,
    opacity: 1,
    fontWeight: 700,
    color: "#fff",
    userSelect: "none",
  };
  return (
    <>
      {selected && (
        <Badge.Ribbon text="Selected" color="#05aa1c" style={badgeStyle} size="large" />
      )}
      <StyledSection
        disabled={disabled}
        // onClick={handleSelect}
        isSelected={selected}
        backgroundColor={props.backgroundColor}
      >
        <div className="order-image-banner">
          <div className="order-image">
            <img src={props.image} alt="my_order-image" />
          </div>
        </div>

        <h5 className="card-title">{props.heading}</h5>

        <p className="card-description px-4">{props.para}</p>
      </StyledSection>
    </>
  );
};

export default LogoOrderCard;
