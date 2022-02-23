import { FaBuilding as icon } from 'react-icons/fa';

export default {
  title: 'Contact',
  name: 'contact',
  type: 'object',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  groups: [
    {
      title: 'Contact',
      name: 'contactSet',
    },
  ],
  fields: [
    {
      title: 'Headline',
      description: 'Add a headline to be displayed at the top.',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Description',
      description: 'Add a description beneath the headline.',
      name: 'description',
      type: 'portableText',
    },
    {
      title: 'GMB Profile',
      description: 'Select a GMB profile for contact information.',
      name: 'gmb',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'gmb',
            },
          ],
        },
      ],
    },
  ],
};
