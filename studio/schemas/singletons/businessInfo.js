import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'businessInfo',
  title: 'General Information',
  type: 'document',
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Name', name: 'nameSet' },
    { title: 'Address', name: 'addressSet' },
    { title: 'Phone', name: 'phoneSet' },
    { title: 'Email', name: 'emailSet' },
    { title: 'Hours', name: 'hoursSet' },
    { title: 'Website', name: 'websiteSet' },
  ],
  fields: [
    {
      title: 'Name of Business',
      description: 'Exactly as it appears on Google Business Profile',
      name: 'name',
      type: 'string',
      fieldset: 'nameSet',
    },
    {
      title: "Owner's Name",
      name: 'owner',
      type: 'string',
      fieldset: 'nameSet',
    },
    {
      title: 'Physical Address',
      description: 'Format: "30 Roosevelt Rd, Plymouth, MA 02360"',
      name: 'address',
      type: 'string',
      fieldset: 'addressSet',
    },
    {
      title: 'Address URL',
      description: `Preferably the GBP CID. Use a Google Map of the city if GBP does not exist`,
      name: 'addressUrl',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
      fieldset: 'addressSet',
    },
    {
      title: 'Phone Number',
      description: 'Format: "(401) 216-9868"',
      name: 'phone',
      type: 'string',
      fieldset: 'phoneSet',
    },
    {
      title: 'Phone URL',
      description: 'Format: "tel:+14012169868"',
      name: 'phoneUrl',
      type: 'string',
      initialValue: 'tel:+1',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['tel'],
        }),
      fieldset: 'phoneSet',
    },
    {
      title: 'Email Address',
      description: 'Format: "contact@johngrattan.com"',
      name: 'emailAddress',
      type: 'email',
      fieldset: 'emailSet',
    },
    {
      title: 'Email URL',
      description: 'Format: "mailto:contact@johngrattan.com',
      name: 'emailUrl',
      type: 'string',
      initialValue: 'mailto:',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['mailto'],
        }),
      fieldset: 'emailSet',
    },
    {
      title: 'Open Hours',
      description: 'Format: "Mon-Sat: 9AM-5PM; Sun: CLOSED"',
      name: 'hours',
      type: 'string',
      fieldset: 'hoursSet',
    },
    {
      title: 'Hours URL',
      description: `Preferably the GBP CID. Use a Google Map of the city if GBP does not exist`,
      name: 'hoursUrl',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
      fieldset: 'hoursSet',
    },
    {
      title: 'Website URL',
      description: 'Format: "https://johngrattan.com" (no "/" at the end)',
      name: 'websiteUrl',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
      fieldset: 'websiteSet',
    },
  ],
};
