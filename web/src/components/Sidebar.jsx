import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import {
  Section,
  FadeIn,
  Form,
  SidebarListServices,
  SidebarCta,
  SidebarTestimonial,
} from '.';

const Sidebar = ({ sidebarType }) => {
  switch (sidebarType) {
    case 'service':
      return (
        <aside className="hidden pt-12 lg:flex lg:h-full lg:pt-0">
          <FadeIn classes="space-y-20 lg:h-full">
            <Form formName="form-sidebar" />
            <SidebarListServices />
          </FadeIn>
        </aside>
      );
    case 'location':
      return (
        <aside className="hidden pt-12 lg:flex lg:h-full lg:pt-0">
          <FadeIn classes="space-y-20 lg:h-full">
            <Form formName="form-sidebar" />
            <SidebarListServices />
          </FadeIn>
        </aside>
      );
    case 'post':
      return (
        <aside className="hidden pt-12 lg:flex lg:h-full lg:pt-0">
          <FadeIn classes="space-y-20 lg:h-full">
            <Form formName="form-sidebar" />
            <SidebarListServices />
          </FadeIn>
        </aside>
      );
    default:
      return (
        <aside className="hidden pt-12 lg:flex lg:h-full lg:pt-0">
          <FadeIn classes="space-y-20 lg:h-full">
            <Form formName="form-sidebar" />
            <SidebarListServices />
          </FadeIn>
        </aside>
      );
  }
};

export default Sidebar;
