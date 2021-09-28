import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Hero',
      name: 'heroSet',
    },
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
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Tagline',
      name: 'tagline',
      type: 'portableTextBody',
    },
    {
      title: 'Background Image',
      name: 'bgImg',
      type: 'imageAlt',
    },
    {
      title: 'Testimonial',
      name: 'testimonial',
      type: 'testimonial',
      hidden: ({ parent }) => !(parent?.layout === 'testimonial'),
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
