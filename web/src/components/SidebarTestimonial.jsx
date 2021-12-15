import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const SidebarTestimonial = ({
  testimonial,
  imgTestimonial,
  imgAlt,
  author,
  position,
  company,
}) => (
  <div className="space-y-6 border rounded-xl shadow-xl p-3 lg:p-5">
    <div className="flex flex-row justify-center mx-auto text-center">
      <i className="fas fa-2x fa-star text-yellow-300 drop-shadow-light" />
      <i className="fas fa-2x fa-star text-yellow-300 drop-shadow-light" />
      <i className="fas fa-2x fa-star text-yellow-300 drop-shadow-light" />
      <i className="fas fa-2x fa-star text-yellow-300 drop-shadow-light" />
      <i className="fas fa-2x fa-star text-yellow-300 drop-shadow-light" />
    </div>
    <h3 className="text-center">5-Star Staffing Agency Review</h3>
    <p className="italic text-zinc-400">"{testimonial}"</p>
    <div className="grid grid-cols-4 gap-x-2 content-center">
      <div className="col-span-1 mr-3">
        <GatsbyImage
          image={imgTestimonial}
          alt={imgAlt}
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>
      <div className="col-span-3 flex flex-col justify-center font-bold">
        <p className="text-primary">{author},</p>
        <p className="text-primary">{position}</p>
        <p className="text-zinc-500">{company}</p>
      </div>
    </div>
  </div>
);

export default SidebarTestimonial;
