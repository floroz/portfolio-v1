import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

const { colors } = theme;

const HamburgerButton = styled.button`
  display: none;

  @media screen and (max-width: 720px) {
    display: block;
    outline: none;
    border: none;
    height: 70px;
    width: 70px;
    padding: 1rem;
    margin-right: 2rem;
    background-color: transparent;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }
`;

const HamburgerLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${colors.brightYellow};
`;

const hamburger = ({ onClick, ...props }) => {
  return (
    <HamburgerButton onClick={onClick} {...props}>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerButton>
  );
};

export default hamburger;
