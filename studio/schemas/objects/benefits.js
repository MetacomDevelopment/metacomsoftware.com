import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Benefits',
  name: 'benefits',
  type: 'object',
  icon,
  groups: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'ID', name: 'idSet' },
    { title: 'Header', name: 'headerSet' },
    { title: 'Benefits', name: 'benefitsSet' },
  ],
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [{ title: 'Icons', value: 'icons' }],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'layoutSet',
    },
    {
      title: 'ID Name',
      description: 'Pick an ID name for the section (Example: "features")',
      name: 'idName',
      type: 'string',
      group: 'idSet',
    },
    {
      title: 'Header',
      name: 'header',
      type: 'header',
      group: 'headerSet',
    },
    {
      title: 'Benefit',
      name: 'benefit',
      type: 'array',
      of: [{ type: 'benefit' }],
      group: 'benefitsSet',
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
        title: `Benefits: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
