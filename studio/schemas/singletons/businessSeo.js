import { FaGlobe as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'SEO',
  name: 'businessSeo',
  type: 'document',
  inputComponent: Tabs,
  icon,
  fieldsets: [
    { title: 'Indexing', name: 'indexingSet' },
    { title: 'Domain', name: 'domainSet' },
    { title: 'Metadata', name: 'metadataSet' },
  ],
  fields: [
    {
      title: 'Allow Google to index this website?',
      description:
        'When staging, turn OFF. When live, turn ON. Once live, NEVER TURN OFF!',
      name: 'isIndexed',
      type: 'boolean',
      initialValue: false,
      fieldset: 'indexingSet',
    },
    {
      title: 'Business Name',
      description: 'Exactly as written on Google Business Profile',
      name: 'name',
      type: 'string',
      fieldset: 'domainSet',
    },
    {
      title: 'Business URL',
      description:
        'Enter full domain URL (no "/" at the end). Example: "https://johngrattan.com"',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
      fieldset: 'domainSet',
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
      fieldset: 'metadataSet',
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
      fieldset: 'metadataSet',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
      fieldset: 'metadataSet',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageAlt',
      fieldset: 'metadataSet',
    },
  ],
};
