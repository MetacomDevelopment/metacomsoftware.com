import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { Section, FadeIn, Form, SidebarList, SidebarTestimonial } from '.';

const Sidebar = ({ sidebarType }) => {
  switch (sidebarType) {
    case 'service':
      return (
        <aside className="lg:h-full pt-12 lg:pt-0 hidden lg:flex">
          <FadeIn classes="space-y-20 lg:h-full">
            <Form formName="form-sidebar" />
            {/* <SidebarTestimonial
              testimonial="Rich and I collaborated several times over the past year to fill positions within my organization. As a recruiter Rich was very professional, providing high-caliber candidates, following up in a timely fashion, and keeping me advised as situations changed with each individual candidate. Rich provided solid advice, sometimes even when it may not have been the best thing for him, but his goal was a long term relationship with me and my organization, not a short term win for himself, and that showed in everything he did."
              imgTestimonial={imgTestimonial}
              imgAlt="NEED"
              author="Mike Eglim"
              position="Director of Supply Chain"
              company="Tegra Medical"
            /> */}
            {/* <SidebarList /> */}
          </FadeIn>
        </aside>
      );
    case 'location':
      return (
        <aside className="lg:h-full pt-12 lg:pt-0 hidden lg:flex">
          <FadeIn classes="space-y-20 lg:h-full">
            <Form formName="form-sidebar" />
            {/* <SidebarTestimonial
              testimonial="Rich and I collaborated several times over the past year to fill positions within my organization. As a recruiter Rich was very professional, providing high-caliber candidates, following up in a timely fashion, and keeping me advised as situations changed with each individual candidate. Rich provided solid advice, sometimes even when it may not have been the best thing for him, but his goal was a long term relationship with me and my organization, not a short term win for himself, and that showed in everything he did."
              imgTestimonial={imgTestimonial}
              imgAlt="NEED"
              author="Mike Eglim"
              position="Director of Supply Chain"
              company="Tegra Medical"
            /> */}
            {/* <SidebarList /> */}
          </FadeIn>
        </aside>
      );
    case 'post':
      return (
        <aside className="lg:h-full pt-12 lg:pt-0 hidden lg:flex">
          <FadeIn classes="space-y-20 lg:h-full">
            <Form formName="form-sidebar" />
            {/* <SidebarTestimonial
              testimonial="Rich and I collaborated several times over the past year to fill positions within my organization. As a recruiter Rich was very professional, providing high-caliber candidates, following up in a timely fashion, and keeping me advised as situations changed with each individual candidate. Rich provided solid advice, sometimes even when it may not have been the best thing for him, but his goal was a long term relationship with me and my organization, not a short term win for himself, and that showed in everything he did."
              imgTestimonial={imgTestimonial}
              imgAlt="NEED"
              author="Mike Eglim"
              position="Director of Supply Chain"
              company="Tegra Medical"
            /> */}
            {/* <SidebarList /> */}
          </FadeIn>
        </aside>
      );

    default:
      return (
        <aside className="lg:h-full pt-12 lg:pt-0 hidden lg:flex">
          <FadeIn classes="space-y-20 lg:h-full">
            <Form formName="form-sidebar" />
            {/* <SidebarTestimonial
              testimonial="Rich and I collaborated several times over the past year to fill positions within my organization. As a recruiter Rich was very professional, providing high-caliber candidates, following up in a timely fashion, and keeping me advised as situations changed with each individual candidate. Rich provided solid advice, sometimes even when it may not have been the best thing for him, but his goal was a long term relationship with me and my organization, not a short term win for himself, and that showed in everything he did."
              imgTestimonial={imgTestimonial}
              imgAlt="NEED"
              author="Mike Eglim"
              position="Director of Supply Chain"
              company="Tegra Medical"
            /> */}
            {/* <SidebarList /> */}
          </FadeIn>
        </aside>
      );
  }
};

export default Sidebar;
