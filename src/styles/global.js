import { css } from "@emotion/core";
import theme from "./theme";
const { colors, fonts } = theme;
export default css`
  /* Box sizing rules */
  :root,
  html {
    font-size: 62.5%;
  }

  html {
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul,
  ol,
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a,
  a:visited,
  a:link {
    text-decoration: none;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* CUSTOM STYLES BEGINS HERE: */
  ::selection {
    background-color: ${colors.brightYellow};
  }

  body {
    background-color: ${colors.maastrichtBlue};
    color: ${colors.white};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.primary};
    font-weight: normal;
  }

  p {
    font-family: ${fonts.secondary};
    font-weight: normal;
    font-size: 2rem;
  }

  /**
 * Scroll bar
 */
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${colors.maastrichtBlueTransparent};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.brightYellowTransparent};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.brightYellow};
  }
`;
