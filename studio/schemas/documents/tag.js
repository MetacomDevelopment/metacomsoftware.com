import { FaTag as icon } from 'react-icons/fa';

export default {
  title: 'Tag',
  name: 'tag',
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
