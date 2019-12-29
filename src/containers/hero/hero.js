import React from "react";
import { css } from "@emotion/core";
import { theme } from "styles";
import LinkButton from "components/link-button/link-button";

const { colors, fonts, initialAnimationDuration, delay } = theme;

const section = css`
  height: 100vh;
  font-size: 3.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5rem;

  @media screen and (max-width: 900px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 2.5rem;
  }
`;

const box = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const intro = css`
  display: block;
  margin-bottom: 1rem;
  font-family: ${fonts.primary};
  font-size: 2rem;
  line-height: 1.1;
  letter-spacing: 5px;
  color: ${colors.brightYellow};

  @media screen and (max-width: 900px) {
    font-size: 1.8rem;
  }
`;

const title = css`
  font-size: 6rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media screen and (max-width: 900px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

const subTitle = css`
  font-size: 5rem;
  color: ${colors.greyBlue};
  line-height: 1.1;

  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const subtext = css`
  margin-top: 4rem;
  font-size: 1.6rem;
  color: ${colors.greyBlue};

  @media screen and (max-width: 900px) {
    font-size: 1.4rem;
  }
`;

const Hero = () => {
  return (
    <section css={section} id="hero">
      <div css={box}>
        <h1
          css={title}
          data-aos="fade-right"
          data-aos-easing="ease-in-cubic"
          data-aos-delay={delay()}
          data-aos-duration={initialAnimationDuration}
        >
          <span css={intro}>Hi, I am </span>
          Daniele Tortora.
        </h1>
        <h2
          css={subTitle}
          data-aos="fade-right"
          data-aos-easing="ease-in-cubic"
          data-aos-delay={delay()}
          data-aos-duration={initialAnimationDuration}
        >
          I build things with JavaScript.
        </h2>
        <p
          css={subtext}
          data-aos="fade-right"
          data-aos-easing="ease-in-cubic"
          data-aos-delay={delay()}
          data-aos-duration={initialAnimationDuration}
        >
          I am a Front End Engineer based in London, UK who loves building web
          applications.
        </p>
        <LinkButton
          href="#contact"
          data-aos="fade-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay={delay(200)}
          data-aos-duration={initialAnimationDuration}
        >
          Contact Me
        </LinkButton>
      </div>
    </section>
  );
};

export default Hero;
