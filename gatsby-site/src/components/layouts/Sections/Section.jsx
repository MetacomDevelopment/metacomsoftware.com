import React from 'react';

const Section = ({ props, sectionId }) => {
  return (
    <section id={sectionId} className="page-section">
      {props.children}
    </section>
  );
};

export default Section;
