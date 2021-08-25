import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ type, children, classes }) => {
  switch (type) {
    default:
      return <section className={`my-24 ${classes}`}>{children}</section>;
    case 'my':
      return <section className={`my-24 ${classes}`}>{children}</section>;
    case 'mt':
      return <section className={`mt-24 ${classes}`}>{children}</section>;
    case 'mb':
      return <section className={`mb-24 ${classes}`}>{children}</section>;
    case 'none':
      return <section className={`my-0 ${classes}`}>{children}</section>;
  }
};

Section.defaultProps = {
  type: `my`,
  classes: ``,
};

Section.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
