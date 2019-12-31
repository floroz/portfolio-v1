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
  margin: 10rem 0;
`;

const Title = styled.h4`
  font-family: ${fonts.primary};
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
        title="Hackney Developer | API Hub"
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
      • Develop new user-facing features both for web-app and Electron
      applications using React, Redux, GraphQL, Apollo.
      <br />
      • Migrate the codebase from class based to functional components with
      React Hooks.
      <br />
      • Migrate style libraries from global SCSS/Bootstrap to a modern and
      modular style architecture using CSS Modules and CSS-in-JS.
      <br />• Build reusable code and libraries for future use. • Ensure the
      technical feasibility of UI/UX designs.;
    </CardText>
  </>
);
var PortfolioCard = (
  <>
    <DescTitle>Portfolio | V1</DescTitle>
    <CardText>
      • Built using Gatsby.js and GraphQL
      <br />
      • Design and Icons created using Adobe Illustrator CC
      <br />
      • Animation using AOS and GSAP 3
      <br />• CSS-in-JS using emotion
    </CardText>
  </>
);

var HackneyCard = (
  <>
    <DescTitle>Hackney Developer | API HUB</DescTitle>
    <CardText>
      • Designed and developed the front-end of the Developer API Hub using •
      Angular 7, SCSS and TypeScript.
      <br />
      • Test Driven Development of RESTful APIs endpoints using C# .NET Core
      2.1.
      <br />• Worked with different stakeholders and presented demos and
      products to large audience.
    </CardText>
  </>
);
