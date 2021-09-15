import { FaPhone as icon } from 'react-icons/fa';

export default {
  title: 'Phones',
  name: 'phone',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Phone Number',
      description: 'Format: "(401) 216-9868"',
      name: 'number',
      type: 'string',
      initialValue: '(401) 216-9868',
    },
    {
      title: 'URL',
      description: 'Format: "tel:+14012169868"',
      name: 'url',
      type: 'string',
      initialValue: 'tel:+14012169868',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['tel'],
        }),
    },
    {
      title: 'Type',
      description: 'Choose your type...',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'General' },
          { title: 'Marketing', value: 'Marketing' },
          { title: 'Office', value: 'Office' },
          { title: 'Sales', value: 'Sales' },
          { title: 'Support', value: 'Support' },
        ],
        layout: 'dropdown',
        direction: 'vertical',
      },
    },
  ],
  preview: {
    select: {
      title: 'number',
      subtitle: 'type',
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
