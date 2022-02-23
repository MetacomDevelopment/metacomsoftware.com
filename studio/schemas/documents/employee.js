import { FaUserEdit as icon } from 'react-icons/fa';

export default {
  title: 'Employee',
  name: 'employee',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageAlt',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
