import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledAnchorTextInternal,
  StyledAnchorTextExternal,
} from './styles/AnchorText.styled';

const AnchorText = function ({
  type,
  to,
  href,
  children,
  classes,
  color,
  colorHover,
  weight,
  weightHover,
  size,
  sizeHover,
  lineHeight,
  lineHeightHover,
}) {
  switch (type) {
    default:
      return (
        <StyledAnchorTextInternal
          to={to}
          $color={color}
          $colorHover={colorHover}
          $weight={weight}
          $weightHover={weightHover}
          $size={size}
          $sizeHover={sizeHover}
          $lineHeight={lineHeight}
          $lineHeightHover={lineHeightHover}
          className={classes}
          activeClassName="active"
        >
          {children}
        </StyledAnchorTextInternal>
      );
    case 'internal':
      return (
        <StyledAnchorTextInternal
          to={`${to === 'home' ? '/' : `/${to}/`}`}
          $color={color}
          $colorHover={colorHover}
          $weight={weight}
          $weightHover={weightHover}
          $size={size}
          $sizeHover={sizeHover}
          $lineHeight={lineHeight}
          $lineHeightHover={lineHeightHover}
          className={classes}
          activeClassName="active"
        >
          {children}
        </StyledAnchorTextInternal>
      );
    case 'external':
      return (
        <StyledAnchorTextExternal
          href={href}
          $color={color}
          $colorHover={colorHover}
          $weight={weight}
          $weightHover={weightHover}
          $size={size}
          $sizeHover={sizeHover}
          $lineHeight={lineHeight}
          $lineHeightHover={lineHeightHover}
          target="_blank"
          rel="noopener"
        >
          {children}
        </StyledAnchorTextExternal>
      );
  }
};

AnchorText.defaultProps = {
  type: 'internal',
  to: '/',
  classes: '',
};

AnchorText.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default AnchorText;
