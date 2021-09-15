import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { useSanity } from '../hooks';

const StyledTextLinkInternal = styled((props) => <Link {...props} />)`
  color: ${(props) => props.color} !important;
  cursor: pointer !important;
  transition: all 0.25s !important;
  font-weight: ${(props) => props.weight} !important;
  &:hover {
    color: ${(props) => props.colorHover} !important;
    cursor: pointer !important;
    transition: all 0.25s !important;
    font-weight: ${(props) => props.weight} !important;
  }
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    color: ${(props) => props.color} !important;
    cursor: pointer !important;
    transition: all 0.25s !important;
    font-weight: ${(props) => props.weight} !important;

    &:hover,
    &:active,
    &:focus {
      color: ${(props) => props.colorHover} !important;
      cursor: pointer !important;
      transition: all 0.25s !important;
      font-weight: ${(props) => props.weight} !important;
    }
    &.active {
      color: ${(props) => props.colorHover} !important;
      cursor: pointer !important;
      transition: all 0.25s !important;
      font-weight: bold !important;
    }
  }
`;

const StyledTextLinkExternal = styled.a`
  color: ${(props) => props.color} !important;
  cursor: pointer !important;
  transition: all 0.25s !important;
  font-weight: ${(props) => props.weight} !important;
  &:hover {
    color: ${(props) => props.colorHover} !important;
    cursor: pointer !important;
    transition: all 0.25s !important;
    font-weight: ${(props) => props.weight} !important;
  }
`;

const TextLink = ({ type, to, href, light, weight, children }) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  switch (type) {
    default:
      return (
        <StyledTextLinkInternal
          to={to}
          light={light}
          weight={weight}
          color={light ? accent.light.color : accent.default.color}
          colorHover={light ? accent.default.color : accent.light.color}
          activeClassName="active"
        >
          {children}
        </StyledTextLinkInternal>
      );
    case 'internal':
      return (
        <StyledTextLinkInternal
          to={to}
          light={light}
          weight={weight}
          color={light ? accent.light.color : accent.default.color}
          colorHover={light ? accent.default.color : accent.light.color}
          activeClassName="active"
        >
          {children}
        </StyledTextLinkInternal>
      );
    case 'external':
      return (
        <StyledTextLinkExternal
          href={href}
          light={light}
          weight={weight}
          color={light ? accent.light.color : accent.default.color}
          colorHover={light ? accent.default.color : accent.light.color}
        >
          {children}
        </StyledTextLinkExternal>
      );
  }
};
export default TextLink;
