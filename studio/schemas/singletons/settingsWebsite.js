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
      title: 'Business URL',
      description: 'Format: "https://johngrattan.com"',
      name: 'url',
      type: 'url',
      initialValue: 'https://johngrattan.com',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      title: 'Call-to-Action (CTA)',
      description: 'Format: "Schedule Consultation"',
      name: 'cta',
      type: 'string',
      initialValue: 'Schedule Consultation',
    },
    {
      title: 'Business URL',
      name: 'ctaUrl',
      type: 'reference',
      to: [{ type: 'page' }],
    },
  ],
};
