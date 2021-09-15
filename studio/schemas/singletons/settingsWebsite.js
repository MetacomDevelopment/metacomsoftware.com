import { FaGlobe as icon } from 'react-icons/fa';

export default {
  title: 'Website',
  name: 'settingsWebsite',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Business Name',
      description: 'Format: "John Grattan SEO & Web Design"',
      name: 'name',
      type: 'string',
      initialValue: 'John Grattan SEO & Web Design',
    },
    {
      title: 'Url',
      description: 'Format: "https://johngrattan.com"',
      name: 'url',
      type: 'url',
      initialValue: 'https://johngrattan.com',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
  ],
};
