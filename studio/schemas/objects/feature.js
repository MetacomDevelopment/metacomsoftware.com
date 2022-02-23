import { FaColumns as icon } from 'react-icons/fa';

export default {
  title: 'Feature',
  name: 'feature',
  type: 'object',
  icon,
  groups: [
    { title: 'Feature', name: 'featureSet' },
    { title: 'CTA', name: 'ctaSet' },
    { title: 'Image', name: 'imageSet' },
  ],
  fields: [
    {
      title: 'Headline',
      description: 'Enter the headline for the feature.',
      name: 'headline',
      type: 'string',
      group: 'featureSet',
    },
    {
      title: 'Description',
      description: 'Enter a description of the feature.',
      name: 'description',
      type: 'portableText',
      group: 'featureSet',
    },
    {
      title: 'CTA Button',
      description: 'Enter a description of the feature.',
      name: 'ctaButton',
      type: 'ctaButton',
      group: 'ctaSet',
    },
    {
      title: 'Image',
      description: 'Select the feature image.',
      name: 'image',
      type: 'imageAlt',
      group: 'imageSet',
    },
  ],
  preview: {
    select: {
      title: 'headline',
      media: 'image',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    },
  },
};
