import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { StyledBody } from './styles';

export const Body = ({ children, ...props }) => {
  return <StyledBody {...props}>{children}</StyledBody>;
};

Body.propTypes = {
  /**
   * The content of the Body
   */
  children: PropTypes.node,
};
