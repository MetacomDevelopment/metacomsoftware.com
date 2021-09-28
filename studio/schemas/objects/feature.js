import { FaColumns as icon } from 'react-icons/fa';

export default {
  title: 'Feature',
  name: 'feature',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Feature',
      name: 'featureSet',
    },
  ],
  fields: [
    {
      title: 'Headline',
      description: 'Enter the headline for the feature.',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Description',
      description: 'Enter a description of the feature.',
      name: 'description',
      type: 'portableTextBody',
    },
    {
      title: 'Image',
      description: 'Select the feature image.',
      name: 'image',
      type: 'imageAlt',
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
