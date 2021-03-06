import { FaTag as icon } from 'react-icons/fa';

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
