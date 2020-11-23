import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const CardImage = ({ children, title, description }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  // function removeOpacity(e) {
  //   e.target.style.opacity = 0;
  //   e.target.style.content = 'red';
  // }
  return (
    <Container
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-light px-0"
    >
      <Container className="p-0 m-0">
        {children}
        <Container className={hovered ? 'service-hover-overlay' : ''}>
          <span
            className={hovered ? 'service-hover-text' : 'service-hide-text'}
          >
            {title}
          </span>
        </Container>
      </Container>

      <Container className="p-3">
        <h3>{title}</h3>
        <p>{description}</p>
      </Container>
    </Container>
  );
};

CardImage.defaultProps = {
  title: 'Title',
  description: 'Description',
};

CardImage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CardImage;
