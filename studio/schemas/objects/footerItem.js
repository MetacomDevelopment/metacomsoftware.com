import { FaFileInvoice as icon } from 'react-icons/fa';

export default {
  title: 'Footer Items',
  name: 'footerItem',
  type: 'object',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Footer Items',
      name: 'footerItemSet',
    },
  ],
  fields: [
    {
      title: 'Headline',
      description: 'Add a headline to the column.',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Links',
      description: 'Add internal links to the column.',
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'page',
            },
          ],
        },
      ],
    },
  ],
};
