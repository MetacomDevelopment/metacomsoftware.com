export default {
  name: 'businessLogo',
  title: 'Logos',
  type: 'document',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 2, // Defines a grid for the fields and how many columns it should have
  },
  // fieldsets: [
  //   {
  //     title: 'Logos',
  //     name: 'businessInfoSet',
  //   },
  // ],
  fields: [
    {
      title: 'Navbar',
      description: 'Upload an image.',
      name: 'navbar',
      type: 'imageAlt',
    },
    {
      title: 'Footer',
      description: 'Upload an image.',
      name: 'footer',
      type: 'imageAlt',
    },
    {
      title: 'Favicon',
      description: 'Upload an image.',
      name: 'favicon',
      type: 'imageAlt',
    },
  ],
};
