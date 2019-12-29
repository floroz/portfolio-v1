import React, { useState } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { CSSTransition } from "react-transition-group";
import { theme } from "styles";
import Logo from "components/logo/logo";
import Hamburger from "components/hamburger/hamburger";

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

  & > div:nth-of-type(1) {
    margin-left: 3.5rem;

    @media screen and (max-width: 720px) {
      margin-left: 2rem;
    }

    @media screen and (max-width: 600px) {
      margin-left: 1rem;
    }
  }
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
    align-items: flex-start;
    justify-content: space-around;

    li {
      padding: 1rem 2rem;

      a {
        text-decoration: none;
        display: block;
        color: ${colors.maastrichtBlue};
        padding: 0.5rem 0;
        border-bottom: 1.5px solid transparent;
        font-family: ${fonts.primary};
        font-size: 1.6rem;
        text-transform: uppercase;

        &:hover,
        &:focus,
        &:active {
          color: ${colors.white};
          border-bottom: 1.5px solid ${colors.white};
        }

        span {
          color: ${colors.white};
        }
      }
    }

    /*
    * Resume Button
     */
    li:last-child {
      a {
        border: 1px solid ${colors.maastrichtBlue};
        padding: 2rem;
        color: ${colors.maastrichtBlue};
        border-radius: 3px;

        &:hover,
        &:active,
        &:focus {
          background-color: ${colors.maastrichtBlueTransparent};
        }
      }
    }
  }
`;

const Sidebar = styled.aside`
  display: none;
  @media screen and (max-width: 720px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 65vw;
    background: ${colors.greyBlue};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    z-index: 999;
    transform: translateX(100%);
    transition-duration: 450ms;

    &.slide-enter {
      transform: translateX(100%);
    }

    &.slide-enter-done {
      transform: translateX(0);
    }

    &.slide-exit {
      transform: translateX(0);
    }

    &.slide-exit-done {
      transform: translateX(100%);
    }
  }
`;

const BackDrop = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
`;

const Header = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const onHamburgerClick = () =>
    setSideDrawerOpen(previousValue => !previousValue);

  const closeSideBar = () => setSideDrawerOpen(false);

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
        <Hamburger open={sideDrawerOpen} onClick={onHamburgerClick} />
      </nav>
      <CSSTransition
        in={sideDrawerOpen}
        classNames="slide"
        unmountOnExit
        mountOnEnter
      >
        <Sidebar>
          <ul css={responsiveList}>
            <li>
              <a href="#about" onClick={closeSideBar}>
                <span>0.</span> About
              </a>
            </li>
            <li>
              <a href="#work" onClick={closeSideBar}>
                <span>1.</span> Work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeSideBar}>
                <span>2.</span> Contact
              </a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
          </ul>
        </Sidebar>
      </CSSTransition>
      {sideDrawerOpen && (
        <BackDrop
          onClick={closeSideBar}
          tabIndex="-1"
          aria-hidden="true"
          role="presentation"
        />
      )}
    </header>
  );
};

export default Header;
