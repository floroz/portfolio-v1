import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { theme } from "~styles";
import profilePic from "~images/profilepic.jpg";

const { colors, fonts } = theme;

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  padding: 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: block;
    padding: 0 4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 2.5rem;
  }
`;

const Grid = styled.div`
  background: ${colors.maastrichtBlue};
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-template-rows: min-content 50vh;
  grid-gap: 2.5rem;

  @media screen and (max-width: 920px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h3`
  font-family: ${fonts.primary};
  font-size: 5rem;
  font-weight: normal;
  margin-bottom: 2.5rem;
  grid-row: 1/2;
  justify-self: center;

  @media screen and (max-width: 920px) {
    margin-bottom: 2rem;
    font-size: 4.5rem;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 2rem;
    font-size: 4rem;
  }
`;

const AboutGrid = styled.article`
  grid-row: 2/3;
  grid-column: 1/2;
  width: 100%;
  justify-self: center;
  position: relative;

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 50px min-content;
  grid-gap: 2rem;

  @media screen and (max-width: 920px) {
    grid-row: 2/3;
    order: 2;
  }
`;

const Text = styled.p`
  font-family: ${fonts.secondary};
  font-size: 1.4rem;
  line-height: 1.5;
  grid-column: 2/3;
  grid-row: 1/3;
  align-self: flex-start;
`;

const Figure = styled.figure`
  width: 100%;
  grid-row: 2/3;
  grid-column: 2/3;

  /* The AOS custom animation needs to be in a parent container */
  [data-aos="about-frame"] {
    transform: rotate(-90deg);

    &.aos-animate {
      transform: rotate(0);
    }
  }

  @media screen and (max-width: 920px) {
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;
    margin-bottom: 10rem;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 8rem;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 30rem;
`;

const Frame = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  padding: 3.5rem;
  border: 10px solid ${colors.brightYellow};
  width: 25rem;
  height: 25rem;
  z-index: 95;

  @media screen and (max-width: 920px) {
  }

  @media screen and (max-width: 600px) {
    top: 20%;
    left: 30%;
    width: 20rem;
    height: 20rem;
  }
`;

const Img = styled.img`
  width: 25rem;
  max-width: 100%;
  position: relative;
  z-index: 100;
  filter: contrast(140%) grayscale(100%);

  @media screen and (max-width: 600px) {
    width: 20rem;
    margin: 0 auto;
  }
`;

const tabButtonStyle = css`
  width: 8.5rem;
  padding: 1rem 0;
  outline: none;
  border: none;
  border-bottom: 2px solid transparent;
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
    <Section id="about">
      <Grid>
        <Title
          data-aos="fade-down"
          data-aos-duration="350"
          data-aos-delay="500"
        >
          About me
        </Title>
        <AboutGrid>
          {activeText === "intro" && (
            <Text>
              I am a highly motivated Front End Engineer who is passionate about
              creating rich user interfaces and interactive web applications
              using a wide range of JavaScript technologies and libraries. I
              strongly believe in the importance of writing clean, modular and
              loosely coupled code that is easy to document, maintain and reuse.
            </Text>
          )}
          {activeText === "journey" && (
            <Text>
              My story as self-taught developer is outlined by the passion which
              has driven me through a challenging yet exciting journey to become
              a Software Engineer. During my teenage years, I was a professional
              eSports player competing at national and international level in an
              online FPS called Counter-Strike. I was sponsored by different
              tech company, including ASUS, and I had the opportunity to travel
              across the country and play in LAN tournaments (including the
              World Cyber Games Qualifier). I have also Despite choosing a
              different academic path, which led me to successfully complete a
              Bachelor in Psychology and a Master in Clinical Psychology,
              technology has remained my primary interest and a source of
              inspiration and curiosity. In July 2018, after completing a
              Postgraduate in Housing Studies at the Faculty of Business and Law
              of De Montfort University of Leicester, I realised that I had to
              invest all my energy to start a career in tech and spend my time
              doing something I love and I was passionate about. In September
              2018, I planned and drafted my roadmap to become a web developer
              within the next 6 months. I started learning HTML, CSS and
              JavaScript vanilla using different resources (freeCodeCamp, Udemy,
              Pluralsight) and begun to screen the different employment or
              educational opportunities within London. The more I dived into
              web-development the more I loved it. I started coding everyday
              after work for 2-3 hours, and for 10-12 hours during the weekends.
              Two months into learning the basics, I started applying for
              several junior roles, and within a couple of weeks and a few
              interviews/technical tests, I received an offer for a full-time
              position as a Junior Developer. From there onwards, I have spent
              the majority of my free time to improve and consolidate my
              knowledge of the building blocks of the web (HTML, CSS,
              JavaScript, Browser Compatibility, Web Performance and Web
              Security) and spent a large amount of time learning and practicing
              modern framework and technologies (Node, React, Redux, GraphQL).
              Despite having then gained a relevant commercial experience in all
              of these technologies, I strongly believe in learning as a
              life-long process that is parallel and essential to an Engineer’s
              success and the quality of code that is delivered.
            </Text>
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
        </AboutGrid>
        <Figure>
          <ImgContainer>
            <Frame
              data-aos="about-frame"
              data-aos-duration="750"
              data-aos-delay="300"
            />
            <Img src={profilePic} alt="" />
          </ImgContainer>
        </Figure>
      </Grid>
    </Section>
  );
};

export default About;
