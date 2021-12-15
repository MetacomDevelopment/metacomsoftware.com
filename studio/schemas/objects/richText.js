import { FaListAlt as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'object',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Alignment', name: 'alignmentSet' },
    { title: 'Section ID', name: 'sectionIdSet' },
    { title: 'Rich Text', name: 'richTextSet' },
  ],
  fields: [
    {
      title: 'Text Alignment',
      description: 'Choose an alignment for the rich text section...',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
          { title: 'Justify', value: 'justify' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'left',
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
