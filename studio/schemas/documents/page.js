import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Anchor Text', name: 'anchorTextSet' },
    { title: 'Metadata', name: 'metadataSet' },
    { title: 'Page Builder', name: 'pageBuilderSet' },
  ],
  fields: [
    {
      title: 'Page Layout',
      description: 'Choose a layout for the page...',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Brand', value: 'brand' },
          { title: 'Service', value: 'service' },
          { title: 'Location', value: 'location' },
          { title: 'Post', value: 'Post' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'layoutSet',
    },
    {
      title: 'Anchor Text',
      description: 'Enter the anchor text for navbar links.',
      name: 'anchor',
      type: 'string',
      fieldset: 'anchorTextSet',
    },
    {
      title: 'Metadata',
      name: 'metadata',
      type: 'metadata',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
      fieldset: 'metadataSet',
    },
    {
      title: 'Page Builder',
      name: 'pageBuilder',
      type: 'pageBuilder',
      fieldset: 'pageBuilderSet',
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
