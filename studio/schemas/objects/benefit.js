import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Benefit',
  name: 'benefit',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  groups: [
    {
      title: 'Benefit',
      name: 'benefitSet',
    },
  ],
  fields: [
    {
      title: 'Icon',
      description: 'Enter the icon filename.',
      name: 'icon',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
    },
    {
      title: 'Info',
      name: 'info',
      type: 'string',
    },
  ],
};
