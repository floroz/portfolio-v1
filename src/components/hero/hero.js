import React, { useState, useEffect, useRef } from "react"
import { css } from "@emotion/core"
import colors from "../../styles/colors"
import Button from "../button/button"
import fonts from "../../styles/typography"

const section = css`
  height: calc(100vh - 10rem);
  font-size: 3.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 5rem;
`

const box = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`

const intro = css`
  font-family: ${fonts.fontPrimary};
  font-size: 2rem;
  line-height: 1.1;
  letter-spacing: 5px;

  color: ${colors.primary};
`

const title = css`
  font-size: 6rem;
  line-height: 1.2;
  margin-top: 2rem;
`

const subTitle = css`
  font-size: 5rem;
  color: ${colors.tertiary};
  line-height: 1.1;
`

const subtext = css`
  margin-top: 4rem;
  font-size: 2.2rem;
  color: ${colors.grey};
`

const Hero = () => {
  return (
    <section css={section}>
      <div css={box}>
        <p css={intro} data-aos="fade-down" data-aos-duration="1000">
          Hi, I am{" "}
        </p>
        <h1 css={title} data-aos="fade-left" data-aos-duration="1000">
          Daniele Tortora.
        </h1>
        <h3 css={subTitle} data-aos="fade-right" data-aos-duration="1000">
          I build things with JavaScript.
        </h3>
        <p css={subtext}>
          I am a Front End Developer based in London, UK who loves building web
          applications.
        </p>
        <Button data-aos="fade-up-right" data-aos-duration="1000">
          Contact Me
        </Button>
      </div>
    </section>
  )
}

export default Hero
