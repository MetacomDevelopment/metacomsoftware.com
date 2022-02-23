import { FaChartLine as icon } from 'react-icons/fa';

export default {
  title: 'Case Study',
  name: 'caseStudy',
  type: 'document',
  icon,
  groups: [
    { title: 'Case Study', name: 'caseStudySet' },
    { title: 'Preview Image', name: 'imageSet' },
    { title: 'Internal Link', name: 'linkSet' },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'caseStudySet',
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
      group: 'caseStudySet',
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
      group: 'caseStudySet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
      group: 'caseStudySet',
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
