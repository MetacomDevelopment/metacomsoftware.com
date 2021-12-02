import { FaFileInvoice as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Footers',
  name: 'footers',
  type: 'document',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Column: First', name: 'colFirstSet' },
    { title: 'Columns: Middle', name: 'colMiddleSet' },
    { title: 'Column: Last', name: 'colLastSet' },
  ],
  fields: [
    {
      title: 'Tagline',
      description: 'Add a tagline to the footer (appears below the logo).',
      name: 'tagline',
      type: 'string',
      fieldset: 'colFirstSet',
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
      fieldset: 'colFirstSet',
    },
    {
      title: 'Footer Items',
      description: 'Add items to the footer: columns with links.',
      name: 'footerItem',
      type: 'array',
      of: [{ type: 'footerItem' }],
      fieldset: 'colMiddleSet',
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
      fieldset: 'colLastSet',
    },
  ],
};
