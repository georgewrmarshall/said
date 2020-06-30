import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { StyledHeadline } from './styles';

export const Headline = ({ children, ...props }) => {
  return <StyledHeadline {...props}>{children}</StyledHeadline>;
};

Headline.propTypes = {
  /**
   * The content of the Headline
   */
  children: PropTypes.node,
};
