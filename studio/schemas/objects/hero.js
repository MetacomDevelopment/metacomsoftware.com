import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon,
  groups: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Header', name: 'headerSet' },
    { title: 'CTAs', name: 'ctasSet' },
    { title: 'BG Image', name: 'bgImageSet' },
    { title: 'Testimonial', name: 'testimonialSet' },
    { title: 'Graphic', name: 'graphicSet' },
  ],
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Centered', value: 'center' },
          { title: 'Testimonial', value: 'testimonial' },
          { title: 'Contact Form', value: 'form' },
          { title: 'Graphic', value: 'graphic' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'layoutSet',
    },
    {
      title: 'Headline Width',
      name: 'headlineWidth',
      type: 'string',
      options: {
        list: [
          { title: '0', value: 'max-w-0' },
          { title: 'None', value: 'max-w-None' },
          { title: 'XS', value: 'max-w-xs' },
          { title: 'SM', value: 'max-w-sm' },
          { title: 'MD', value: 'max-w-md' },
          { title: 'LG', value: 'max-w-lg' },
          { title: 'XL', value: 'max-w-xl' },
          { title: '2XL', value: 'max-w-2xl' },
          { title: '3XL', value: 'max-w-3xl' },
          { title: '4XL', value: 'max-w-4xl' },
          { title: '5XL', value: 'max-w-5xl' },
          { title: '6XL', value: 'max-w-6xl' },
          { title: '7XL', value: 'max-w-7xl' },
          { title: 'Full', value: 'max-w-full' },
          { title: 'Min', value: 'max-w-min' },
          { title: 'Max', value: 'max-w-max' },
          { title: 'Fit', value: 'max-w-fit' },
        ],
        layout: 'dropdown',
      },
      group: 'headerSet',
    },
    {
      title: 'Subheadline Width',
      name: 'subheadlineWidth',
      type: 'string',
      options: {
        list: [
          { title: '0', value: 'max-w-0' },
          { title: 'None', value: 'max-w-none' },
          { title: 'XS', value: 'max-w-xs' },
          { title: 'SM', value: 'max-w-sm' },
          { title: 'MD', value: 'max-w-md' },
          { title: 'LG', value: 'max-w-lg' },
          { title: 'XL', value: 'max-w-xl' },
          { title: '2XL', value: 'max-w-2xl' },
          { title: '3XL', value: 'max-w-3xl' },
          { title: '4XL', value: 'max-w-4xl' },
          { title: '5XL', value: 'max-w-5xl' },
          { title: '6XL', value: 'max-w-6xl' },
          { title: '7XL', value: 'max-w-7xl' },
          { title: 'Full', value: 'max-w-full' },
          { title: 'Min', value: 'max-w-min' },
          { title: 'Max', value: 'max-w-max' },
          { title: 'Fit', value: 'max-w-fit' },
        ],
        layout: 'dropdown',
      },
      group: 'headerSet',
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      group: 'headerSet',
    },
    {
      title: 'Subheadline',
      name: 'tagline',
      type: 'portableText',
      group: 'headerSet',
    },
    {
      title: 'Primary CTA Button Label',
      description:
        'Enter the label for the primary call to action button (Example: "Request Appointment")',
      name: 'primaryCtaButtonLabel',
      type: 'string',
      group: 'ctasSet',
    },
    {
      title: 'Primary CTA Button Link',
      description:
        'Select the internal link for the primary call to action button (Most likely the contact page)',
      name: 'primaryCtaButtonLink',
      type: 'reference',
      to: [{ type: 'page' }],
      group: 'ctasSet',
    },
    {
      title: 'Secondary CTA Button Label',
      description:
        'Enter the label for the secondary call to action button (Example: "See Details")',
      name: 'secondaryCtaButtonLabel',
      type: 'string',
      group: 'ctasSet',
    },
    {
      title: 'Secondary CTA Button Link',
      description:
        'Enter the ID name of the section to jump to (Example: "features")',
      name: 'secondaryCtaButtonLink',
      type: 'string',
      group: 'ctasSet',
    },
    {
      title: 'Background Image',
      name: 'bgImg',
      type: 'imageAlt',
      group: 'bgImageSet',
    },
    {
      title: 'Testimonial',
      name: 'testimonial',
      type: 'testimonial',
      hidden: ({ parent }) => !(parent?.layout === 'testimonial'),
      group: 'testimonialSet',
    },
    {
      title: 'Graphic',
      name: 'graphic',
      type: 'imageAlt',
      hidden: ({ parent }) => !(parent?.layout === 'graphic'),
      group: 'graphicSet',
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'portableText',
      hidden: ({ parent }) => !(parent?.layout === 'graphic'),
      group: 'graphicSet',
    },
  ],
  preview: {
    select: {
      title: 'layout',
      media: 'icon',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: `Hero: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
