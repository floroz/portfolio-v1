import React from "react";
import { css, keyframes } from "@emotion/core";
import themes from "../../styles/theme";
import JSIcon from "../icons/javascript";
import ReactIcon from "../icons/react";
import ReduxIcon from "../icons/redux";
import GraphQLIcon from "../icons/graphql";
import ApolloIcon from "../icons/apollo";
import NodeIcon from "../icons/node";
import SASSIcon from "../icons/sass";
import ProgressBar from "../progressBar/progressBar";

const { colors, fonts } = themes;

const section = css`
  height: 100vh;
  width: 100%;
  padding: 0 5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const title = css`
  display: inline-block;
  font-family: ${fonts.primary};
  font-size: 5rem;
  margin-bottom: 3rem;
`;

const skillContainer = css`
  width: 100%;

  display: grid;
  grid-template-columns: 70px 1fr;
  grid-template-rows: repeat(7, 70px);
  grid-gap: 2rem;
  align-items: center;

  & > svg {
    height: auto;
    grid-column: 1/2;
    justify-self: flex-end;
  }
`;

const Skills = () => {
  return (
    <section css={section}>
      <h4 css={title}>Tech Skills</h4>
      <div css={skillContainer}>
        <JSIcon
          css={css`
            width: 44px;
          `}
        />
        <ProgressBar width={90} name="JavaScript" />
        <ReactIcon
          css={css`
            width: 50px;
          `}
        />
        <ProgressBar width={90} name="React" />
        <ReduxIcon
          css={css`
            width: 40px;
          `}
        />
        <ProgressBar width={85} name="Redux" />
        <GraphQLIcon
          css={css`
            width: 41px;
          `}
        />
        <ProgressBar width={75} name="GraphQL" />
        <ApolloIcon
          css={css`
            /* width: 40px; */
          `}
        />
        <ProgressBar width={70} name="Apollo" />
        <NodeIcon
          css={css`
            width: 55px;
          `}
        />
        <ProgressBar width={72} name="Node" />
        <SASSIcon
          css={css`
            width: 48px;
          `}
        />
        <ProgressBar width={95} name="SASS / SCSS Modules" />
      </div>
    </section>
  );
};

export default Skills;
