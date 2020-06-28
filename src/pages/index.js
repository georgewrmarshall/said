import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

// Theme
import { lightTheme } from '../components/themes';

// Components
import {
  Layout,
  Button,
  Input,
  Video,
  Display,
  Headline,
  Body,
} from '../components';
import SEO from '../components/seo';

// Images
import logoImg from '../images/logo.svg';

const StyledIndexPage = styled.div`
  ${props => css`
    padding: 3rem 1rem;

    img {
      margin-bottom: 3rem;
    }

    h1, h2 {
      margin: 0 0 3rem;
    }

    form {
      display: flex;
      margin-bottom: 2rem;
    }

    input {
      min-width: 0;
      max-width: 100%;
      width: 330px;
    }

    p {
      margin-bottom: 3rem;
    }

    @media ${props.theme.minWidth.lg} {
      display: flex;
      padding: 4rem;
      height: calc(100vh - 8rem);

      > div {
        flex: 0 0 50%;
        max-width: 50%;
      }

      .content {
        display: flex;
        flex-direction: column;
        padding-right: 4rem;
        height: 100%;
      }

      p {
        margin-top: auto;
        margin-bottom: 0;
      }
    }

    @media ${props.theme.minWidth.xxl} {
      padding: 10rem;
      height: calc(100vh - 20rem);

      .content {
        padding-right: 5rem;
      }
    }

  `}
`;

StyledIndexPage.defaultProps = {
  theme: lightTheme,
};


const IndexPage = ({ siteTitle }) => (
  <Layout>
    <SEO title="Home" />
    <StyledIndexPage>
      <div>
        <div className="content">
          <Link to="/">
            <img width="180" src={logoImg} alt={siteTitle} />
          </Link>
          <Display as="h1">
            Said Studio is an interior design practice based in New Zealand
          </Display>
          <Headline as="h2">
            Our website is just one of the projects we are currently working on.
            If you would like to stay up to date with developments from Said
            Studio please enter your email below.
          </Headline>
          <form>
            <Input placeholder="email" type="email" />
            <Button type="submit">submit</Button>
          </form>
          <Body as="p">
            <a href="mailto:hello@saidstudio.co.nz">hello@saidstudio.co.nz</a>
            <br />
            <a
              href="http://instagram.com/_saidstudio/"
              target="_blank"
              rel="noreferrer"
            >
              @_saidstudio
            </a>
            <br /> +64 22 394 6718
          </Body>
        </div>
      </div>
      <div>
        <Video />
      </div>
    </StyledIndexPage>
  </Layout>
);

export default IndexPage;
