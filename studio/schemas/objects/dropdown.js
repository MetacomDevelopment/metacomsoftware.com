export default {
  title: 'Dropdown Menu',
  name: 'dropdown',
  type: 'object',
  groups: [
    {
      title: 'Dropdown Menu',
      name: 'metadataSet',
    },
  ],
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'navItem',
            },
          ],
        },
      ],
    },
  ],
};
