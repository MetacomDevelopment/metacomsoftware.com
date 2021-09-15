export default {
  title: 'Metadata',
  name: 'settingsMetadata',
  type: 'document',
  fields: [
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
      title: 'Author',
      name: 'author',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageAlt',
    },
  ],
};
