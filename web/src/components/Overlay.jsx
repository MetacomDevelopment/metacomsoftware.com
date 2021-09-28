import React from 'react';
import PropTypes from 'prop-types';

import { StyledOverlay } from './styles/Overlay.styled';

const Container = ({ overlay }) => (
  <StyledOverlay
    className="absolute inset-0"
    style={{ mixBlendMode: 'multiply' }}
    aria-hidden="true"
    overlay={overlay}
  />
);

export default Container;
