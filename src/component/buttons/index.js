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

export const SignupButtonWrapper = styled.button`
  margin: 0;
  color: ${(props) => props.color ?? "#fff"};
  background-color: ${(props) => props.backgroundColor ?? "#0025FF"};
  border: ${(props) => props.border ?? "2px solid #0025FF"};
  border-radius: 100px;
  padding: 6px 12px;
  width: ${(props) => props.width ?? "200px"};
  outline: none;
  box-shadow: none;
  font-weight: 400;
  font-size: 14px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &.ant-btn[disabled],
  &.ant-btn[disabled]:hover,
  &.ant-btn[disabled]:focus,
  &.ant-btn[disabled]:active {
    background: #acacac;
    color: #21262c;
  }

  &:focus {
    color: ${(props) => props.color ?? "#fff"};
    background-color: ${(props) => props.backgroundColor ?? "#0025FF"};
    border: ${(props) => props.border ?? "2px solid #0025FF"};
  }

  &:hover {
    opacity: 0.8;
    background-color: ${(props) => props.hoverBackgroundColor ?? "#fff"};
    border: ${(props) => props.border ?? "2px solid #0025FF"};
    color: ${(props) => props.hoverColor ?? "#0025FF"};
    color: ${(props) => (props.hoverColor != "#f4f4f4" ? "#0025FF" : "#21262C")};
    // font-weight: ${(props) => props.fontWeight ?? "500"};
  }

  &[disabled] {
    color: #fff;
    border: 2px solid dimgray;
    cursor: not-allowed !important;
    background-color: dimgray;
    opacity: 0.4;
    &:hover {
      color: #fff;
      background-color: dimgray;
      opacity: 0.4;
    }
  }
`;

export const InsideSignupButton = styled.button`
  height: 25px;
  width: 25px;
  border-radius: 100px;
  border: 0px;
  background-color: #fff;
  position: relative;
  right: 32px;
  outline: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  color: #0025ff;
`;

export const HeaderLink = styled.a`
  background-color: transparent;
  transition: all 0.4s ease 0s;
  padding: 10px 16px;
  font-size: 12px;
  color: #fff;
  border: none;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  outline: none;
  box-shadow: none;
  text-decoration: none;

  :hover {
    background-color: #ffa930;
    color: #fff;
    svg {
      color: #fff;
    }
  }

  svg {
    transition: all 0.4s ease 0s;
    margin-right: 6px;
    color: #acacac;
  }
`;

export const PrimaryButton = styled.button`
  transition: all 0.4s ease 0s;
  padding: 8px 20px;
  color: ${({ color }) => (color != undefined ? color : "#fff")};
  border: 1px solid ${({ bgColor }) => (bgColor != undefined ? bgColor : "#D33F49")};
  border-radius: 2px;
  font-size: 13px;
  outline: none;
  box-shadow: none;
  background-color: ${({ bgColor }) => (bgColor != undefined ? bgColor : "#D33F49")};

  :hover {
    border-color: ${({ color }) => (color == "#fff" ? `#050607` : "#fff")};
    color: ${({ color }) => (color == "#fff" ? `#050607` : "#fff")};
    background-color: transparent;
  }
`;
// export const TabButton = styled.button``;

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
