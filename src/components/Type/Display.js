import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { StyledDisplay } from './styles';

export const Display = ({ children, ...props }) => {
  return <StyledDisplay {...props}>{children}</StyledDisplay>;
};

Display.propTypes = {
  /**
   * The content of the Display
   */
  children: PropTypes.node,
};
