import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { theme } from "~styles";

const { flexCenter, colors, fonts } = theme;

const Figure = styled.figure`
  ${flexCenter}
`;

const LogoContainer = styled.div`
  ${flexCenter}
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
`;

export const Logo = props => {
  return (
    <Figure ref={props.logoRef} id="logo" {...props}>
      <LogoContainer>
        <Link to="#" aria-label="home" css={logo}>
          DT
        </Link>
      </LogoContainer>
    </Figure>
  );
};

export default Logo;
