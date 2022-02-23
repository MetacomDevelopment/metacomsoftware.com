import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  icon,
  groups: [
    { title: 'Project', name: 'projectSet' },
    { title: 'Preview Image', name: 'imageSet' },
    { title: 'Internal Link', name: 'linkSet' },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'projectSet',
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
      group: 'projectSet',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
      group: 'projectSet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
      group: 'projectSet',
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
