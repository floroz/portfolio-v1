import React, { useState } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { CSSTransition } from "react-transition-group";
import { theme } from "../../styles";
import Logo from "../logo/logo";
import Hamburger from "../hamburger/hamburger";

const {
  navHeight,
  fonts,
  colors,
  flexCenter,
  initialAnimationDuration,
  delay,
} = theme;

const header = css`
  width: 100%;
  height: ${navHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1000;
  box-shadow: none;
  background: ${colors.maastrichtBlue};

  @media screen and (max-width: 720px) {
  }
`;

const nav = css`
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
`;

const ul = css`
  ${flexCenter}
  flex-flow: row nowrap;

  li {
    font-family: ${fonts.primary};
    font-size: 1.3rem;
    padding: 1rem 2rem;

    a {
      text-decoration: none;
      display: block;
      color: ${colors.greyBlue};
      padding: 0.5rem 0;
      border-bottom: 1.5px solid transparent;

      &:hover,
      &:focus,
      &:active {
        color: ${colors.brightYellow};
        border-bottom: 1.5px solid ${colors.brightYellow};
      }

      span {
        color: ${colors.brightYellow};
      }
    }
  }

  li:last-child {
    a {
      border: 1px solid ${colors.brightYellow};
      padding: 2rem;
      color: ${colors.brightYellow};
      border-radius: 3px;

      &:hover,
      &:active,
      &:focus {
        background-color: ${colors.brightYellowTransparent};
      }
    }
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const responsiveList = css`
  display: none;

  @media screen and (max-width: 720px) {
    ${flexCenter}
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;

    li {
      font-family: ${fonts.primary};
      font-size: 1.3rem;
      padding: 1rem 2rem;

      a {
        text-decoration: none;
        display: block;
        color: ${colors.greyBlue};
        padding: 0.5rem 0;
        border-bottom: 1.5px solid transparent;

        &:hover,
        &:focus,
        &:active {
          color: ${colors.brightYellow};
          border-bottom: 1.5px solid ${colors.brightYellow};
        }

        span {
          color: ${colors.brightYellow};
        }
      }
    }

    li:last-child {
      a {
        border: 1px solid ${colors.brightYellow};
        padding: 2rem;
        color: ${colors.brightYellow};
        border-radius: 3px;

        &:hover,
        &:active,
        &:focus {
          background-color: ${colors.brightYellowTransparent};
        }
      }
    }
  }
`;

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 50vw;
  background: ${colors.greyBlue};
  transition: all 300ms ease-out;

  &.slide-enter {
    left: -999px;
  }

  &.slide-enter-done {
    left: 0;
  }

  &.slide-exit {
    left: 0;
  }

  &.slide-exit-done {
    left: -999px;
  }
`;

const Header = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const onHamburgerClick = () =>
    setSideDrawerOpen(previousValue => !previousValue);

  return (
    <header css={header}>
      <nav css={nav}>
        <Logo data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" />
        <ul css={ul}>
          <li
            data-aos="fade-down"
            data-aos-easing="ease-in-cubic"
            data-aos-delay={delay(800)}
            data-aos-duration={initialAnimationDuration}
          >
            <a href="#about">
              <span>0.</span> About
            </a>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="ease-in-cubic"
            data-aos-delay={delay(1000)}
            data-aos-duration={initialAnimationDuration}
          >
            <a href="#work">
              <span>1.</span> Work
            </a>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="ease-in-cubic"
            data-aos-delay={delay(1200)}
            data-aos-duration={initialAnimationDuration}
          >
            <a href="#contact">
              <span>2.</span> Contact
            </a>
          </li>
          <li
            data-aos="fade-left"
            data-aos-easing="ease-in-cubic"
            data-aos-delay={delay(1400)}
            data-aos-duration={initialAnimationDuration}
          >
            <a href="#resume">Resume</a>
          </li>
        </ul>
        <Hamburger onClick={onHamburgerClick} />
      </nav>
      <CSSTransition
        in={sideDrawerOpen}
        classNames="slide"
        timeout={300}
        unmountOnExit
        mountOnEnter
      >
        <Sidebar>
          <ul css={responsiveList}>
            <li>
              <a href="#about">
                <span>0.</span> About
              </a>
            </li>
            <li>
              <a href="#work">
                <span>1.</span> Work
              </a>
            </li>
            <li>
              <a href="#contact">
                {" "}
                Contact
                <span>2.</span>
              </a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
          </ul>
        </Sidebar>
      </CSSTransition>
    </header>
  );
};

export default Header;
