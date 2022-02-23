import { FaCalendarCheck as icon } from 'react-icons/fa';

export default {
  title: 'Event',
  name: 'event',
  type: 'document',
  icon,
  groups: [
    { title: 'Event', name: 'eventSet' },
    { title: 'Preview Image', name: 'imageSet' },
    { title: 'Internal Link', name: 'linkSet' },
  ],
  fields: [
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
      group: 'eventSet',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'eventSet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
      group: 'eventSet',
    },
    {
      title: 'Preview Image',
      name: 'image',
      type: 'imageAlt',
      group: 'imageSet',
    },
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
  ],
};
