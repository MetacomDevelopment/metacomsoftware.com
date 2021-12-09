export default {
  title: 'CTA Button',
  name: 'ctaButton',
  type: 'object',
  fields: [
    {
      title: 'Link Type',
      name: 'linkType',
      type: 'string',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
          { title: 'Jump', value: 'jump' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'internal',
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Internal Link',
      name: 'internalLink',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ parent }) => !(parent?.linkType === 'internal'),
      initialValue: 'home',
    },
    {
      title: 'External Link',
      name: 'externalLink',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
      hidden: ({ parent }) => !(parent?.linkType === 'external'),
      initialValue: '#',
    },
    {
      title: 'Jump Link',
      name: 'jumpLink',
      type: 'string',
      hidden: ({ parent }) => !(parent?.linkType === 'jump'),
      initialValue: '#',
    },
  ],
};
