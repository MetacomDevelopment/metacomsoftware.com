import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Service',
  name: 'service',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Service',
      name: 'serviceSet',
    },
  ],
  fields: [
    {
      title: 'Title',
      description: 'Enter the title of the service.',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Image',
      description: 'Select the background image.',
      name: 'image',
      type: 'imageAlt',
    },
    {
      title: 'Internal Link',
      description: 'Select the internal link.',
      name: 'link',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
    },
  ],
};
