export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'portableTextBody',
    },
    {
      name: 'bgImg',
      title: 'Background Image',
      type: 'imageAlt',
    },
  ],
};
