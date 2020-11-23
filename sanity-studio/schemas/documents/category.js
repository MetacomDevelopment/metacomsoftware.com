import { FaTag as icon } from 'react-icons/fa';

export default {
  name: 'category',
  title: 'Category',
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
}
