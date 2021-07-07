export default {
  name: 'pageHome',
  title: 'Page - Home',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'heading',
      title: 'Hero Section - Heading',
      description: 'Add a heading within the "Hero" section',
      type: 'string',
    },
    {
      name: 'subheadingOne',
      title: 'Hero Section - Subheading One',
      description: 'Add a subheading within the "Hero" section',
      type: 'array',
      of: [{ type: 'block' }, { type: 'imageAlt' }],
    },
    {
      name: 'subheadingTwo',
      title: 'Hero Section - Subheading Two',
      description: 'Add a subheading within the "Hero" section',
      type: 'array',
      of: [{ type: 'block' }, { type: 'imageAlt' }],
    },
    {
      name: 'bgImg',
      title: 'Hero Section - Background Image',
      description: 'Add a background image within the "Hero" section.',
      type: 'imageAlt',
    },
    {
      name: 'bgImgOverlay',
      title: 'Hero Section - Background Image Overlay',
      description:
        'Add an overlay color within the "Hero" section. Ex: "bg-gray-700"',
      type: 'string',
    },
    {
      name: 'testimonial',
      title: 'Hero Section - Testimonial',
      description: 'Add a testimonial within the "Hero" section.',
      type: 'array',
      of: [{ type: 'block' }, { type: 'imageAlt' }],
    },
    {
      name: 'testimonialAuthor',
      title: 'Hero Section - Testimonial Author',
      description: 'Add a testimonial author within the "Hero" section.',
      type: 'string',
    },
    {
      name: 'testimonialPosition',
      title: 'Hero Section - Testimonial Position',
      description: 'Add a testimonial position within the "Hero" section.',
      type: 'string',
    },
    {
      name: 'testimonialImg',
      title: 'Hero Section - Testimonial Image',
      description: 'Add a testimonial image within the "Hero" section.',
      type: 'imageAlt',
    },
    {
      name: 'companyBio',
      title: 'Company Section - Company Bio',
      description:
        'Add a brief bio about the company within the "Company" section.',
      type: 'array',
      of: [{ type: 'block' }, { type: 'imageAlt' }],
    },
    {
      name: 'companyImg',
      title: 'Company Section - Company Image',
      description: 'Add a company image within the "Company" section.',
      type: 'imageAlt',
    },
  ],
};
