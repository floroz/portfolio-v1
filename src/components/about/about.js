import React from "react";
import { css } from "@emotion/core";
import { theme } from "../../styles";

const section = css`
  height: 100vh;
  width: 100%;
  background: ${theme.colors.greyBlue};
`;
const About = () => {
  return <section css={section}>test</section>;
};

export default About;
