import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'object',
  icon,
  groups: [
    { title: 'ID', name: 'sectionIdSet' },
    { title: 'Sidebar', name: 'sidebarSet' },
    { title: 'Alignment', name: 'alignmentSet' },
    { title: 'Rich Text', name: 'richTextSet' },
  ],
  fields: [
    {
      title: 'ID Name',
      description: 'Pick an ID name for the section (Example: "features")',
      name: 'idName',
      type: 'string',
      group: 'sectionIdSet',
    },
    {
      title: 'Sidebar',
      description: 'Choose a sidebar for the rich text section...',
      name: 'sidebarType',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Service', value: 'service' },
          { title: 'Location', value: 'location' },
          { title: 'Post', value: 'post' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'none',
      group: 'sidebarSet',
    },
    {
      title: 'Text Alignment',
      description: 'Choose an alignment for the rich text section...',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'text-left' },
          { title: 'Center', value: 'text-center' },
          { title: 'Right', value: 'text-right' },
          { title: 'Justify', value: 'text-justify' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'text-left',
      group: 'alignmentSet',
    },
    {
      title: 'Editor',
      description: 'Use the editor to create a rich text section.',
      name: 'body',
      type: 'portableText',
      group: 'richTextSet',
    },
  ],
  preview: {
    select: {
      title: 'alignment',
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
