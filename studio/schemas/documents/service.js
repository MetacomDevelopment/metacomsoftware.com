import { FaTools as icon } from 'react-icons/fa';

export default {
  title: 'Service',
  name: 'service',
  type: 'document',
  icon,
  groups: [
    { title: 'Internal Link', name: 'linkSet' },
    { title: 'Service Section', name: 'serviceSet' },
  ],
  fields: [
    {
      title: 'Internal Link',
      name: 'link',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
      group: 'linkSet',
    },
    {
      title: 'Short Description',
      description:
        'Directions: Enter a short description for the navigation menu.',
      name: 'shortDescription',
      type: 'text',
      rows: 3,
      group: 'linkSet',
    },
    {
      title: 'Headline',
      description:
        'Directions: Enter a headline for the services section (alternating layout).',
      name: 'headline',
      type: 'string',
      group: 'serviceSet',
    },
    {
      title: 'Long Description',
      description:
        'Directions: Enter a long description for the services section (alternating layout).',
      name: 'longDescription',
      type: 'portableText',
      group: 'serviceSet',
    },
  ],
};
