import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Features',
  name: 'features',
  type: 'object',
  icon,
  groups: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'ID', name: 'idSet' },
    { title: 'Header', name: 'headerSet' },
    { title: 'Features', name: 'featuresSet' },
  ],
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Alternating (No CTA)', value: 'alternatingNoCta' },
          { title: 'Alternating (With CTA)', value: 'alternatingCta' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'layoutSet',
    },
    {
      title: 'ID Name',
      description: 'Pick an ID name for the section (Example: "features")',
      name: 'idName',
      type: 'string',
      group: 'idSet',
    },
    {
      title: 'Header',
      name: 'header',
      type: 'header',
      group: 'headerSet',
    },
    {
      title: 'Feature',
      name: 'feature',
      type: 'array',
      of: [{ type: 'feature' }],
      group: 'featuresSet',
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
        title: `Features: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
