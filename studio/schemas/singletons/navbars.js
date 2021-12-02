import { FaFileInvoice as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Navbars',
  name: 'navbars',
  type: 'document',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Primary Navbar', name: 'primaryNavSet' },
    { title: 'Secondary Navbar', name: 'secondaryNavSet' },
  ],
  fields: [
    {
      title: 'Navbar Items',
      description:
        'Add items to the primary navbar: dropdown menus with links and/or single links.',
      name: 'navItem',
      type: 'array',
      of: [{ type: 'navItem' }],
      fieldset: 'primaryNavSet',
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
      fieldset: 'secondaryNavSet',
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
      fieldset: 'secondaryNavSet',
    },
  ],
};
