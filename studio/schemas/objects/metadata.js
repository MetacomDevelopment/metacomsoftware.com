export default {
  title: 'Metadata',
  name: 'metadata',
  type: 'object',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  fieldsets: [
    {
      title: 'Metadata',
      name: 'metadataSet',
    },
  ],
  fields: [
    {
      title: 'Allow Google to index this page?',
      description: `NOTE: The sitewide deindex setting will override this. Otherwise: OFF = "noindex, nofollow"; ON = "index, follow"; `,
      name: 'isIndexed',
      type: 'boolean',
      initialValue: true,
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
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
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
    },
    {
      title: 'Schema',
      name: 'schema',
      type: 'code',
      options: {
        language: 'js',
      },
    },
  ],
  // initialValue: {
  //   isIndexed: true,
  // },
  preview: {
    select: {
      title: 'title',
    },
  },
};
