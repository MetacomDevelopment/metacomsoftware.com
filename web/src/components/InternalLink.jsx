import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const InternalLink = ({ slug, classes, children }) => (
  <Link to={`${slug === 'home' ? '/' : `/${slug}/`}`} className={classes}>
    {children}
  </Link>
);

InternalLink.defaultProps = {
  slug: '/',
  classes: '',
};

InternalLink.propTypes = {
  slug: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default InternalLink;
