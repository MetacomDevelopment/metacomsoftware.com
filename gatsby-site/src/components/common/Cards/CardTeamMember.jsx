import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const CardTeamMember = ({ children, name, position }) => {
  return (
    <Container>
      {children}
      <Container>
        <h3>{name}</h3>
        <p>{position}</p>
      </Container>
    </Container>
  );
};

CardTeamMember.defaultProps = {
  name: 'Name',
  position: 'Position',
};

CardTeamMember.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
};

export default CardTeamMember;
