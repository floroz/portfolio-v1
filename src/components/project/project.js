import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

const Figure = styled.figure`
  position: relative;
`;

const phoneImgStyle = css`
  width: 27rem;
  position: absolute !important;
  top: 35%;
  left: 35%;
  z-index: 30;
`;

const macImgStyle = css`
  width: 55rem;
`;

const Project = ({
  originalMacMockupPhotoName,
  originalPhoneMockupPhotoName,
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

  console.log(images);

  const phonePic = images.edges.find(
    img => img.node.fluid.originalName === originalPhoneMockupPhotoName
  );

  const macPic = images.edges.find(
    img => img.node.fluid.originalName === originalMacMockupPhotoName
  );

  return (
    <Figure>
      <Img fluid={phonePic.node.fluid} css={phoneImgStyle}></Img>
      <Img fluid={macPic.node.fluid} css={macImgStyle}></Img>
    </Figure>
  );
};

export default Project;
