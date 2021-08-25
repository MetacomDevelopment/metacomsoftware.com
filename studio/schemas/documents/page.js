export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'schema',
      title: 'Schema',
      type: 'text',
    },
    {
      name: 'bgImg',
      title: 'Background Image',
      type: 'imageAlt',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Page Builder',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'bgImg',
    },
  },
};
