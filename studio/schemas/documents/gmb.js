import { SiGooglemybusiness as icon } from 'react-icons/si';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Google My Business',
  name: 'gmb',
  type: 'document',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Name', name: 'nameSet' },
    { title: 'Address', name: 'addressSet' },
    { title: 'Phone', name: 'phoneSet' },
    { title: 'Email', name: 'emailSet' },
    { title: 'GMB URLs', name: 'gmbUrlsSet' },
  ],
  fields: [
    {
      title: 'Business Name',
      description: 'Enter the name of the business (as listed on GMB)',
      name: 'name',
      type: 'string',
      initialValue: 'John Grattan SEO & Web Design',
      fieldset: 'nameSet',
    },
    {
      title: 'Address',
      description: 'Format: "30 Roosevelt Rd, Plymouth, MA 02360"',
      name: 'address',
      type: 'string',
      initialValue: '30 Roosevelt Rd, Plymouth, MA 02360',
      fieldset: 'addressSet',
    },
    {
      title: 'Street',
      description: 'Format: "30 Roosevelt Rd"',
      name: 'street',
      type: 'string',
      initialValue: '30 Roosevelt Rd',
      fieldset: 'addressSet',
    },
    {
      title: 'City',
      description: 'Format: "Plymouth"',
      name: 'city',
      type: 'string',
      initialValue: 'Plymouth',
      fieldset: 'addressSet',
    },
    {
      title: 'City, State',
      description: 'Format: "Plymouth, MA"',
      name: 'cityState',
      type: 'string',
      initialValue: 'Plymouth, MA',
      fieldset: 'addressSet',
    },
    {
      title: 'Zip Code',
      description: 'Format: "02360"',
      name: 'zip',
      type: 'string',
      initialValue: '02360',
      fieldset: 'addressSet',
    },
    {
      title: 'Country',
      description: 'Format: "US"',
      name: 'country',
      type: 'string',
      initialValue: 'US',
      fieldset: 'addressSet',
    },
    {
      title: 'Latitude',
      description: 'Format: "41.936646846336444"',
      name: 'latitude',
      type: 'string',
      initialValue: '41.936646846336444',
      fieldset: 'addressSet',
    },
    {
      title: 'Longitude',
      description: 'Format: "-70.72298233068685"',
      name: 'longitude',
      type: 'string',
      initialValue: '-70.72298233068685',
      fieldset: 'addressSet',
    },
    {
      title: 'Phone Number',
      description: 'Format: "(401) 216-9868"',
      name: 'phone',
      type: 'string',
      initialValue: '(401) 216-9868',
      fieldset: 'phoneSet',
    },
    {
      title: 'Phone URL',
      description: 'Format: "tel:+14012169868"',
      name: 'phoneUrl',
      type: 'string',
      initialValue: 'tel:+14012169868',
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
      description:
        'Format: "mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website"',
      name: 'emailUrl',
      type: 'string',
      initialValue:
        'mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['mailto'],
        }),
      fieldset: 'emailSet',
    },
    {
      title: 'GMB CID URL',
      description: `Format: "https://www.google.com/maps?cid=13834140053837066400"`,
      name: 'gmbCid',
      type: 'url',
      initialValue: 'https://www.google.com/maps?cid=13834140053837066400',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
      fieldset: 'gmbUrlsSet',
    },
    {
      title: 'GMB Map Embed URL',
      description: 'Enter URL only. Do NOT include the full iframe code.',
      name: 'gmbEmbed',
      type: 'url',
      initialValue:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11871.973747487475!2d-70.7228965!3d41.9359924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbffcbd1521f630a0!2sJohn%20Grattan%20SEO%20%26%20Web%20Design!5e0!3m2!1sen!2sus!4v1631290126780!5m2!1sen!2sus',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
      fieldset: 'gmbUrlsSet',
    },
    {
      title: 'GMB Reviews URL',
      description:
        'Format: "https://search.google.com/local/writereview?placeid=ChIJ9QY3Np695IkRoDD2IRW9_L8"',
      name: 'gmbReviews',
      type: 'url',
      initialValue:
        'https://search.google.com/local/writereview?placeid=ChIJ9QY3Np695IkRoDD2IRW9_L8',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
      fieldset: 'gmbUrlsSet',
    },
    {
      title: 'GMB Website URL',
      description: 'Select an internal link to the GMB location page.',
      name: 'website',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
      fieldset: 'gmbUrlsSet',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'full',
      media: 'icon',
    },
  },
};
