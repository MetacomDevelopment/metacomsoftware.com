import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'CTA',
  name: 'cta',
  type: 'object',
  icon,
  groups: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Text', name: 'textSet' },
    { title: 'CTA', name: 'ctaSet' },
    { title: 'Image', name: 'imageSet' },
  ],
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Full', value: 'full' },
          { title: 'Half', value: 'half' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'layoutSet',
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      group: 'textSet',
    },
    {
      title: 'Subheadline',
      name: 'subheadline',
      type: 'string',
      hidden: ({ parent }) => !(parent?.layout === 'full'),
      group: 'textSet',
    },
    {
      title: 'Tagline',
      name: 'tagline',
      type: 'string',
      hidden: ({ parent }) => !(parent?.layout === 'half'),
      group: 'textSet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
      hidden: ({ parent }) => !(parent?.layout === 'half'),
      group: 'textSet',
    },
    {
      title: 'CTA Button Label',
      description:
        'Enter the label for the  call to action button (Example: "Request Appointment")',
      name: 'ctaButtonLabel',
      type: 'string',
      group: 'ctaSet',
    },
    {
      title: 'CTA Button Link',
      description:
        'Select the internal link for the  call to action button (Most likely the contact page)',
      name: 'ctaButtonLink',
      type: 'reference',
      to: [{ type: 'page' }],
      group: 'ctaSet',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageAlt',
      group: 'imageSet',
    },
  ],
  preview: {
    select: {
      title: 'layout',
      media: 'icon',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: `CTA: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
