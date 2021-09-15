import { FaUserEdit as icon } from 'react-icons/fa';

export default {
  title: 'Authors',
  name: 'team',
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
        maxLength: 96,
      },
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
    },
    {
      title: 'Image',
      description: 'Upload an image.',
      name: 'image',
      type: 'imageAlt',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'portableTextBody',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
};
