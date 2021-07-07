export default {
  name: 'imageAlt',
  title: 'Image',
  description: 'Add an image and alt text',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      description: `Some of your visitors cannot see images, 
      be they blind, color-blind, low-sighted; 
      alternative text is of great help for those 
      people that can rely on it to have a good idea of 
      what\'s on your page.`,
      options: {
        isHighlighted: true,
      },
    },
  ],
};
