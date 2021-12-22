import { FaFileInvoice as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Navbars',
  name: 'navbars',
  type: 'document',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Theme', name: 'themeSet' },
    { title: 'Menu', name: 'primaryNavLinksSet' },
    { title: 'CTA', name: 'primaryNavCtaSet' },
    { title: 'Socials', name: 'secondaryNavSocialSet' },
  ],
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Primary Only', value: 'primaryOnly' },
          { title: 'Primary + Secondary', value: 'primarySecondary' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'layoutSet',
    },
    {
      title: 'Theme',
      name: 'theme',
      type: 'string',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'themeSet',
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
