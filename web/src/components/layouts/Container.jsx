import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ type, children, classes }) => {
  switch (type) {
    default:
      return (
        <div className={`mx-auto sm:px-6 lg:px-8 ${classes}`}>{children}</div>
      );
    case 'img':
      return (
        <div className={`mx-auto w-full aspect-w-12 aspect-h-7 ${classes}`}>
          {children}
        </div>
      );
    case 'full':
      return (
        <div className={`mx-auto sm:px-6 lg:px-8 ${classes}`}>{children}</div>
      );
    case 'sm':
      return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${classes}`}>
          {children}
        </div>
      );
    case 'lg':
      return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${classes}`}>
          <div className="max-w-3xl mx-auto">{children}</div>
        </div>
      );
    case 'breaks':
      return (
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${classes}`}>
          {children}
        </div>
      );
  }
};

Container.defaultProps = {
  type: `sm`,
  classes: ``,
};

Container.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
