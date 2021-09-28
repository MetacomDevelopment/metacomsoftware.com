import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledAnchorTextInternal = styled((props) => <Link {...props} />)`
  color: ${({ color }) => color} !important;
  cursor: pointer !important;
  transition: all 0.25s !important;
  font-weight: ${({ weight }) => weight} !important;
  font-size: ${({ size }) => size} !important;
  line-height: ${({ lineHeight }) => lineHeight} !important;
  &:hover {
    color: ${({ colorHover }) => colorHover} !important;
    cursor: pointer !important;
    transition: all 0.25s !important;
    font-weight: ${({ weightHover }) => weightHover} !important;
    font-size: ${({ sizeHover }) => sizeHover} !important;
    line-height: ${({ lineHeightHover }) => lineHeightHover} !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  i,
  span {
    color: ${({ color }) => color} !important;
    cursor: pointer !important;
    transition: all 0.25s !important;
    font-weight: ${({ weight }) => weight} !important;
    font-size: ${({ size }) => size} !important;
    line-height: ${({ lineHeight }) => lineHeight} !important;

    &:hover,
    &:focus {
      color: ${({ colorHover }) => colorHover} !important;
      cursor: pointer !important;
      transition: all 0.25s !important;
      font-weight: ${({ weightHover }) => weightHover} !important;
      font-size: ${({ sizeHover }) => sizeHover} !important;
      line-height: ${({ lineHeightHover }) => lineHeightHover} !important;
    }
    &:active {
      color: ${({ colorHover }) => colorHover} !important;
      cursor: pointer !important;
      transition: all 0.25s !important;
      font-weight: ${({ weightHover }) => weightHover} !important;
      font-size: ${({ sizeHover }) => sizeHover} !important;
      line-height: ${({ lineHeightHover }) => lineHeightHover} !important;
    }
  }
`;

export const StyledAnchorTextExternal = styled.a`
  color: ${({ color }) => color} !important;
  cursor: pointer !important;
  transition: all 0.25s !important;
  font-weight: ${({ weight }) => weight} !important;
  font-size: ${({ size }) => size} !important;
  line-height: ${({ lineHeight }) => lineHeight} !important;
  &:hover {
    color: ${({ colorHover }) => colorHover} !important;
    cursor: pointer !important;
    transition: all 0.25s !important;
    font-weight: ${({ weightHover }) => weightHover} !important;
    font-size: ${({ sizeHover }) => sizeHover} !important;
    line-height: ${({ lineHeightHover }) => lineHeightHover} !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  i,
  span {
    color: ${({ color }) => color} !important;
    cursor: pointer !important;
    transition: all 0.25s !important;
    font-weight: ${({ weight }) => weight} !important;
    font-size: ${({ size }) => size} !important;
    line-height: ${({ lineHeight }) => lineHeight} !important;
    &:hover {
      color: ${({ colorHover }) => colorHover} !important;
      cursor: pointer !important;
      transition: all 0.25s !important;
      font-weight: ${({ weightHover }) => weightHover} !important;
      font-size: ${({ sizeHover }) => sizeHover} !important;
      line-height: ${({ lineHeightHover }) => lineHeightHover} !important;
    }
  }
`;
