import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSanity } from '../hooks';
import { Footer, Header } from '.';
import './layout.css';

const GlobalStyles = styled.div`
  h2 {
    color: ${(props) => props.$h2Color};
  }
  h3 {
    color: ${(props) => props.$h3Color};
  }
  h4 {
    color: ${(props) => props.$h4Color};
  }
  h5 {
    color: ${(props) => props.$h5Color};
  }
  h6 {
    color: ${(props) => props.$h6Color};
  }
  a {
    color: ${(props) => props.$linkColor};
    font-weight: bold;
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.$linkColorHover};
      transition: all 0.25s;
    }
  }
`;

const Layout = function ({ pageType, children }) {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  switch (pageType) {
    case 'brand':
      return (
        <div>
          <Header />
          <GlobalStyles
            $linkColor={accent.default.color}
            $linkColorHover={accent.light.color}
            $h2Color={primary.dark.color}
            $h3Color={secondary.dark.color}
            $h4Color={neutral.dark.color}
            $h5Color={neutral.default.color}
            $h6Color={neutral.default.color}
          >
            {/* <div className="mt-[150px] md:mt-[144px] lg:mt-[144px] xl:mt-[144px]"> */}
            <main>{children}</main>
            {/* </div> */}
          </GlobalStyles>
          <Footer />
        </div>
      );
    case 'service':
      return (
        <div>
          <Header />
          <GlobalStyles
            $linkColor={accent.default.color}
            $linkColorHover={accent.light.color}
            $h2Color={primary.dark.color}
            $h3Color={secondary.dark.color}
            $h4Color={neutral.dark.color}
            $h5Color={neutral.default.color}
            $h6Color={neutral.default.color}
          >
            {/* <div className="mt-[150px] md:mt-[144px] lg:mt-[144px] xl:mt-[144px]"> */}
            <main>{children}</main>
            {/* </div> */}
          </GlobalStyles>
          <Footer />
        </div>
      );
    case 'location':
      return (
        <div>
          <Header />
          <GlobalStyles
            $linkColor={accent.default.color}
            $linkColorHover={accent.light.color}
            $h2Color={primary.dark.color}
            $h3Color={secondary.dark.color}
            $h4Color={neutral.dark.color}
            $h5Color={neutral.default.color}
            $h6Color={neutral.default.color}
          >
            {/* <div className="mt-[150px] md:mt-[144px] lg:mt-[144px] xl:mt-[144px]"> */}
            <main>{children}</main>
            {/* </div> */}
          </GlobalStyles>
          <Footer />
        </div>
      );
    case 'post':
      return (
        <div>
          <Header />
          <GlobalStyles
            $linkColor={accent.default.color}
            $linkColorHover={accent.light.color}
            $h2Color={primary.dark.color}
            $h3Color={secondary.dark.color}
            $h4Color={neutral.dark.color}
            $h5Color={neutral.default.color}
            $h6Color={neutral.default.color}
          >
            {/* <div className="mt-[150px] md:mt-[144px] lg:mt-[144px] xl:mt-[144px]"> */}
            <main>{children}</main>
            {/* </div> */}
          </GlobalStyles>
          <Footer />
        </div>
      );
    default:
      return (
        <div>
          <Header />
          <GlobalStyles
            $linkColor={accent.default.color}
            $linkColorHover={accent.light.color}
            $h2Color={primary.dark.color}
            $h3Color={secondary.dark.color}
            $h4Color={neutral.dark.color}
            $h5Color={neutral.default.color}
            $h6Color={neutral.default.color}
          >
            {/* <div className="mt-[150px] md:mt-[144px] lg:mt-[144px] xl:mt-[144px]"> */}
            <main>{children}</main>
            {/* </div> */}
          </GlobalStyles>
          <Footer />
        </div>
      );
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
