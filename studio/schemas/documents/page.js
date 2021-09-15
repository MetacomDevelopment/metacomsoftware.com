export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Layout',
      description: 'Choose a layout for the page...',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Page', value: 'page' },
          { title: 'Service', value: 'service' },
          { title: 'Location', value: 'location' },
          { title: 'Post', value: 'Post' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      title: 'Anchor Text',
      description: 'Enter the navbar anchor text.',
      name: 'anchor',
      type: 'string',
    },
    {
      name: 'metadata',
      type: 'metadata',
      title: 'Metadata',
    },
    {
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Page Builder',
    },
  ],
  preview: {
    select: {
      title: 'metadata.title',
      slug: 'metadata.slug.current',
      media: 'pageBuilder.0.bgImg',
    },
    prepare(selection) {
      const { title, slug, media } = selection;
      return {
        title: title,
        subtitle: `Path: /${slug ? slug : 'unknown'}/`,
        media: media,
      };
    },
  },
};
