import { FaFileInvoice as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Footers',
  name: 'footers',
  type: 'document',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'First Column', name: 'colFirstSet' },
    { title: 'Middle Columns', name: 'colMiddleSet' },
    { title: 'Last Column', name: 'colLastSet' },
  ],
  fields: [
    {
      title: 'Tagline',
      description: 'Add a tagline below the logo.',
      name: 'tagline',
      type: 'string',
      fieldset: 'colFirstSet',
    },
    {
      title: 'Social Media Links',
      description: 'Add social links below the tagline.',
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
      title: 'Middle Columns',
      description: 'Add middle columns to the footer.',
      name: 'footerItem',
      type: 'array',
      of: [{ type: 'footerItem' }],
      fieldset: 'colMiddleSet',
    },
    {
      title: 'Contact Links',
      description: 'Add contact links to the last column in the footer.',
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
