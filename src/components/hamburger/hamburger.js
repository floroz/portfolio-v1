import React from "react";
import styled from "@emotion/styled";
import { theme } from "~styles";

const { colors } = theme;

const HamburgerButton = styled.button`
  display: none;

  @media screen and (max-width: 720px) {
    position: fixed;
    z-index: 999;
    top: 20px;
    right: 20px;
    outline: none;
    border: none;
    height: 60px;
    padding: 1rem;
    background-color: transparent;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    right: 10px;
  }
`;

const HamburgerLine = styled.div`
  width: 44px;
  height: 3px;
  background-color: ${colors.brightYellow};
`;

const hamburger = ({ onClick, ...props }) => {
  return (
    <HamburgerButton
      onClick={onClick}
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay="200"
      {...props}
    >
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerButton>
  );
};

export default hamburger;
