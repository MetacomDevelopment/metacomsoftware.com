import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const ButtonInternalLink = ({ btnLink, btnLabel, btnSolid }) => {
  const solid = 'btn btn-xl drop-shadow';
  const outline = 'btn btn-outline-light btn-xl-outline drop-shadow-dark';

  return (
    <Link to={btnLink} className={btnSolid ? solid : outline}>
      <span className="font-weight-bold no-drop-shadow">{btnLabel}</span>
    </Link>
  );
};

ButtonInternalLink.defaultProps = {
  btnLink: `/`,
  btnLabel: `Learn More`,
  btnSolid: true,
};

ButtonInternalLink.propTypes = {
  btnLink: PropTypes.string,
  btnLabel: PropTypes.string,
  btnSolid: PropTypes.bool,
};

export default ButtonInternalLink;
