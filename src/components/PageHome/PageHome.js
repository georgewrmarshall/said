import React from 'react';
import { Link } from 'gatsby';

// Components
import { Form, Video, Display, Body } from '..';

// Images
import logoImg from '../../images/logo.svg';

// Videos
import curtainsVideoDesktop from '../../videos/curtains-desktop.mp4';
import curtainsVideoMobile from '../../videos/curtains-mobile.mp4';

// Styles
import { StyledPageHome } from './styles';

export const PageHome = ({ siteTitle }) => (
  <StyledPageHome>
    <div>
      <div className="content">
        <Link to="/">
          <img width="180" src={logoImg} alt={siteTitle} />
        </Link>
        <Display as="h1">
          Hi. We’re Said, a New Zealand based interior design studio.
        </Display>
        <Video className="video-mobile" videoSrc={curtainsVideoMobile} />

        <Body as="p">
          We’re passionate about natural materials, collaborative relationships,
          and environmentally-conscious design.
        </Body>
        <Body as="p">
          Our website is currently under construction. In the meantime, get in
          touch to chat about your next project.
        </Body>
        <Form />
        <Body as="p" className="footer">
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
      <Video className="video-desktop" videoSrc={curtainsVideoDesktop} />
    </div>
  </StyledPageHome>
);
