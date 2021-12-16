import { FaFileInvoice as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Navbars',
  name: 'navbars',
  type: 'document',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'CTA', name: 'primaryNavCtaSet' },
    { title: 'Menu', name: 'primaryNavLinksSet' },
    { title: 'NAP', name: 'secondaryNavNapSet' },
    { title: 'Socials', name: 'secondaryNavSocialSet' },
  ],
  fields: [
    {
      title: 'Button Label',
      description:
        'Enter the label for the primary call to action button (Example: "Request Appointment")',
      name: 'primaryNavCtaButtonLabel',
      type: 'string',
      fieldset: 'primaryNavCtaSet',
    },
    {
      title: 'Button Link',
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
      fieldset: 'secondaryNavNapSet',
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
      fieldset: 'secondaryNavSocialSet',
    },
  ],
};
