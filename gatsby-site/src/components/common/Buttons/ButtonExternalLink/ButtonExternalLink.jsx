import React from 'react';
import PropTypes from 'prop-types';

const ButtonExternalLink = ({ btnLink, btnLabel, btnSolid }) => {
  const solid = 'btn btn-xl drop-shadow';
  const outline = 'btn btn-outline-light btn-xl-outline drop-shadow-dark';

  return (
    <a
      rel="nofollow"
      target="_blank"
      href={btnLink}
      className={btnSolid ? solid : outline}
    >
      <span className="drop-shadow">{btnLabel}</span>
    </a>
  );
};

ButtonExternalLink.defaultProps = {
  btnLink: `/`,
  btnLabel: `Learn More`,
  btnSolid: true,
};

ButtonExternalLink.propTypes = {
  btnLink: PropTypes.string,
  btnLabel: PropTypes.string,
  btnSolid: PropTypes.bool,
};

export default ButtonExternalLink;
