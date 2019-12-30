import React from "react";
import styled from "@emotion/styled";
import Project from "components/project/project";

const Section = styled.section`
  padding: 0 5rem;
`;

const Work = () => {
  //
  return (
    <Section>
      <Project
        originalPhoneMockupPhotoName="noble-iphone-mockup.png"
        originalMacMockupPhotoName="noble-macbook-mockup.png"
      />
      <Project
        originalPhoneMockupPhotoName="portfolio-iphone-mockup.png"
        originalMacMockupPhotoName="portfolio-macbook-mockup.png"
      />
      <Project
        originalPhoneMockupPhotoName="hackney-iphone-mockup.png"
        originalMacMockupPhotoName="hackney-macbook-mockup.png"
      />
    </Section>
  );
};

export default Work;
