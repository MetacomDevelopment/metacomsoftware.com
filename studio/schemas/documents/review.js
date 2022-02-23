import { MdReviews as icon } from 'react-icons/md';

export default {
  title: 'Review',
  name: 'review',
  type: 'document',
  icon,
  groups: [
    { title: 'Review', name: 'reviewSet' },
    { title: 'Author', name: 'authorSet' },
    { title: 'Link', name: 'linkSet' },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'reviewSet',
    },
    {
      title: 'Service',
      name: 'service',
      type: 'reference',
      to: [
        {
          type: 'service',
        },
      ],
      group: 'reviewSet',
    },
    {
      title: 'Project',
      name: 'project',
      type: 'reference',
      to: [
        {
          type: 'project',
        },
      ],
      group: 'reviewSet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
      group: 'reviewSet',
    },
    {
      title: 'Name',
      name: 'author',
      type: 'string',
      group: 'authorSet',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'portableText',
      group: 'authorSet',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageAlt',
      group: 'authorSet',
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
