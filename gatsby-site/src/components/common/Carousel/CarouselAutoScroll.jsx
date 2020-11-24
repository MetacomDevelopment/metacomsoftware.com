import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const CarouselAutoScroll = ({ children }) => {
  return (
    <Container>
      <div class="image-scroller">
        <div class="image-ticker-fade" aria-hidden="true"></div>
        <div class="image-ticker-container">{children}</div>
      </div>
    </Container>
  );
};

CarouselAutoScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarouselAutoScroll;
