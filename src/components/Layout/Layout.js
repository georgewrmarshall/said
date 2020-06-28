/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

// Themes
import { lightTheme } from '../themes';

// Styles
import { GlobalStyle } from './styles';

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle theme={lightTheme} />      
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
