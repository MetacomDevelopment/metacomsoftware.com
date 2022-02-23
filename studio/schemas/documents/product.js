import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Product',
  name: 'product',
  type: 'document',
  icon,
  groups: [
    { title: 'Product', name: 'productSet' },
    { title: 'Preview Image', name: 'imageSet' },
    { title: 'Internal Link', name: 'linkSet' },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'productSet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
      group: 'productSet',
    },
    {
      title: 'Main Image',
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
