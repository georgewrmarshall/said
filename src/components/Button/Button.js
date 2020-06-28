import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { StyledButton } from './styles';

export const Button = ({ onClick, children, ...props }) => {
  return (
    <StyledButton onClick={onClick} type="button" {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * The content of the Button
   */
  children: PropTypes.node,
  /**
   * The onClick of the button
   */
  onClick: PropTypes.func,
};
