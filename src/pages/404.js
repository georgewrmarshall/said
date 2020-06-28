import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Theme
import { lightTheme } from '../components/themes';

// Components
import { Layout, Display } from '../components';
import SEO from '../components/seo';

// Images
import logoImg from '../images/logo.svg';

const StyledNotFoundPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0 0 2rem;
  }

  p {
    margin: 0 0 2rem;
  }
`;

StyledNotFoundPage.defaultProps = {
  theme: lightTheme,
};

const NotFoundPage = ({ siteTitle }) => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledNotFoundPage>
      <h1>
        <Link to="/">
          <img width="180" src={logoImg} alt={siteTitle} />
        </Link>
      </h1>
      <Display as="p">Sorry, that page doesn’t seem to exist.</Display>
    </StyledNotFoundPage>
  </Layout>
);

export default NotFoundPage;
