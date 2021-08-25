export default {
  name: 'imageAlt',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
};
