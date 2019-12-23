import React from "react";
import { css } from "@emotion/core";
import { theme } from "../../styles";
import Button from "../button/button";
import LinkButton from "../linkButton/linkButton";

const { fonts, colors } = theme;

const section = css`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const header = css`
  font-family: ${fonts.secondary};
  font-weight: normal;
  letter-spacing: 1rem;
  font-size: 5rem;
  margin-bottom: 1rem;
`;

const subText = css`
  width: 75vw;
  font-size: 1.6rem;
  line-height: 3rem;
  color: ${colors.grey};
`;

const Contact = () => {
  return (
    <section css={section} id="contact">
      <h4 css={header}>Get in touch!</h4>
      <p css={subText}>
        I am not available to any freelance work at the moment, but I am always
        happy to consider new ideas or collaborations, or even just to have a
        chat about a new technology!
      </p>
      <LinkButton href="mailto:contact@danieletortora.com?subject=Get%20in%20Touch">
        Contact me
      </LinkButton>
    </section>
  );
};

export default Contact;
