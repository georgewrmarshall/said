import React from 'react';

// Components
import { Layout, SEO, PageHome } from '../components';

const IndexPage = ({ siteTitle }) => (
  <Layout>
    <SEO title="Home" />
    <PageHome siteTitle={siteTitle} />
  </Layout>
);

export default IndexPage;
