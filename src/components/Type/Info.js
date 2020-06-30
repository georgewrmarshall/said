import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { StyledInfo } from './styles';

export const Info = ({ children, ...props }) => {
  return <StyledInfo {...props}>{children}</StyledInfo>;
};

Info.propTypes = {
  /**
   * The content of the Info
   */
  children: PropTypes.node,
};
