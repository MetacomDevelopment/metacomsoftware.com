import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'CTA',
  name: 'cta',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'CTA',
      name: 'ctaSet',
    },
  ],
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Full', value: 'full' },
          { title: 'Half', value: 'half' },
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
      title: 'Subheadline',
      name: 'subheadline',
      type: 'string',
      hidden: ({ parent }) => !(parent?.layout === 'full'),
    },
    {
      title: 'Tagline',
      name: 'tagline',
      type: 'string',
      hidden: ({ parent }) => !(parent?.layout === 'half'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableTextBody',
      hidden: ({ parent }) => !(parent?.layout === 'half'),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageAlt',
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
        title: `CTA: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
