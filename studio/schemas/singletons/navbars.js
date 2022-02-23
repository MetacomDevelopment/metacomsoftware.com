import { FaFileInvoice as icon } from 'react-icons/fa';

export default {
  title: 'Navbars',
  name: 'navbars',
  type: 'document',
  icon,
  groups: [
    { title: 'Design', name: 'designSet' },
    { title: 'Menu', name: 'primaryNavLinksSet' },
    { title: 'CTA', name: 'primaryNavCtaSet' },
    { title: 'Socials', name: 'secondaryNavSocialSet' },
  ],
  fields: [
    {
      title: 'Header Layout',
      description:
        'Directions: Select which navbars should be displayed in the header.',
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
      group: 'designSet',
    },
    {
      title: 'Primary Nav: Background',
      description:
        'Directions: Select the background color for the primary navbar.',
      name: 'primaryNavBgColor',
      type: 'colors',
      group: 'designSet',
    },
    {
      title: 'Primary Nav: Background (Custom)',
      description:
        'Directions: Enter TailwindCSS classes for things like gradients.',
      name: 'primaryNavBgColorCustom',
      type: 'string',
      group: 'designSet',
    },
    {
      title: 'Primary Nav: Text',
      description: 'Directions: Select the text color for the primary navbar.',
      name: 'primaryNavTextColor',
      type: 'colors',
      group: 'designSet',
    },
    {
      title: 'Secondary Nav: Background',
      description:
        'Directions: Select the background color for the secondary navbar.',
      name: 'secondaryNavBgColor',
      type: 'colors',
      group: 'designSet',
      hidden: ({ parent }) => !(parent?.layout === 'primarySecondary'),
    },
    {
      title: 'Secondary Nav: Background (Custom)',
      description:
        'Directions: Enter TailwindCSS classes for things like gradients.',
      name: 'secondaryNavBgColorCustom',
      type: 'string',
      group: 'designSet',
      hidden: ({ parent }) => !(parent?.layout === 'primarySecondary'),
    },
    {
      title: 'Secondary Nav: Text',
      description:
        'Directions: Select the text color for the secondary navbar.',
      name: 'secondaryNavTextColor',
      type: 'colors',
      group: 'designSet',
      hidden: ({ parent }) => !(parent?.layout === 'primarySecondary'),
    },
    {
      title: 'Menu Items',
      description: 'Directions: Add menu items to the primary navbar.',
      name: 'navItem',
      type: 'array',
      of: [{ type: 'navItem' }],
      group: 'primaryNavLinksSet',
    },
    {
      title: 'Button Label',
      description:
        'Directions: Enter the CTA button label for the primary nav (Example: "Request Appointment")',
      name: 'primaryNavCtaButtonLabel',
      type: 'string',
      group: 'primaryNavCtaSet',
    },
    {
      title: 'Button Link',
      description:
        'Directions: Select the internal link for the primary nav CTA button (Example: "Contact Us" page)',
      name: 'primaryNavCtaButtonLink',
      type: 'reference',
      to: [{ type: 'page' }],
      group: 'primaryNavCtaSet',
    },
    {
      title: 'Social Media Links',
      description:
        'Directions: Add social media links to the secondary navbar.',
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
      group: 'secondaryNavSocialSet',
    },
  ],
};
