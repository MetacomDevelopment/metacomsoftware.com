import { FaFileInvoice as icon } from 'react-icons/fa';

export default {
  name: 'links',
  title: 'Links',
  type: 'object',
  icon,
  groups: [
    {
      title: 'Links',
      name: 'linksSet',
    },
  ],
  fields: [
    {
      name: 'anchorText',
      title: 'Anchor Text',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
};
