import { FaColumns as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Feature',
  name: 'feature',
  type: 'object',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Feature', name: 'featureSet' },
    { title: 'Image', name: 'imageSet' },
  ],
  fields: [
    {
      title: 'Headline',
      description: 'Enter the headline for the feature.',
      name: 'headline',
      type: 'string',
      fieldset: 'featureSet',
    },
    {
      title: 'Description',
      description: 'Enter a description of the feature.',
      name: 'description',
      type: 'portableTextBody',
      fieldset: 'featureSet',
    },
    {
      title: 'Image',
      description: 'Select the feature image.',
      name: 'image',
      type: 'imageAlt',
      fieldset: 'imageSet',
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
