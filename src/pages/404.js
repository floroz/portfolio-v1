import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { theme } from "styles";
import Helmet from "react-helmet";
import { Global } from "@emotion/core";

const { colors, fonts, flexCenter } = theme;

const Main = styled.main`
  margin: 5rem auto;
  padding: 5rem;
  background-color: ${colors.maastrichtBlue};
  ${flexCenter};
  flex-flow: column nowrap;
  font-family: ${fonts.primary};
  color: ${colors.white};

  h1 {
    font-weight: normal;
    font-size: 3rem;
  }
`;

const linkStyle = css`
  color: ${colors.brightYellow};
  background-color: transparent;
  border: 1px solid ${colors.brightYellow};
  border-radius: 3px;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  font-family: ${fonts.primary};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  margin-top: 5rem;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${colors.brightYellowTransparent};
  }
`;

const bodyDefault = css`
  html {
    font-size: 100%;

    @media screen and (max-width: 600px) {
      font-size: 70%;
    }
  }
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.colors.maastrichtBlue};
  }
`;

const NotFoundPage = () => (
  <>
    <Helmet title="Ops, Not Found"></Helmet>
    <Global styles={bodyDefault} />
    <Main>
      <h1>Ops, not found...</h1>
      <p>Why don't you go back and have a look again?</p>
      <Link to="/" css={linkStyle}>
        Return to site
      </Link>
    </Main>
  </>
);

export default NotFoundPage;
