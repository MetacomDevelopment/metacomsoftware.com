export default {
  name: 'businessInfo',
  title: 'General Information',
  type: 'document',
  groups: [
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
      group: 'nameSet',
    },
    {
      title: 'Name of Business Owner',
      name: 'owner',
      type: 'string',
      group: 'nameSet',
    },
    {
      title: 'Year Established',
      name: 'established',
      type: 'string',
      group: 'nameSet',
    },
    {
      title: 'Physical Address',
      description: 'Format: "30 Roosevelt Rd, Plymouth, MA 02360"',
      name: 'address',
      type: 'string',
      group: 'addressSet',
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
      group: 'addressSet',
    },
    {
      title: 'Phone Number',
      description: 'Format: "(401) 216-9868"',
      name: 'phone',
      type: 'string',
      group: 'phoneSet',
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
      group: 'phoneSet',
    },
    {
      title: 'Email Address',
      description: 'Format: "contact@johngrattan.com"',
      name: 'emailAddress',
      type: 'email',
      group: 'emailSet',
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
      group: 'emailSet',
    },
    {
      title: 'Open Hours (Single Line)',
      description: 'Format: "Mon-Sat: 9AM-5PM; Sun: CLOSED"',
      name: 'hours',
      type: 'string',
      group: 'hoursSet',
    },
    {
      title: 'Hours: Monday',
      description: 'Format: "Mon: 9AM-5PM"',
      name: 'hoursMon',
      type: 'string',
      group: 'hoursSet',
    },
    {
      title: 'Hours: Tuesday',
      description: 'Format: "Tue: 9AM-5PM"',
      name: 'hoursTue',
      type: 'string',
      group: 'hoursSet',
    },
    {
      title: 'Hours: Wednesday',
      description: 'Format: "Wed: 9AM-5PM"',
      name: 'hoursWed',
      type: 'string',
      group: 'hoursSet',
    },
    {
      title: 'Hours: Thursday',
      description: 'Format: "Thu: 9AM-5PM"',
      name: 'hoursThu',
      type: 'string',
      group: 'hoursSet',
    },
    {
      title: 'Hours: Friday',
      description: 'Format: "Fri: 9AM-5PM"',
      name: 'hoursFri',
      type: 'string',
      group: 'hoursSet',
    },
    {
      title: 'Hours: Saturday',
      description: 'Format: "Sat: 9AM-5PM"',
      name: 'hoursSat',
      type: 'string',
      group: 'hoursSet',
    },
    {
      title: 'Hours: Sunday',
      description: 'Format: "Sun: 9AM-5PM"',
      name: 'hoursSun',
      type: 'string',
      group: 'hoursSet',
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
      group: 'hoursSet',
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
      group: 'websiteSet',
    },
  ],
};
