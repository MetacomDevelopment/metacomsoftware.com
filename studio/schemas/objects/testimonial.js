export default {
  title: 'Testimonial',
  name: 'testimonial',
  type: 'object',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  fieldsets: [
    {
      name: 'heroTestimonial',
      title: 'Hero Testimonial',
      description: 'Enter the testimonial',
    },
  ],
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'portableTextBody',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'info',
      title: 'Additional Information',
      description: "Author's location, job title, company, etc.",
      type: 'string',
    },
    {
      name: 'authorImg',
      title: 'Author Image',
      type: 'imageAlt',
    },
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author',
  //     media: 'bgImg',
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     });
  //   },
  // },
};
