import React from "react";
import { css } from "@emotion/core";
import Button from "../button/button";
import { theme } from "../../styles";
const { colors, fonts, navHeight, heroAnimationDuration } = theme;

const section = css`
  height: calc(100vh - ${navHeight});
  font-size: 3.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 5rem;
`;

const box = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const intro = css`
  font-family: ${fonts.primary};
  font-size: 2rem;
  line-height: 1.1;
  letter-spacing: 5px;

  color: ${colors.brightYellow};
`;

const title = css`
  font-size: 6rem;
  line-height: 1.2;
  margin-top: 2rem;
`;

const subTitle = css`
  font-size: 5rem;
  color: ${colors.greyBlue};
  line-height: 1.1;
`;

const subtext = css`
  margin-top: 4rem;
  font-size: 1.6rem;
  color: ${colors.greyBlue};
`;

const Hero = () => {
  return (
    <section css={section} id="hero">
      <div css={box}>
        <p
          css={intro}
          data-aos="fade-down"
          data-aos-duration={heroAnimationDuration}
        >
          Hi, I am{" "}
        </p>
        <h1
          css={title}
          data-aos="fade-left"
          data-aos-duration={heroAnimationDuration}
        >
          Daniele Tortora.
        </h1>
        <h2
          css={subTitle}
          data-aos="fade-right"
          data-aos-duration={heroAnimationDuration}
        >
          I build things with JavaScript.
        </h2>
        <p css={subtext}>
          I am a Front End Developer based in London, UK who loves building web
          applications.
        </p>
        <Button
          data-aos="fade-up-right"
          data-aos-duration={heroAnimationDuration}
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default Hero;
