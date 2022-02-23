import { FaFileInvoice as icon } from 'react-icons/fa';

export default {
  title: 'Footers',
  name: 'footers',
  type: 'document',
  icon,
  groups: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Form', name: 'formSet' },
    { title: 'Map', name: 'mapSet' },
    { title: 'Brand', name: 'brandSet' },
    { title: 'Links', name: 'linksSet' },
  ],
  fields: [
    {
      title: 'Additional Sections',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Form Only', value: 'formOnly' },
          { title: 'Map Only', value: 'mapOnly' },
          { title: 'Form + Map', value: 'formMap' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'layoutSet',
    },
    {
      title: 'Background Image',
      description: 'Select a background image for the form section.',
      name: 'bgImg',
      type: 'imageAlt',
      group: 'formSet',
    },
    {
      title: 'Map Location',
      description: 'Select a GMB.',
      name: 'gmb',
      type: 'reference',
      to: [{ type: 'gmb' }],
      group: 'mapSet',
    },
    {
      title: 'Tagline',
      description: 'Add a tagline below the logo.',
      name: 'tagline',
      type: 'string',
      group: 'brandSet',
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
      group: 'brandSet',
    },
    {
      title: 'Middle Columns',
      description: 'Add middle columns to the footer.',
      name: 'footerItem',
      type: 'array',
      of: [{ type: 'footerItem' }],
      group: 'linksSet',
    },
  ],
};
