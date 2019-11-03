import React from "react";
import { css } from "@emotion/core";
import { theme } from "../../styles";
const { navHeight, fonts, colors, flexCenter, heroAnimationDuration } = theme;

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
      transition: all 300ms ease;

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
          <div>logo</div>
        </figure>
        <ul css={ul}>
          <li
            data-aos="fade-down"
            data-aos-duration={heroAnimationDuration - 300}
          >
            <a href="">
              <span>0.</span> About
            </a>
          </li>
          <li
            data-aos="fade-down"
            data-aos-duration={heroAnimationDuration - 200}
          >
            <a href="">
              <span>1.</span> Work
            </a>
          </li>
          <li
            data-aos="fade-down"
            data-aos-duration={heroAnimationDuration - 100}
          >
            <a href="">
              <span>2.</span> Contact
            </a>
          </li>
          <li data-aos="fade-left" data-aos-duration={heroAnimationDuration}>
            <a href="">Resume</a>
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
