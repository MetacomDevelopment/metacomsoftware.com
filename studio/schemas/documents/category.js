import { FaTools as icon } from 'react-icons/fa';

export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  icon,
  groups: [
    { title: 'Category', name: 'categorySet' },
    { title: 'Preview Image', name: 'imageSet' },
    { title: 'Internal Link', name: 'linkSet' },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'categorySet',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      group: 'categorySet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
      group: 'categorySet',
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
