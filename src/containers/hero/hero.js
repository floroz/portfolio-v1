import React from "react";
import styled from "@emotion/styled";
import { theme } from "styles";
import LinkButton from "components/link-button/link-button";

const { colors, fonts, initialAnimationDuration, delay } = theme;

const Section = styled.section`
  height: 100vh;
  font-size: 3.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5rem;
  margin-top: 2rem;

  @media screen and (max-width: 900px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 2.5rem;
  }
`;

const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const Heading = styled.h1`
  font-size: 6rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media screen and (max-width: 900px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 3rem;
  }
`;

const Intro = styled.span`
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

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 5rem;
  color: ${colors.greyBlue};
  line-height: 1.1;

  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.7rem;
  }
`;

const Text = styled.p`
  margin-top: 4rem;
  font-size: 1.6rem;
  color: ${colors.greyBlue};

  @media screen and (max-width: 900px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    margin-top: 2rem;
  }
`;

const Hero = () => {
  return (
    <Section id="hero">
      <Box>
        <Heading
          data-aos="fade-right"
          data-aos-easing="ease-in-cubic"
          data-aos-delay={delay()}
          data-aos-duration={initialAnimationDuration}
        >
          <Intro>Hi, I am </Intro>
          Daniele Tortora.
        </Heading>
        <SubTitle
          data-aos="fade-right"
          data-aos-easing="ease-in-cubic"
          data-aos-delay={delay()}
          data-aos-duration={initialAnimationDuration}
        >
          I build things with JavaScript.
        </SubTitle>
        <Text
          data-aos="fade-right"
          data-aos-easing="ease-in-cubic"
          data-aos-delay={delay()}
          data-aos-duration={initialAnimationDuration}
        >
          I am a Front End Developer based in London, UK who loves building web
          applications.
        </Text>
        <LinkButton
          href="#contact"
          data-aos="fade-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay={delay(200)}
          data-aos-duration={initialAnimationDuration}
        >
          Contact Me
        </LinkButton>
      </Box>
    </Section>
  );
};

export default Hero;
