import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const CardStackedIcons = ({
  iconSize,
  iconBottom,
  iconBottomColor,
  iconTop,
  iconTopColor,
  title,
  description,
}) => {
  return (
    <Container>
      <Container className={`fa-stack ${iconSize} mb-3`}>
        <i className={`${iconBottom} fa-stack-2x ${iconBottomColor}`}></i>
        <i className={`${iconTop} fa-stack-1x ${iconTopColor} fa-inverse`}></i>
      </Container>
      <Container>
        <h3>{title}</h3>
        <p>{description}</p>
      </Container>
    </Container>
  );
};

CardStackedIcons.defaultProps = {
  iconSize: 'fa-2x',
  iconBottom: 'fas fa-circle',
  iconBottomColor: 'text-primary',
  iconTop: 'fas fa-comments',
  iconTopColor: 'text-white',
  title: 'Title',
  description: 'Description',
};

CardStackedIcons.propTypes = {
  iconSize: PropTypes.string,
  iconBottom: PropTypes.string,
  iconBottomColor: PropTypes.string,
  iconTop: PropTypes.string,
  iconTopColor: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CardStackedIcons;
