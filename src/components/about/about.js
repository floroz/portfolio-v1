import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { theme } from "../../styles";
import profilePic from "../../images/profilepic.jpg";

const { colors, fonts } = theme;
const section = css`
  height: 100vh;
  width: 100%;
  padding: 0 5rem;
  background: ${colors.maastrichtBlue};
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-template-rows: min-content 1fr;
  grid-gap: 2.5rem;
`;

const title = css`
  font-family: ${fonts.primary};
  font-size: 5rem;
  font-weight: normal;
  margin-bottom: 2.5rem;
  grid-row: 1/2;
  justify-self: center;
`;

const article = css`
  grid-row: 2/3;
  width: 100%;
  justify-self: center;
  position: relative;

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 50px min-content;
  grid-gap: 2rem;
`;

const paragraph = css`
  font-family: ${fonts.secondary};
  font-size: 1.4rem;
  line-height: 1.5;
  grid-column: 2/3;
  grid-row: 1/3;
  align-self: flex-start;
`;

const imgContainer = css`
  position: relative;
  grid-row: 2/3;
`;

const frame = css`
  position: absolute;
  top: 70px;
  left: 70px;
  padding: 3.5rem;
  border: 10px solid ${colors.brightYellow};
  width: 25rem;
  height: 25rem;
  z-index: 95;
`;

const img = css`
  position: absolute;
  width: 25rem;
  max-width: 100%;
  z-index: 100;
  filter: contrast(140%) grayscale(100%);
`;

const tabButtonStyle = css`
  width: 8.5rem;
  padding: 1rem 0;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 0;
  cursor: pointer;
  justify-self: flex-start;
  align-self: flex-start;
  transition: all 250ms ease-out;

  &:hover {
    border-bottom: 2px solid ${colors.brightYellow};
  }
`;

const IntroButton = styled.button`
  ${tabButtonStyle} /* top: 15px;
  left: -69px; */
  grid-row: 1/2;
  grid-column: 1/2;
  border-bottom: 2px solid
    ${props =>
      props.activeText === "intro" ? colors.brightYellow : "transparent"};
`;

const MoreButton = styled.button`
  ${tabButtonStyle} /* top: 100px;
  left: -69px; */
  grid-row: 2/3;
  grid-column: 1/2;
  border-bottom: 2px solid
    ${props =>
      props.activeText === "journey" ? colors.brightYellow : "transparent"};
`;

const About = () => {
  const [activeText, setActiveText] = React.useState("intro");

  return (
    <section css={section} id="about">
      <h3 css={title}>About me</h3>
      <article css={article}>
        {activeText === "intro" && (
          <p css={paragraph}>
            I am a highly motivated Front End Engineer who is passionate about
            creating rich user interfaces and interactive web applications using
            a wide range of JavaScript technologies and libraries. I strongly
            believe in the importance of writing clean, modular and loosely
            coupled code that is easy to document, maintain and reuse.
          </p>
        )}
        {activeText === "journey" && (
          <p css={paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            odio accusantium distinctio maiores nemo beatae doloribus animi,
            mollitia dolorum ad aperiam, quaerat inventore velit omnis nostrum
            dolor. Sunt, eaque quod.
          </p>
        )}
        <IntroButton
          onClick={() => setActiveText("intro")}
          activeText={activeText}
        >
          Intro
        </IntroButton>
        <MoreButton
          onClick={() => setActiveText("journey")}
          activeText={activeText}
        >
          Journey
        </MoreButton>
      </article>
      <figure css={imgContainer}>
        <div css={frame} />
        <img src={profilePic} alt="" css={img} />
      </figure>
    </section>
  );
};

export default About;
