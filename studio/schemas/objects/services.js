import { FaListAlt as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Services',
  name: 'services',
  type: 'object',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Headlines', name: 'headlinesSet' },
    { title: 'Services', name: 'servicesSet' },
  ],
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [{ title: 'Images', value: 'images' }],
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
      type: 'string',
      fieldset: 'headlinesSet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableTextBody',
      fieldset: 'headlinesSet',
    },
    {
      title: 'Service',
      name: 'service',
      type: 'array',
      of: [{ type: 'service' }],
      fieldset: 'servicesSet',
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
        title: `Services: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
