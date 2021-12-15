import { FaAddressCard as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'NAP Information',
  name: 'nap',
  type: 'document',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Anchor Text', name: 'anchorTextSet' },
    { title: 'Link', name: 'linkSet' },
    { title: 'Icon', name: 'iconSet' },
  ],
  fields: [
    {
      title: 'Anchor Text',
      description:
        'Enter a phone number, email address, physical address, or open hours (visible in secondary navbar & footer)',
      name: 'anchor',
      type: 'string',
      fieldset: 'anchorTextSet',
    },
    {
      title: 'External URL',
      description:
        'Enter the URL for the address (GMB CID), email (mailto), or phone number (tel:+1).',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
      fieldset: 'linkSet',
    },
    {
      title: 'Internal URL',
      description: 'Select the internal link.',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }],
      fieldset: 'linkSet',
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Choose your icon...',
      options: {
        list: [
          { title: 'Address', value: 'fas fa-map-marker-alt' },
          { title: 'Email', value: 'fas fa-envelope' },
          { title: 'Phone', value: 'fas fa-phone' },
          { title: 'Hours', value: 'fas fa-clock' },
          { title: 'Website', value: 'fas fa-globe' },
        ],
        layout: 'dropdown',
        direction: 'vertical',
      },
      fieldset: 'iconSet',
    },
  ],
  preview: {
    select: {
      title: 'anchor',
      subtitle: 'url',
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
