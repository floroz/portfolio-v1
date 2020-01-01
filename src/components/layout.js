import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Head from "components/head";
import Footer from "components/footer/footer";
import LoadingIntro from "components/loading-intro/loading-intro";
import Header from "containers/header/header";
import { Global } from "@emotion/core";
import { globalStyles } from "styles";

// if we're in dev mode
if (process.env.NODE_ENV === "development") {
  // Set up react-axe to catch accessibility issues during development
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

const Main = styled.main`
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);
  const lastcrollPosition = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", useHandleScroll);

    return () => {
      window.removeEventListener("scroll", useHandleScroll);
    };
  }, [useHandleScroll]);

  const useHandleScroll = useCallback(() => {
    console.log(show);
    console.log(lastcrollPosition.current);
    console.log(window.scrollY);

    if (window.scrollY > lastcrollPosition.current) {
      setShow(false);
    } else {
      setShow(true);
    }

    lastcrollPosition.current = window.scrollY;
  }, [show]);

  let AOS;

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Head />
      {!loading ? (
        <React.Fragment>
          <Header show={show} />
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
