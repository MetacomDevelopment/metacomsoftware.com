import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Header',
  name: 'header',
  type: 'object',
  icon,
  groups: [{ title: 'Header', name: 'headerSet' }],
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      group: 'headerSet',
    },
    {
      title: 'Tagline',
      name: 'tagline',
      type: 'string',
      group: 'headerSet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
      group: 'headerSet',
    },
  ],
};
