import styled from "styled-components";
import { Button } from "antd";

export const ButtonWrapper = styled.div`
  cursor: pointer;
  color: ${(props) => props.color ?? "#fff"};
  background-color: ${(props) => props.backgroundColor ?? "#0c0c0c"};
  border: ${(props) => props.border ?? "1px solid #0c0c0c"};
  border-radius: ${(props) => props.borderRadius ?? "60px"};
  width: ${(props) => props.width ?? "100%"};
  padding: 12px 36px;
  outline: none;
  box-shadow: none;
  font-weight: 400;
  font-size: 16px;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :after {
    content: "";
    width: 24px;
    height: 1px;
    background-color: #fff;
    transition: 0.3s;
  }

  :hover {
    padding-right: 40px;
    :after {
      width: 16px;
    }
  }
`;

export const PrimaryButton = styled.button`
  transition: all 0.4s ease 0s;
  padding: 8px 20px;
  color: #fff;
  border: 1px solid #212529;
  border-radius: 2px;
  font-size: 14px;
  outline: none;
  box-shadow: none;
  background-color: #212529;

  :hover {
    color: #212529;
    background-color: transparent;
  }
`;

const StyledSwipeButton = styled.button`
  height: 60px;
  line-height: 60px;
  padding: 0 48px;
  font-weight: 600;
  border: none;
  box-shadow: none;
  outline: none;
  border-radius: 2px;
  background-color: #fe8819;
  position: relative;
  overflow: hidden;

  .children {
    color: #fff;
    transition: ease 0.4s;
    position: relative;
    left: 0;
  }

  .after {
    color: #fff;
    height: 100%;
    width: 100%;
    background-color: #0025ff;
    position: absolute;
    left: 100%;
    visibility: hidden;
    transition: ease 0.4s;
    font-weight: 600;
    width: 110%;
    transform: skew(-10deg);
  }

  :hover {
    .after {
      visibility: visible;
      left: -10px;
    }

    .children {
      left: -120%;
    }
  }
`;

export const SwipeButton = (props) => {
  const { children, after } = props;
  return (
    <StyledSwipeButton {...props}>
      <span className="children">{children}</span>
      <span className="after">{after}</span>
    </StyledSwipeButton>
  );
};
