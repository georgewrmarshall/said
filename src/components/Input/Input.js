import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { StyledInput } from './styles';

export const Input = ({ ...props }) => {
  return (
    <StyledInput {...props} />
  );
};

Input.propTypes = {
  /**
   * The content of the Input
   */
  children: PropTypes.node,
};
