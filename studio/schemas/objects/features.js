import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Features',
  name: 'features',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Features',
      name: 'featuresSet',
    },
  ],
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [{ title: 'Alternating', value: 'alternating' }],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      title: 'Feature',
      name: 'feature',
      type: 'array',
      of: [{ type: 'feature' }],
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
        title: `Features: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
