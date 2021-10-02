import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Rich Text',
      name: 'richTextSet',
    },
  ],
  fields: [
    {
      title: 'Layout',
      description: 'Choose a layout for the rich text section...',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Brand', value: 'brand' },
          { title: 'Service', value: 'service' },
          { title: 'Location', value: 'location' },
          { title: 'Post', value: 'post' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      title: 'Editor',
      description: 'Use the editor to create a rich text section.',
      name: 'body',
      type: 'portableTextBody',
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
        title: `Rich Text: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
