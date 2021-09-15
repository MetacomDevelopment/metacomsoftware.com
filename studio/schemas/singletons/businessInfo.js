export default {
  name: 'businessInfo',
  title: 'Information',
  type: 'document',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  fieldsets: [
    {
      title: 'Information',
      name: 'businessInfoSet',
    },
  ],
  fields: [
    {
      name: 'gmb',
      title: 'Info',
      type: 'gmb',
    },
  ],
};
