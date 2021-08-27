import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Testimonial = ({
  containerStyles,
  headerStyles,
  testimonialStyles,
  imgStyles,
  authorStyles,
  positionStyles,
  company,
  header,
  testimonial,
  imgTestimonial,
  imgAlt,
  author,
  position,
}) => (
  <div
    className={`space-y-6 border rounded-xl shadow-xl p-5 lg:p-5 ${containerStyles}`}
  >
    <div className="flex flex-row justify-center mx-auto text-center">
      <i className="fas fa-2x fa-star text-yellow-300 drop-shadow-light" />
      <i className="fas fa-2x fa-star text-yellow-300 drop-shadow-light" />
      <i className="fas fa-2x fa-star text-yellow-300 drop-shadow-light" />
      <i className="fas fa-2x fa-star text-yellow-300 drop-shadow-light" />
      <i className="fas fa-2x fa-star text-yellow-300 drop-shadow-light" />
    </div>
    <h3 className={`text-center ${headerStyles}`}>{header}</h3>
    <p className={`italic ${testimonialStyles}`}>"{testimonial}"</p>
    <div className="grid grid-cols-12 gap-x-2 content-center">
      <div className="col-span-3 lg:col-span-2 mr-3">
        <GatsbyImage
          image={imgTestimonial}
          alt={imgAlt}
          className={`w-full h-full object-cover rounded-full shadow-lg ${imgStyles}`}
        />
      </div>
      <div className="col-span-9 lg:col-span-10 flex flex-col justify-center font-bold">
        <p className={authorStyles}>{author},</p>
        <p className={positionStyles}>{`${position} at ${company}`}</p>
      </div>
    </div>
  </div>
);

export default Testimonial;
