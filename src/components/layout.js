import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import globalStyles from "../styles/global";
import Header from "./header/header";
import Footer from "./footer/footer";
import LoadingIntro from "./loadingIntro/loadingIntro";

const main = css`
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return !loading ? (
    <>
      <Header />
      <Global styles={globalStyles} />
      <main css={main}>{children}</main>
      <Footer />
    </>
  ) : (
    <>
      <Global styles={globalStyles} />
      <LoadingIntro setLoading={setLoading} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
