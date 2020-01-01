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

const Title = styled.h4`
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

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
    letter-spacing: 1rem;
  }

  @media screen and (max-width: 500px) {
    letter-spacing: 0.5rem;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 990%);
  z-index: 999;
  width: 65vw;
  max-width: 50rem;
  min-height: 50vh;
  max-height: 85vh;
  overflow-y: auto;
  padding: 2.5rem;
  border-radius: 5px;
  background-color: ${colors.grey};
  transition: all 400ms ease-out;
  display: flex;
  flex-flow: column nowrap;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);

  &.modal-enter {
    transform: translate(-50%, 990%);
  }

  &.modal-enter-done {
    transform: translate(-50%, -50%);
  }

  &.modal-exit {
    transform: translate(-50%, -50%);
  }

  &.modal-exit-done {
    transform: translate(-50%, 990%);
  }

  @media screen and (max-width: 900px) {
    width: 80vw;
  }

  @media screen and (max-width: 500px) {
    width: 95vw;
  }
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

  @media screen and (max-width: 900px) {
    width: 20rem;
    left: 55%;
  }

  @media screen and (max-width: 500px) {
    width: 17rem;
    left: 60%;
  }
`;

const macImgStyle = css`
  width: 55rem;

  @media screen and (max-width: 900px) {
    width: 40rem;
  }

  @media screen and (max-width: 500px) {
    width: 35rem;
  }
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

  @media screen and (max-width: 900px) {
    top: 5rem;
    padding: 1rem 2rem;
  }

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

const XButton = styled.button`
  margin: 0;
  padding: 1rem;
  display: block;
  position: fixed;
  z-index: 1000;
  top: 0%;
  right: 0%;
  border: none;
  background-color: transparent;
  color: ${colors.white};
  outline: none;
  font-family: ${fonts.primary};
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const Project = ({
  originalMacMockupPhotoName,
  originalPhoneMockupPhotoName,
  title = "Project Untitled",
  card,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { images } = useStaticQuery(graphql`
    {
      images: allImageSharp {
        edges {
          node {
            fluid {
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
          unmountOnExit
          mountOnEnter
        >
          <Modal open={modalIsOpen}>
            <>
              {card} <XButton onClick={() => setModalIsOpen(false)}>X</XButton>
            </>
          </Modal>
        </CSSTransition>
        {modalIsOpen && <Backdrop onClick={() => setModalIsOpen(false)} />}
      </Figure>
      <HR />
    </Container>
  );
};

export default Project;
