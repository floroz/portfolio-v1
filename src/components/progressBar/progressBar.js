import React from "react";
import themes from "../../styles/theme";
import styled from "@emotion/styled";
const { colors } = themes;

const ProgressBarFrame = styled.div`
  display: block;
  border-radius: 4px;
  border: 1px solid ${colors.brightYellow};
  box-shadow: 0 0 25px 7px ${colors.brightYellowTransparent};
  height: 2rem;
  width: 80%;

  &::before {
    content: ${props => props.name};
    display: block;
  }

  [data-aos="progress-bar"] {
    display: inline-block;
    height: 100%;
    background-color: ${colors.brightYellow};
    width: 0;

    &.aos-animate {
      width: ${props => props.width}%;
    }
  }
`;

export const ProgressBar = ({ name = "", width, ...props }) => {
  return (
    <ProgressBarFrame
      role="presentation"
      aria-label="progress bar for skill"
      width={width}
      {...props}
    >
      <span
        data-aos="progress-bar"
        data-aos-delay="250"
        data-aos-duration="750"
        data-aos-easing="ease-in-out-sine"
      />
    </ProgressBarFrame>
  );
};

export default ProgressBar;
