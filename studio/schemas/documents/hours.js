import { FaClock as icon } from 'react-icons/fa';

export default {
  title: 'Hours',
  name: 'hours',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Hours',
      description: 'Format: "Mon-Sat: 7AM-5PM; Sun: 10AM-5PM"',
      name: 'short',
      type: 'string',
      initialValue: 'Mon-Sat: 7AM-5PM; Sun: 10AM-5PM',
    },
  ],
  preview: {
    select: {
      title: 'short',
      media: 'icon',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title,
        media: media,
      };
    },
  },
};
