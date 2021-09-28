import { FaFileInvoice as icon } from 'react-icons/fa';

export default {
  title: 'Navbars',
  name: 'navbars',
  type: 'document',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Navbars',
      name: 'navbarsSet',
    },
  ],
  fields: [
    {
      title: 'Navbar Items',
      description:
        'Add items to the primary navbar: dropdown menus with links and/or single links.',
      name: 'navItem',
      type: 'array',
      of: [{ type: 'navItem' }],
    },
    {
      title: 'Contact Links',
      description: 'Add contact links to the secondary navbar.',
      name: 'contactLinks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'nap',
            },
          ],
        },
      ],
    },
    {
      title: 'Social Media Links',
      description: 'Add social links to the secondary navbar.',
      name: 'socialLinks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'social',
            },
          ],
        },
      ],
    },
  ],
};
