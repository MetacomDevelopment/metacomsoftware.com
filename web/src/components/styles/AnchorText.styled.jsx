import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledAnchorTextInternal = styled((props) => <Link {...props} />)`
  color: ${(props) => props.$color} !important;
  cursor: pointer !important;
  transition: all 0.25s !important;
  font-weight: ${(props) => props.$weight} !important;
  font-size: ${(props) => props.$size} !important;
  line-height: ${(props) => props.$lineHeight} !important;
  &:hover {
    color: ${(props) => props.$colorHover} !important;
    cursor: pointer !important;
    transition: all 0.25s !important;
    font-weight: ${(props) => props.$weightHover} !important;
    font-size: ${(props) => props.$sizeHover} !important;
    line-height: ${(props) => props.$lineHeightHover} !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  i,
  span {
    color: ${(props) => props.$color} !important;
    cursor: pointer !important;
    transition: all 0.25s !important;
    font-weight: ${(props) => props.$weight} !important;
    font-size: ${(props) => props.$size} !important;
    line-height: ${(props) => props.$lineHeight} !important;

    &:hover,
    &:focus {
      color: ${(props) => props.$colorHover} !important;
      cursor: pointer !important;
      transition: all 0.25s !important;
      font-weight: ${(props) => props.$weightHover} !important;
      font-size: ${(props) => props.$sizeHover} !important;
      line-height: ${(props) => props.$lineHeightHover} !important;
    }
    &:active {
      color: ${(props) => props.$colorHover} !important;
      cursor: pointer !important;
      transition: all 0.25s !important;
      font-weight: ${(props) => props.$weightHover} !important;
      font-size: ${(props) => props.$sizeHover} !important;
      line-height: ${(props) => props.$lineHeightHover} !important;
    }
  }
`;

export const StyledAnchorTextExternal = styled.a`
  color: ${(props) => props.$color} !important;
  cursor: pointer !important;
  transition: all 0.25s !important;
  font-weight: ${(props) => props.$weight} !important;
  font-size: ${(props) => props.$size} !important;
  line-height: ${(props) => props.$lineHeight} !important;
  &:hover {
    color: ${(props) => props.$colorHover} !important;
    cursor: pointer !important;
    transition: all 0.25s !important;
    font-weight: ${(props) => props.$weightHover} !important;
    font-size: ${(props) => props.$sizeHover} !important;
    line-height: ${(props) => props.$lineHeightHover} !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  i,
  span {
    color: ${(props) => props.$color} !important;
    cursor: pointer !important;
    transition: all 0.25s !important;
    font-weight: ${(props) => props.$weight} !important;
    font-size: ${(props) => props.$size} !important;
    line-height: ${(props) => props.$lineHeight} !important;
    &:hover {
      color: ${(props) => props.$colorHover} !important;
      cursor: pointer !important;
      transition: all 0.25s !important;
      font-weight: ${(props) => props.$weightHover} !important;
      font-size: ${(props) => props.$sizeHover} !important;
      line-height: ${(props) => props.$lineHeightHover} !important;
    }
  }
`;
