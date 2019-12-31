import React from "react";
import styled from "@emotion/styled";

const BackDrop = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
`;

const Backdrop = ({ onClick }) => {
  return (
    <BackDrop
      onClick={onClick}
      tabIndex="-1"
      aria-hidden="true"
      role="presentation"
    />
  );
};

export default Backdrop;
