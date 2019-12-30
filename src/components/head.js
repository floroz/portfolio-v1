/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import appleIcon57x57 from "images/apple-touch-icon-57x57.png";
import appleIcon72x72 from "images/apple-touch-icon-72x72.png";
import appleIcon76x76 from "images/apple-touch-icon-76x76.png";
import appleIcon114x114 from "images/apple-touch-icon-114x114.png";
import appleIcon120x120 from "images/apple-touch-icon-120x120.png";
import appleIcon144x144 from "images/apple-touch-icon-144x144.png";
import appleIcon152x152 from "images/apple-touch-icon-152x152.png";
import appleIcon180x180 from "images/apple-touch-icon-180x180.png";
import appleIcon from "images/apple-touch-icon.png";
import favicon from "images/favicon.ico";

function Head({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="shortcut icon" href={favicon} />

      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap"
        rel="stylesheet"
      />
      <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
      <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72x72} />
      <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />
      <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114x114} />
      <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120x120} />
      <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144x144} />
      <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152x152} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
    </Helmet>
  );
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  siteUrl: `https://www.danieletortora.com`,
};

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default Head;
