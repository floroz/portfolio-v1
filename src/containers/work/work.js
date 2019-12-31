import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
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

const Work = () => {
  //
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <Section id="work">
      {/* <Title>Work</Title> */}
      <Slider {...sliderSettings}>
        <Project
          originalPhoneMockupPhotoName="noble-iphone-mockup.png"
          originalMacMockupPhotoName="noble-macbook-mockup.png"
          title="Noble | Vision"
          description="• Develop new user-facing features both for web-app and Electron applications using React, Redux, GraphQL, Apollo.
• Migrate the codebase from class based to functional components with React Hooks.
• Migrate style libraries from global SCSS/Bootstrap to a modern and modular style architecture using CSS Modules and CSS-in-JS.
• Build reusable code and libraries for future use.
• Ensure the technical feasibility of UI/UX designs."
        />
        <Project
          originalPhoneMockupPhotoName="portfolio-iphone-mockup.png"
          originalMacMockupPhotoName="portfolio-macbook-mockup.png"
          title="Portfolio | V1"
          description="Built using Gatsby.js and GraphQL
Design and Icons created using Adobe Illustrator CC
Animation using AOS and GSAP 3
CSS-in-JS using emotion"
        />
        <Project
          originalPhoneMockupPhotoName="hackney-iphone-mockup.png"
          originalMacMockupPhotoName="hackney-macbook-mockup.png"
          title="Hackney Developer | API Hub"
          description="    Designed and developed the front-end of the Developer API Hub using Angular 7, SCSS and TypeScript.
    Test Driven Development of RESTful APIs endpoints using C# .NET Core 2.1.
    Worked with different stakeholders and presented demos and products to large audience."
        />
      </Slider>
    </Section>
  );
};

export default Work;
