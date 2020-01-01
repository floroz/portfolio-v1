import React from "react";
import styled from "@emotion/styled";
import { theme } from "styles";

const { colors } = theme;

const HamburgerButton = styled.button`
  display: none;

  @media screen and (max-width: 720px) {
    position: fixed;
    /*
    ** BackDrop z-index is 1600: if the sidebar is open, the hamburger index should be higher than the backdrop.
     */
    z-index: ${props => (props.open ? "1700" : "1500")};
    top: ${props => (props.show ? "2rem" : "-5rem")};
    right: 4rem;
    outline: none;
    border: none;
    height: 6rem;
    padding: 1rem 0;
    background-color: transparent;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    transition: top 350ms ease;

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
    right: 2.5rem;
    top: ${props => (props.show ? "1rem" : "-5rem")};
  }
`;

const Hamburger = ({ open, onClick, show, ...props }) => {
  return (
    <HamburgerButton
      onClick={onClick}
      open={open}
      show={show}
      aria-label="Hamburger to toggle SideBar"
      {...props}
    >
      <div />
      <div />
      <div />
    </HamburgerButton>
  );
};

export default Hamburger;
