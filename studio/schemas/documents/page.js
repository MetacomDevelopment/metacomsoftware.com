import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Page Type', name: 'pageTypeSet' },
    { title: 'Anchor Text', name: 'anchorTextSet' },
    { title: 'Metadata', name: 'metadataSet' },
    { title: 'Page Builder', name: 'pageBuilderSet' },
  ],
  fields: [
    {
      title: 'Page Type',
      description: 'Choose a type for the page...',
      name: 'pageType',
      type: 'string',
      options: {
        list: [
          { title: 'Brand', value: 'brand' },
          { title: 'Service', value: 'service' },
          { title: 'Location', value: 'location' },
          { title: 'Post', value: 'post' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'pageTypeSet',
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
      title: 'anchor',
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
