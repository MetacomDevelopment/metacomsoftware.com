import { FaMapMarkerAlt as icon } from 'react-icons/fa';

export default {
  title: 'Address',
  name: 'address',
  type: 'document',
  icon,
  fields: [
    {
      name: 'full',
      title: 'Address',
      description: 'Format: "30 Roosevelt Rd, Plymouth, MA 02360"',
      type: 'string',
      initialValue: '30 Roosevelt Rd, Plymouth, MA 02360',
    },
    {
      name: 'street',
      title: 'Street',
      description: 'Format: "30 Roosevelt Rd"',
      type: 'string',
      initialValue: '30 Roosevelt Rd',
    },
    {
      name: 'city',
      title: 'City',
      description: 'Format: "Plymouth"',
      type: 'string',
      initialValue: 'Plymouth',
    },
    {
      name: 'cityState',
      title: 'City, State',
      description: 'Format: "Plymouth, MA"',
      type: 'string',
      initialValue: 'Plymouth, MA',
    },
    {
      name: 'zip',
      title: 'Zip Code',
      description: 'Format: "02360"',
      type: 'string',
      initialValue: '02360',
    },
    {
      name: 'country',
      title: 'Country',
      description: 'Format: "US"',
      type: 'string',
      initialValue: 'US',
    },
    {
      name: 'latitude',
      title: 'Latitude',
      description: 'Format: "41.936646846336444"',
      type: 'string',
      initialValue: '41.936646846336444',
    },
    {
      name: 'longitude',
      title: 'Longitude',
      description: 'Format: "-70.72298233068685"',
      type: 'string',
      initialValue: '-70.72298233068685',
    },
  ],
  preview: {
    select: {
      title: 'cityState',
      subtitle: 'street',
      media: 'icon',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      };
    },
  },
};
