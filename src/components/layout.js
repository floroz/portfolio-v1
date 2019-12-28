import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Footer from "./footer/footer";
import LoadingIntro from "./loadingIntro/loadingIntro";
import Header from "./header/header";
import { Global } from "@emotion/core";
import { globalStyles } from "../styles";

const Main = styled.main`
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      {!loading ? (
        <React.Fragment>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </React.Fragment>
      ) : (
        <LoadingIntro setLoading={setLoading} />
      )}
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
