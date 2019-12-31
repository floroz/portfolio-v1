import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { theme } from "styles/index";
import { useState } from "react";
import Backdrop from "components/backdrop/backdrop";
import { CSSTransition } from "react-transition-group";

const { colors, fonts } = theme;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  margin-bottom: 2.5rem;
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

  display: inline-block;
  margin: 0;
`;

const DescriptionModal = styled.aside`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 65vw;
  max-width: 70rem;
  height: 80vh;
  padding: 2.5rem;
  border-radius: 5px;
  background-color: ${colors.grey};
  transition: all 400ms ease-out;

  &.modal-enter {
    transform: translate(-999%, -50%);
  }

  &.modal-enter-done {
    transform: translate(-50%, -50%);
  }

  &.modal-exit {
    transform: translate(-50%, -50%);
  }

  &.modal-exit-done {
    transform: translate(-999%, -50%);
  }
`;

const Description = styled.p`
  font-family: ${fonts.secondary};
  font-size: 1.5rem;
  line-height: 1.5;
  color: ${colors.maastrichtBlue};
  margin: 0;
  width: 100%;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 30rem; */
  position: relative;
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
  padding: 1.5rem 2.5rem;
  font-size: 1.4rem;
  font-family: ${fonts.primary};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  position: absolute;
  top: 6.7rem;
  right: 50%;
  transform: translateX(50%);
  z-index: 50;

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

const HR = styled.hr`
  display: block;
  height: 2px;
  width: 100%;
  background-color: ${colors.greyBlue};
  margin: 5rem 0;
`;

const Project = ({
  modalIsOpen,
  setModalIsOpen,
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
    <Container>
      <Figure>
        <Title>{title}</Title>
        <MoreButton onClick={() => setModalIsOpen(value => !value)}>
          More <span>&rarr;</span>
        </MoreButton>
        <Img fluid={phonePic.node.fluid} css={phoneImgStyle}></Img>
        <Img fluid={macPic.node.fluid} css={macImgStyle}></Img>
        <CSSTransition
          in={modalIsOpen}
          timeout={{ enter: 400, exit: 0 }}
          classNames="modal"
        >
          <DescriptionModal open={modalIsOpen}>
            <Description>{description}</Description>
          </DescriptionModal>
        </CSSTransition>
        {modalIsOpen && <Backdrop onClick={() => setModalIsOpen(false)} />}
      </Figure>
      <HR />
    </Container>
  );
};

export default Project;
