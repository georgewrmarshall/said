import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { StyledContainer } from './styles';

export const Container = ({ children, fluid, ...props }) => {
  return (
    <StyledContainer fluid={fluid} {...props}>
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  /**
   * The content of the Container
   */
  children: PropTypes.node,
};
