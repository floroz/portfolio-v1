import React from "react";
import { css } from "@emotion/core";
import { theme } from "../../styles";

const { colors } = theme;

const footer = css`
  width: 100%;
  height: 20rem;
  background: ${colors.maastrichtBlue};
  border-top: 2px solid ${colors.grey};
`;

const Footer = () => {
  return (
    <footer css={footer}>
      <h1>Footer</h1>
    </footer>
  );
};

export default Footer;
