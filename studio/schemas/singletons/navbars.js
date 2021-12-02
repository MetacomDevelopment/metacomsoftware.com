import { FaFileInvoice as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Navbars',
  name: 'navbars',
  type: 'document',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Primary Nav: CTA', name: 'primaryNavCtaSet' },
    { title: 'Primary Nav: Links', name: 'primaryNavLinksSet' },
    { title: 'Secondary Nav: Links', name: 'secondaryNavSet' },
  ],
  fields: [
    {
      title: 'CTA Button Label',
      description:
        'Enter the label for the primary call to action button (Example: "Request Appointment")',
      name: 'primaryNavCtaButtonLabel',
      type: 'string',
      fieldset: 'primaryNavCtaSet',
    },
    {
      title: 'CTA Button Link',
      description:
        'Select the internal link for the primary call to action button (Most likely the contact page)',
      name: 'primaryNavCtaButtonLink',
      type: 'reference',
      to: [{ type: 'page' }],
      fieldset: 'primaryNavCtaSet',
    },
    {
      title: 'Page Links',
      description:
        'Add items to the primary navbar: dropdown menus with links and/or single links.',
      name: 'navItem',
      type: 'array',
      of: [{ type: 'navItem' }],
      fieldset: 'primaryNavLinksSet',
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
