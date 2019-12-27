import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import theme from "../../styles/theme";
import Logo from "../logo/logo";

const { colors } = theme;

const LoadingIntroMain = styled.main`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: ${colors.maastrichtBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* this is necessary to make sure does not
appear before the animation starts */
const hideBeforeAnimation = css`
  opacity: 0;
  transform: scale(0);
`;

const tl = gsap.timeline();

export const LoadingIntro = ({ setLoading }) => {
  const logoRef = useRef();

  useEffect(() => {
    if (logoRef.current) {
      tl.to(logoRef.current, {
        duration: 0.5,
        delay: 1,
        opacity: 1,
        scale: 1,
      })
        .to(logoRef.current, {
          duration: 0.5,
          delay: 0.5,
          rotation: 360,
          ease: "power4.out",
          transformOrigin: "50% 50%",
        })
        .to(logoRef.current, {
          duration: 0.5,
          delay: 0.5,
          rotation: 360 * 2,
          ease: "power4.out",
          transformOrigin: "50% 50%",
        })
        .to(logoRef.current, {
          duration: 0.3,
          delay: 0.2,
          scale: 0,
          opacity: 0,
          onComplete: () => setLoading(false),
        });
    }
  }, [logoRef, setLoading]);

  return (
    <LoadingIntroMain>
      <Logo logoRef={logoRef} css={hideBeforeAnimation} />
    </LoadingIntroMain>
  );
};

export default LoadingIntro;
