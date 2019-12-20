import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { theme } from "../../styles";

const {
  navHeight,
  fonts,
  colors,
  flexCenter,
  initialAnimationDuration,
  delay,
} = theme;

const headerStyle = css`
  width: 100%;
  height: ${navHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  box-shadow: none;
  background: ${colors.maastrichtBlue};
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

const figure = css`
  ${flexCenter}
`;

const logoContainer = css`
  ${flexCenter}
  margin-left: 3.5rem;
  width: 46px;
  height: 46px;
  border-radius: 4px;
  border: 1px solid ${colors.brightYellow};

  &:hover {
    background-color: ${colors.brightYellowTransparent};
  }
`;

const logo = css`
  padding: 1rem;
  text-decoration: none;
  text-align: center;
  display: block;
  color: ${colors.brightYellow};
  font-size: 1.8rem;
  font-family: ${fonts.secondary};

  & > a {
    color: ${colors.brightYellow};
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
`;

const sidebar = css`
  display: none;
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <nav css={nav}>
        <figure css={figure}>
          <div css={logoContainer}>
            <Link to="#" aria-label="home" css={logo}>
              DT
            </Link>
          </div>
        </figure>
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
      </nav>
      <div css={sidebar} aria-hidden="true" tabIndex="-1">
        Test
      </div>
    </header>
  );
};

export default Header;
