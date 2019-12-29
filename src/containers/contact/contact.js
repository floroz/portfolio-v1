import React from "react";
import { css } from "@emotion/core";
import { theme } from "styles";
import LinkButton from "components/link-button/link-button";

const { fonts, colors } = theme;

const section = css`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;

  @media screen and (max-width: 900px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 2.5rem;
  }
`;

const header = css`
  font-family: ${fonts.primary};
  font-weight: normal;
  font-size: 5rem;
  letter-spacing: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

const subText = css`
  width: 75vw;
  font-size: 1.6rem;
  text-align: center;
  line-height: 3rem;
  color: ${colors.grey};
`;

const Contact = () => {
  return (
    <section css={section} id="contact">
      <h4
        css={header}
        data-aos="fade-up"
        data-aos-duration="350"
        data-aos-delay="500"
      >
        Get in touch
      </h4>
      <p
        css={subText}
        data-aos="fade-up"
        data-aos-duration="350"
        data-aos-delay="500"
      >
        I am not available to any freelance work at the moment, but I am always
        happy to consider new ideas or collaborations, or even just to have a
        chat about a new technology!
      </p>
      <LinkButton
        to="mailto:contact@danieletortora.com?subject=Get%20in%20Touch"
        data-aos="fade-up"
        data-aos-duration="350"
        data-aos-delay="500"
      >
        Contact me
      </LinkButton>
    </section>
  );
};

export default Contact;
