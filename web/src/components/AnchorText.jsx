import React from 'react';

import {
  StyledAnchorTextInternal,
  StyledAnchorTextExternal,
} from './styles/AnchorText.styled';

const AnchorText = ({
  type,
  to,
  href,
  children,
  color,
  colorHover,
  weight,
  weightHover,
  size,
  sizeHover,
  lineHeight,
  lineHeightHover,
}) => {
  switch (type) {
    default:
      return (
        <StyledAnchorTextInternal
          to={to}
          color={color}
          colorHover={colorHover}
          weight={weight}
          weightHover={weightHover}
          size={size}
          sizeHover={sizeHover}
          lineHeight={lineHeight}
          lineHeightHover={lineHeightHover}
          activeClassName="active"
        >
          {children}
        </StyledAnchorTextInternal>
      );
    case 'internal':
      return (
        <StyledAnchorTextInternal
          to={to}
          color={color}
          colorHover={colorHover}
          weight={weight}
          weightHover={weightHover}
          size={size}
          sizeHover={sizeHover}
          lineHeight={lineHeight}
          lineHeightHover={lineHeightHover}
          activeClassName="active"
        >
          {children}
        </StyledAnchorTextInternal>
      );
    case 'external':
      return (
        <StyledAnchorTextExternal
          href={href}
          color={color}
          colorHover={colorHover}
          weight={weight}
          weightHover={weightHover}
          size={size}
          sizeHover={sizeHover}
          lineHeight={lineHeight}
          lineHeightHover={lineHeightHover}
        >
          {children}
        </StyledAnchorTextExternal>
      );
  }
};
export default AnchorText;
