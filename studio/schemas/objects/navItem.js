import { FaFileInvoice as icon } from 'react-icons/fa';

export default {
  title: 'Navbar Items',
  name: 'navItem',
  type: 'object',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Navbar Items',
      name: 'navItemSet',
    },
  ],
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single Link', value: 'single' },
          { title: 'Dropdown Links', value: 'dropdown' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      title: 'Navbar: Dropdown Links',
      description: 'Create a dropdown menu and add navigational links',
      name: 'dropdowns',
      type: 'array',
      of: [{ type: 'dropdown' }],
      hidden: ({ parent }) => !(parent?.type === 'dropdown'),
    },
    {
      title: 'Navbar: Single Link',
      description: 'Create a single navigational link',
      name: 'pageLinks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'page',
            },
          ],
        },
      ],
      hidden: ({ parent }) => !(parent?.type === 'single'),
    },
  ],
};
