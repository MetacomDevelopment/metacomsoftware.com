import preview from 'part:sanity-plugin-icon-picker/preview';

export default {
  name: 'account',
  title: 'Social Media Account',
  type: 'object',
  fieldsets: [
    {
      title: 'Social Media Account',
      name: 'accountSet',
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'iconPicker',
      options: {
        providers: ['f7', 'fa', 'mdi', 'sa', 'hi', 'fi'],
        outputFormat: 'react',
      },
    },
  ],
  preview: {
    select: {
      provider: 'icon.provider',
      name: 'icon.name',
    },
    prepare(icon) {
      return {
        title: icon.provider,
        subtitle: icon.name,
        media: preview(icon),
      };
    },
  },
};
