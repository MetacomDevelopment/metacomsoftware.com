import { FaFileInvoice as icon } from 'react-icons/fa';

export default {
  title: 'Footers',
  name: 'footers',
  type: 'document',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Footers',
      name: 'footersSet',
    },
  ],
  fields: [
    {
      title: 'Tagline',
      description: 'Add a tagline to the footer (appears below the logo).',
      name: 'tagline',
      type: 'string',
    },
    {
      title: 'Footer Items',
      description: 'Add items to the footer: columns with links.',
      name: 'footerItem',
      type: 'array',
      of: [{ type: 'footerItem' }],
    },
    {
      title: 'Contact Links',
      description: 'Add contact links to the footer.',
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
      description: 'Add social links to the footer.',
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
