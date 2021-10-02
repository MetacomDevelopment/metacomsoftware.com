import { FaAddressCard as icon } from 'react-icons/fa';

export default {
  title: 'NAP Information',
  name: 'nap',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Anchor Text',
      description: 'Enter the navbar anchor text.',
      name: 'anchor',
      type: 'string',
      initialValue: '30 Roosevelt Rd, Plymouth MA 02360',
    },
    {
      title: 'External URL',
      description:
        'Enter the URL for the address (GMB CID), email (mailto), or phone number (tel:+1).',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      title: 'Internal URL',
      description: 'Select the internal link.',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }],
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Choose your icon...',
      options: {
        list: [
          { title: 'Address', value: 'fas fa-map-marker-alt' },
          { title: 'Email', value: 'fas fa-envelope' },
          { title: 'Phone', value: 'fas fa-phone' },
          { title: 'Hours', value: 'fas fa-clock' },
          { title: 'Website', value: 'fas fa-globe' },
        ],
        layout: 'dropdown',
        direction: 'vertical',
      },
    },
  ],
  preview: {
    select: {
      title: 'anchor',
      subtitle: 'url',
      media: 'icon',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      };
    },
  },
};
