import { FaGlobe as icon } from 'react-icons/fa';

export default {
  title: 'SEO',
  name: 'businessSeo',
  type: 'document',
  icon,
  groups: [
    { title: 'Indexing', name: 'indexingSet' },
    { title: 'Metadata', name: 'metadataSet' },
  ],
  fields: [
    {
      title: 'Index Status',
      description: `WARNING: This is a global setting for all pages. If you want to set a page-specific setting, use the page's "Metadata > Index Status" fieldset.`,
      name: 'indexStatus',
      type: 'string',
      options: {
        list: [
          { title: 'Index', value: 'index' },
          { title: 'No Index', value: 'noIndex' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'indexingSet',
      initialValue: 'index',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(10).warning('Title tag length should be longer.'),
        Rule.required()
          .max(55)
          .error('Title tag must be less than 155 characters.'),
      ],
      group: 'metadataSet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .warning('Meta description length should be longer.'),
        Rule.required()
          .max(155)
          .error('Meta description must be less than 155 characters.'),
      ],
      group: 'metadataSet',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
      group: 'metadataSet',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageAlt',
      group: 'metadataSet',
    },
  ],
};
