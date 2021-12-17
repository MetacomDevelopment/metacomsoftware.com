import { FaListAlt as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Headlines', name: 'headlinesSet' },
    { title: 'CTAs', name: 'ctasSet' },
    { title: 'BG Image', name: 'bgImageSet' },
    { title: 'Testimonial', name: 'testimonialSet' },
    { title: 'Graphic', name: 'graphicSet' },
  ],
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Centered', value: 'center' },
          { title: 'Testimonial', value: 'testimonial' },
          { title: 'Contact Form', value: 'form' },
          { title: 'Graphic', value: 'graphic' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'layoutSet',
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      fieldset: 'headlinesSet',
    },
    {
      title: 'Tagline',
      name: 'tagline',
      type: 'portableTextBody',
      fieldset: 'headlinesSet',
    },
    {
      title: 'Primary CTA Button Label',
      description:
        'Enter the label for the primary call to action button (Example: "Request Appointment")',
      name: 'primaryCtaButtonLabel',
      type: 'string',
      fieldset: 'ctasSet',
    },
    {
      title: 'Primary CTA Button Link',
      description:
        'Select the internal link for the primary call to action button (Most likely the contact page)',
      name: 'primaryCtaButtonLink',
      type: 'reference',
      to: [{ type: 'page' }],
      fieldset: 'ctasSet',
    },
    {
      title: 'Secondary CTA Button Label',
      description:
        'Enter the label for the secondary call to action button (Example: "See Details")',
      name: 'secondaryCtaButtonLabel',
      type: 'string',
      fieldset: 'ctasSet',
    },
    {
      title: 'Secondary CTA Button Link',
      description:
        'Enter the ID name of the section to jump to (Example: "features")',
      name: 'secondaryCtaButtonLink',
      type: 'string',
      fieldset: 'ctasSet',
    },
    {
      title: 'Background Image',
      name: 'bgImg',
      type: 'imageAlt',
      fieldset: 'bgImageSet',
    },
    {
      title: 'Testimonial',
      name: 'testimonial',
      type: 'testimonial',
      hidden: ({ parent }) => !(parent?.layout === 'testimonial'),
      fieldset: 'testimonialSet',
    },
    {
      title: 'Graphic',
      name: 'graphic',
      type: 'imageAlt',
      hidden: ({ parent }) => !(parent?.layout === 'graphic'),
      fieldset: 'graphicSet',
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'portableTextBody',
      hidden: ({ parent }) => !(parent?.layout === 'graphic'),
      fieldset: 'graphicSet',
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
        title: `Hero: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
