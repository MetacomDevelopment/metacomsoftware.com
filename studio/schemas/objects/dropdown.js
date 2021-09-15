export default {
  title: 'Dropdown Menu',
  name: 'dropdown',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  // fieldsets: [
  //   {
  //     title: 'Dropdown Menu',
  //     name: 'metadataSet',
  //   },
  // ],
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
              type: 'page',
            },
          ],
        },
      ],
    },
  ],
};
