import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Contacts',
  name: 'contacts',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Contacts',
      name: 'contactsSet',
    },
  ],
  fields: [
    {
      title: 'Layout',
      description: 'Choose a layout for all contact sections.',
      name: 'layout',
      type: 'string',
      options: {
        list: [{ title: 'Map', value: 'map' }],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      title: 'Contact',
      description: 'Create a contact section for each office.',
      name: 'contact',
      type: 'array',
      of: [{ type: 'contact' }],
    },
    {
      title: 'Social Media Links',
      description: 'Add social links (displayed in all contact sections).',
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
  preview: {
    select: {
      title: 'layout',
      media: 'icon',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: `Contacts: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
