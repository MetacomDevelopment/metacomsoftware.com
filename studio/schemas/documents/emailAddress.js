import { FaEnvelope as icon } from 'react-icons/fa';

export default {
  name: 'emailAddress',
  title: 'Emails',
  type: 'document',
  icon,
  fields: [
    {
      name: 'address',
      type: 'email',
      title: 'Email Address',
      description: 'Format: "contact@johngrattan.com"',
    },
    {
      name: 'url',
      title: 'URL',
      description:
        'Format: "mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website"',
      type: 'string',
      initialValue:
        'mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['mailto'],
        }),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      description: 'Choose your type...',
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
      title: 'address',
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
