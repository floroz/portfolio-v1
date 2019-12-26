import React from "react";
import styled from "@emotion/styled";
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

export const LoadingIntro = () => {
  return (
    <LoadingIntroMain>
      <Logo />
    </LoadingIntroMain>
  );
};

export default LoadingIntro;
