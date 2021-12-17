import { FaListAlt as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'object',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Sidebar', name: 'sidebarSet' },
    { title: 'Alignment', name: 'alignmentSet' },
    { title: 'Section ID', name: 'sectionIdSet' },
    { title: 'Rich Text', name: 'richTextSet' },
  ],
  fields: [
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
      fieldset: 'sidebarSet',
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
      fieldset: 'alignmentSet',
    },
    {
      title: 'ID Name',
      description: 'Pick an ID name for the section (Example: "features")',
      name: 'idName',
      type: 'string',
      fieldset: 'sectionIdSet',
    },
    {
      title: 'Editor',
      description: 'Use the editor to create a rich text section.',
      name: 'body',
      type: 'portableTextBody',
      fieldset: 'richTextSet',
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
