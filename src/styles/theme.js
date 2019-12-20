import { css } from "@emotion/core";

// const turquoiseBlue = "#00f6ed";
// const brightYellow = "#ffa921";
// const columbiaBlue = "#cad8de";

const theme = {
  colors: {
    brightYellow: "#ffa921",
    brightYellowTransparent: "rgba(255, 169, 33, 0.2)",
    maastrichtBlue: "#0A192F",
    greyBlue: "#8892b0",
    white: "#E6F1FF",
    grey: "#606A86",
    black: "#020C1B",
  },
  fonts: {
    primary: '"Roboto Mono", monospace',
    secondary: '"Open Sans", sans-serif',
  },
  navHeight: "10rem",
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  initialAnimationDuration: 500,
  delay: (duration) => {
    if (!duration) return 1000;
    return 1000 + Number(duration);
  }
};

export default theme;
