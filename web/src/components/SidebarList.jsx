import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { useSanity } from '../hooks';
import { AnchorText, SidebarListServices } from '.';

const StyledLink = styled.a`
  color: ${(props) => props.$color} !important;
  font-weight: 500;
`;

const SidebarList = ({ type }) => {
  const { page, primary, secondary, accent, neutral, hero } = useSanity();

  switch (page.map((type) => type.pageType)) {
    case 'service':
      return <SidebarListServices />;
    case 'location':
      return <SidebarListServices />;
    case 'post':
      return <SidebarListServices />;
    default:
      return <SidebarListServices />;
  }
};

export default SidebarList;
