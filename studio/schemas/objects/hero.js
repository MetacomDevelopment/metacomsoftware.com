import { FaListAlt as icon } from 'react-icons/fa';

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon,
  fieldsets: [
    {
      title: 'Page Hero',
      name: 'pageHero',
    },
  ],
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Centered', value: 'center' },
          { title: 'Testimonial', value: 'testimonial' },
          { title: 'Contact Form', value: 'form' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
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
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'testimonial',
      hidden: ({ parent }) => !(parent?.layout === 'testimonial'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
    prepare() {
      return {
        title: `Hero`,
        media: icon,
      };
    },
  },
};
