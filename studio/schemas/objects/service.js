import { FaListAlt as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Service',
  name: 'service',
  type: 'object',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Service', name: 'serviceSet' },
    { title: 'Link', name: 'linkSet' },
    { title: 'Image', name: 'imageSet' },
  ],
  fields: [
    {
      title: 'Title',
      description: 'Enter the title of the service.',
      name: 'title',
      type: 'string',
      fieldset: 'serviceSet',
    },
    {
      title: 'Internal Link',
      description: 'Select the internal link.',
      name: 'link',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
      fieldset: 'linkSet',
    },
    {
      title: 'Image',
      description: 'Select the background image.',
      name: 'image',
      type: 'imageAlt',
      fieldset: 'imageSet',
    },
  ],
};
