import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Menu Category',
  name: 'menuCategory',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Menu Category',
      name: 'menuCategorySet',
    },
  ],
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableTextBody',
    },
    {
      title: 'Add Images',
      description: 'Please add (4) images',
      name: 'images',
      type: 'array',
      of: [{ type: 'imageAlt' }],
    },
    {
      title: 'Add Items',
      name: 'items',
      type: 'array',
      of: [{ type: 'menuItem' }],
    },
  ],
};
