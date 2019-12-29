import React from "react";
import { css } from "@emotion/core";
import { theme } from "styles";
import GithubIcon from "components/icons/github";
import TwitterIcon from "components/icons/twitter";
import LinkedInIcon from "components/icons/linkedin";

const { colors, fonts } = theme;

const footer = css`
  width: 100%;
  height: 10rem;
  background: ${colors.maastrichtBlue};
  display: grid;
  grid-template-rows: 1fr min-content;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  justify-items: center;
  align-items: center;
`;

const ul = css`
  margin-top: 2rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
`;

const anchor = css`
  display: inline-block;

  & > svg {
    fill: ${colors.brightYellow};
    width: 30px;
    transition: all 250ms ease-out;
  }

  &:hover > svg {
    transform: rotate(-15deg);
    opacity: 0.8;
  }
`;

const copyright = css`
  font-family: ${fonts.primary};
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

const Footer = () => {
  return (
    <footer css={footer}>
      <ul css={ul}>
        <li>
          <a href="https://www.linkedin.com/in/danieletortora/" css={anchor}>
            <LinkedInIcon width="64" />
          </a>
        </li>
        <li>
          <a href="https://github.com/floroz" css={anchor}>
            <GithubIcon width="64" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/floroz87" css={anchor}>
            <TwitterIcon width="64" />
          </a>
        </li>
      </ul>
      <p css={copyright}>Daniele Tortora 2020 &copy; London, UK</p>
    </footer>
  );
};

export default Footer;
