import React from 'react';

import { EmployeesImages } from '.';

const Employees = ({ block, raw, index }) => {
  const {
    layout,
    idName,
    headline,
    tagline,
    _rawDescription,
    employee,
    image,
  } = block;

  switch (layout) {
    case 'images':
      return (
        <EmployeesImages
          block={block}
          raw={raw}
          index={index}
          idName={idName}
          headline={headline}
          tagline={tagline}
          _rawDescription={_rawDescription}
          employee={employee}
          image={image}
        />
      );
    default:
      return (
        <EmployeesImages
          block={block}
          raw={raw}
          index={index}
          idName={idName}
          headline={headline}
          tagline={tagline}
          _rawDescription={_rawDescription}
          employee={employee}
          image={image}
        />
      );
  }
};

export default Employees;
