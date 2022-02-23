import { FaShareAlt as icon } from 'react-icons/fa';

export default {
  title: 'Social Media Account',
  name: 'social',
  type: 'document',
  icon,
  groups: [
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
      group: 'anchorTextSet',
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
      group: 'linkSet',
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Choose your icon...',
      options: {
        list: [
          { title: 'Blogger', value: 'blogger-b' },
          { title: 'Discord', value: 'discord' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'GitHub', value: 'github' },
          {
            title: 'Instagram',
            value: 'instagram-square',
          },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Medium', value: 'medium' },
          { title: 'Pinterest', value: 'pinterest' },
          { title: 'Slack', value: 'slack' },
          { title: 'Snapchat', value: 'snapchat' },
          { title: 'Telegram', value: 'telegram' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'Tumblr', value: 'tumblr-square' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'Vimeo', value: 'vimeo' },
          { title: 'WhatsApp', value: 'whatsapp-square' },
          { title: 'YouTube', value: 'youtube' },
        ],
        layout: 'dropdown',
        direction: 'vertical',
      },
      group: 'iconSet',
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
