import React from "react";
import themes from "../../styles/theme";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
const { colors } = themes;

const ProgressBarFrame = styled.div`
  display: block;
  border-radius: 4px;
  border: 1px solid ${colors.brightYellow};
  box-shadow: 0 0 18px 10px ${colors.brightYellowTransparent};
  height: 2rem;
  width: 80%;

  &::before {
    content: ${props => props.name};
    display: block;
  }
`;

const ProgressBarFill = styled.span`
  display: inline-block;
  width: ${props => props.width}%;
  height: 100%;
  background-color: ${colors.brightYellow};
`;

export const ProgressBar = ({ name = "", width, ...props }) => {
  return (
    <ProgressBarFrame
      role="presentation"
      aria-label="progress bar for skill"
      {...props}
    >
      <ProgressBarFill width={width} />
    </ProgressBarFrame>
  );
};

export default ProgressBar;
