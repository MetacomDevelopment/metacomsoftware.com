import { FaUserEdit as icon } from 'react-icons/fa';

export default {
  name: 'employee',
  title: 'Team Member',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'imageAlt',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }, { type: 'imageAlt' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
