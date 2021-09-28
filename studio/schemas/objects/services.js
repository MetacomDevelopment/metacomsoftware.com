import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Services',
  name: 'services',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Services',
      name: 'servicesSet',
    },
  ],
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [{ title: 'Images', value: 'images' }],
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
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableTextBody',
    },
    {
      title: 'Service',
      name: 'service',
      type: 'array',
      of: [{ type: 'service' }],
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
        title: `Services: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
