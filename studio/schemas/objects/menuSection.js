import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Menu Section',
  name: 'menuSection',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Menu Section',
      name: 'menuSectionSet',
    },
  ],
  fields: [
    {
      title: 'Choose a Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [{ title: 'List', value: 'list' }],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      title: 'ID Name',
      description: 'Pick an ID name for the section (Example: "menu")',
      name: 'idName',
      type: 'string',
    },
    {
      title: 'Add Categories',
      name: 'category',
      type: 'array',
      of: [{ type: 'menuCategory' }],
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
        title: `Menu: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
