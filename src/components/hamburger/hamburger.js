import React from "react";
import styled from "@emotion/styled";
import { theme } from "styles";

const { colors } = theme;

const HamburgerButton = styled.button`
  display: none;

  @media screen and (max-width: 720px) {
    position: fixed;
    z-index: 1500;
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

    div {
      position: relative;
      width: 44px;
      height: 3px;
      background-color: ${colors.brightYellow};
      transform-origin: 6px;
      transition: all 350ms ease;

      &:first-of-type {
        transform: rotate(${({ open }) => (open ? "45deg" : "0")});
      }

      &:nth-of-type(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
      }

      &:nth-of-type(3) {
        transform: rotate(${({ open }) => (open ? "-45deg" : "0")});
      }
    }
  }

  @media screen and (max-width: 600px) {
    right: 0px;
  }
`;

const Hamburger = ({ open, onClick, ...props }) => {
  return (
    <HamburgerButton onClick={onClick} open={open} {...props}>
      <div />
      <div />
      <div />
    </HamburgerButton>
  );
};

export default Hamburger;
