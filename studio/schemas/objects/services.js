import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Services',
  name: 'services',
  type: 'object',
  icon,
  groups: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Header', name: 'headerSet' },
    { title: 'Services', name: 'servicesSet' },
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
      group: 'layoutSet',
    },
    {
      title: 'Header',
      name: 'header',
      type: 'header',
      group: 'headerSet',
    },
    {
      title: 'Service',
      name: 'service',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
      group: 'servicesSet',
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
