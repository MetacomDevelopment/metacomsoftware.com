import { FaShareAlt as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Social Media Account',
  name: 'social',
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
      description: 'Enter the navbar anchor text.',
      name: 'anchor',
      type: 'string',
      fieldset: 'anchorTextSet',
    },
    {
      title: 'URL',
      description: 'Format: "https://www.facebook.com/company-name/"',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
      fieldset: 'linkSet',
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Choose your icon...',
      options: {
        list: [
          { title: 'Blogger', value: 'fab fa-blogger-b' },
          { title: 'Discord', value: 'fab fa-discord' },
          { title: 'Facebook', value: 'fab fa-facebook' },
          { title: 'GitHub', value: 'fab fa-github' },
          {
            title: 'Instagram',
            value: 'fab fa-instagram-square',
          },
          { title: 'LinkedIn', value: 'fab fa-linkedin' },
          { title: 'Medium', value: 'fab fa-medium' },
          { title: 'Pinterest', value: 'fab fa-pinterest' },
          { title: 'Slack', value: 'fab fa-slack' },
          { title: 'Snapchat', value: 'fab fa-snapchat' },
          { title: 'Telegram', value: 'fab fa-telegram' },
          { title: 'TikTok', value: 'fab fa-tiktok' },
          { title: 'Tumblr', value: 'fab fa-tumblr-square' },
          { title: 'Twitter', value: 'fab fa-twitter' },
          { title: 'Vimeo', value: 'fab fa-vimeo' },
          { title: 'WhatsApp', value: 'fab fa-whatsapp-square' },
          { title: 'YouTube', value: 'fab fa-youtube' },
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
