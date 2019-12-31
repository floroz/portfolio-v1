import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { theme } from "styles/index";
import { useState } from "react";

const { colors, fonts } = theme;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Title = styled.h5`
  font-family: ${fonts.primary};
  font-size: 1.8rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.2rem;
  color: ${colors.brightYellow};
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.brightYellow};

  margin: 0;
`;

const Description = styled.p`
  font-family: ${fonts.secondary};
  font-size: 1.4rem;
  margin: 0;
  max-width: 50rem;
`;

const Figure = styled.figure`
  position: relative;
  /* width: 30rem; */
`;

const phoneImgStyle = css`
  width: 30rem;
  position: absolute !important;
  top: 40%;
  left: 60%;
  z-index: 30;
`;

const macImgStyle = css`
  width: 55rem;
`;

const MoreButton = styled.button`
  color: ${colors.brightYellow};
  background-color: transparent;
  border: 1px solid ${colors.brightYellow};
  border-radius: 3px;
  padding: 2rem 4rem;
  font-size: 1.4rem;
  font-family: ${fonts.primary};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  margin-top: 5rem;

  span {
    display: inline-block;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${colors.brightYellowTransparent};
  }

  &:hover {
    span {
      transform: translateX(10px);
    }
  }
`;

const Project = ({
  originalMacMockupPhotoName,
  originalPhoneMockupPhotoName,
  title = "Project Untitled",
  description = "No Description provided for this project",
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { images } = useStaticQuery(graphql`
    {
      images: allImageSharp {
        edges {
          node {
            fluid(maxWidth: 400) {
              aspectRatio
              base64
              originalImg
              originalName
              presentationHeight
              presentationWidth
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
            }
            id
          }
        }
      }
    }
  `);

  const phonePic = images.edges.find(
    img => img.node.fluid.originalName === originalPhoneMockupPhotoName
  );

  const macPic = images.edges.find(
    img => img.node.fluid.originalName === originalMacMockupPhotoName
  );

  return (
    <Container>
      {/* <Description>{description}</Description> */}

      <Title>{title}</Title>
      <MoreButton onClick={() => setModalOpen(true)}>
        More <span>&rarr;</span>
      </MoreButton>
      <Figure>
        <Img fluid={phonePic.node.fluid} css={phoneImgStyle}></Img>
        <Img fluid={macPic.node.fluid} css={macImgStyle}></Img>
      </Figure>
    </Container>
  );
};

export default Project;
