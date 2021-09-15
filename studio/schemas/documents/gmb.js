import React from 'react';
import { SiGooglemybusiness as icon } from 'react-icons/si';

export default {
  title: 'Google My Business',
  name: 'gmb',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      description: 'Enter the name of the business (as listed on GMB)',
      name: 'name',
      type: 'string',
      initialValue: 'John Grattan SEO & Web Design',
    },
    {
      title: 'CID',
      description: `Format: "https://www.google.com/maps?cid=13834140053837066400"}`,
      name: 'gmbCid',
      type: 'url',
      initialValue: 'https://www.google.com/maps?cid=13834140053837066400',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      title: 'Map Embed',
      description:
        'Format: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11871.973747487475!2d-70.7228965!3d41.9359924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbffcbd1521f630a0!2sJohn%20Grattan%20SEO%20%26%20Web%20Design!5e0!3m2!1sen!2sus!4v1631290126780!5m2!1sen!2sus"',
      name: 'gmbEmbed',
      type: 'url',
      initialValue:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11871.973747487475!2d-70.7228965!3d41.9359924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbffcbd1521f630a0!2sJohn%20Grattan%20SEO%20%26%20Web%20Design!5e0!3m2!1sen!2sus!4v1631290126780!5m2!1sen!2sus',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      title: 'Reviews',
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
    },
    {
      title: 'Website',
      description: 'Format: "https://johngrattan.com/plymouth-ma/"',
      name: 'website',
      type: 'url',
      initialValue: 'https://johngrattan.com/plymouth-ma/',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'website',
      media: 'icon',
    },
  },
};
