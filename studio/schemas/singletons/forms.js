import { FaFileInvoice as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Forms',
  name: 'forms',
  type: 'document',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Headlines', name: 'headlinesSet' },
  ],
  fields: [
    {
      title: 'Columns',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: '1 Column', value: 'oneCol' },
          { title: '2 Columns', value: 'twoCols' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'layoutSet',
    },
    {
      title: 'Headline',
      description: 'Add a headline to the top of the form.',
      name: 'headline',
      type: 'string',
      fieldset: 'headlinesSet',
    },
    {
      title: 'Tagline',
      description: 'Add a tagline below the headline.',
      name: 'tagline',
      type: 'portableTextBody',
      fieldset: 'headlinesSet',
    },
  ],
};
