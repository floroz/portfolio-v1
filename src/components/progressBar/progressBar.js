import React from "react";
import themes from "../../styles/theme";
import styled from "@emotion/styled";
const { colors, fonts } = themes;

const ProgressBarFrame = styled.div`
  display: block;
  border-radius: 4px;
  border: 1px solid ${colors.brightYellow};
  box-shadow: 0 0 25px 5px ${colors.brightYellowTransparent};
  height: 2rem;
  width: 80%;

  &::after {
    content: "${props => props.description}";
    display: block;
    font-family: ${fonts.secondary};
    font-size: 1.6rem;
    color: ${colors.white};
    height: 100%;
    letter-spacing: 0.3rem;
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

export const ProgressBar = ({ description = "", level, ...props }) => {
  return (
    <ProgressBarFrame
      role="presentation"
      aria-label="progress bar for skill"
      width={level}
      description={description}
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
