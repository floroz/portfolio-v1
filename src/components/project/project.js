import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { theme } from "styles/index";

const { colors, fonts } = theme;

const Grid = styled.article`
  display: grid;
  grid-template-columns: minmax(min-content, 60rem) 30rem;
  grid-template-rows: min-content 1fr;
  grid-gap: 2rem;
  justify-items: center;
`;

const Title = styled.h5`
  grid-column: 1/2;
  grid-row: 1/2;

  font-family: ${fonts.primary};
  font-size: 2.5rem;
  text-align: center;
  color: ${colors.brightYellow};

  margin: 0;
`;

const Description = styled.p`
  grid-column: 1/2;
  grid-row: 2/3;
  font-family: ${fonts.secondary};
  font-size: 1.4rem;
  margin: 0;
  max-width: 50rem;
`;

const Figure = styled.figure`
  position: relative;
  grid-row: 1/3;
  grid-column: 2/3;
  width: 30rem;
`;

const phoneImgStyle = css`
  width: 20rem;
  position: absolute !important;
  top: 40%;
  left: 80%;
  z-index: 30;
`;

const macImgStyle = css`
  width: 40rem;
`;

const Project = ({
  originalMacMockupPhotoName,
  originalPhoneMockupPhotoName,
  title = "Project Untitled",
  description = "No Description provided for this project",
}) => {
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
    <Grid>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Figure>
        <Img fluid={phonePic.node.fluid} css={phoneImgStyle}></Img>
        <Img fluid={macPic.node.fluid} css={macImgStyle}></Img>
      </Figure>
    </Grid>
  );
};

export default Project;
