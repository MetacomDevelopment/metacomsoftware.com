import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ type, children, containerStyling, bg }) => {
  switch (type) {
    default:
      return (
        <div className={`mx-auto sm:px-6 lg:px-8 ${containerStyling}`}>
          {children}
        </div>
      );
    case 'page':
      return (
        <div className={`${bg}`}>
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      );
    case 'full':
      return (
        <div className={`mx-auto sm:px-6 lg:px-8 ${containerStyling}`}>
          {children}
        </div>
      );
    case 'sm':
      return (
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerStyling}`}
        >
          {children}
        </div>
      );
    case 'lg':
      return (
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerStyling}`}
        >
          <div className="max-w-3xl mx-auto">{children}</div>
        </div>
      );
    case 'breaks':
      return (
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerStyling}`}
        >
          {children}
        </div>
      );
  }
};

Container.defaultProps = {
  type: `sm`,
};

Container.propTypes = {
  type: PropTypes.string,
};

export default Container;
