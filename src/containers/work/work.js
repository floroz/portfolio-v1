import React from "react";
import styled from "@emotion/styled";
import Project from "components/project/project";
import { theme } from "styles/index";

const { fonts, colors } = theme;

const Section = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  margin: 10rem 0 5rem 0;

  @media screen and (max-width: 900px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 2.5rem;
  }

  @media screen and (max-width: 400px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h4`
  font-family: ${fonts.secondary};
  font-size: 5rem;
  letter-spacing: 0.8rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const DescTitle = styled.h5`
  margin: 0;
  margin-bottom: 2rem;
  text-align: center;
  font-family: ${fonts.primary};
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: ${colors.white};
`;

const CardText = styled.p`
  font-family: ${fonts.secondary};
  font-size: 1.5rem;
  line-height: 2;
  text-align: left;
  color: ${colors.maastrichtBlue};
  margin: 0;
  width: 100%;

  br {
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.4rem;

    br {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    line-height: 1.5;
  }
`;

const Work = () => {
  return (
    <Section id="work">
      {/* <Title>Work</Title> */}
      <Project
        originalPhoneMockupPhotoName="noble-iphone-mockup.png"
        originalMacMockupPhotoName="noble-macbook-mockup.png"
        title="Noble | Vision"
        card={NobleCard}
      />
      <Project
        originalPhoneMockupPhotoName="portfolio-iphone-mockup.png"
        originalMacMockupPhotoName="portfolio-macbook-mockup.png"
        title="Portfolio | V1"
        card={PortfolioCard}
      />
      <Project
        originalPhoneMockupPhotoName="hackney-iphone-mockup.png"
        originalMacMockupPhotoName="hackney-macbook-mockup.png"
        title="Hackney | API Hub"
        card={HackneyCard}
      />
    </Section>
  );
};

export default Work;

var NobleCard = (
  <>
    <DescTitle>Noble | Vision</DescTitle>
    <CardText>
      Noble Vision is a software designed for Security Analysts to analyze and
      investigate real-time threats to the networks. My work involved:
      <br />
      • Develop new user-facing features both for web-app and Electron
      applications using React, Redux, GraphQL, Apollo.
      <br />
      • Migrate the codebase from Electron to Web-Browser and from class based
      to functional components with React Hooks.
      <br />
      • Migrate style libraries from global SCSS/Bootstrap to a modern
      architecture using CSS Modules and CSS-in-JS.
      <br />• Build reusable code and libraries for future use.
      <br />• Ensure the technical feasibility of UI/UX designs.
      <br />• Dockerization of UI and microservices orchestrated by K8.
    </CardText>
  </>
);
var PortfolioCard = (
  <>
    <DescTitle>Portfolio | V1</DescTitle>
    <CardText>
      The 'Portfolio V1' is the first iteration of my personal portfolio, with
      which I have had the chance to experiment with Gatsby and more generally
      with the concepts behind modern Static Sites Generators. In addition to
      that, I had the chance to implement a modern CSS-in-JS style guide using
      'emotion' and animation libraries such as AOS and GSAP 3. Some of the
      highlights and things I have achieved are:
      <br />
      • Built the portfolio using Gatsby.js, the gatsby-plugin ecosystem and
      GraphQL.
      <br />
      • Designed and created icons using Adobe Illustrator CC
      <br />
      • Motion design and animation using AOS and GSAP 3.
      <br />• CSS-in-JS using emotion and emotion/styled.
    </CardText>
  </>
);

var HackneyCard = (
  <>
    <DescTitle>Hackney | API HUB</DescTitle>
    <CardText>
      The API Hub has been my first project as Junior Developer and has allowed
      me to learn Angular 7 and TypeScript, along with being exposed to a broad
      range of CSS techniques and styleguides. Other highlights are:
      <br />
      • Designed and developed the front-end of the Developer API Hub using
      Angular 7, SCSS and TypeScript.
      <br />
      • Unit Testing using Jasmine.
      <br />• Worked with different stakeholders and presented sprints progress
      and demos to large audience in-person and online.
    </CardText>
  </>
);
