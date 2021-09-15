export default {
  name: `colorsSecondary`,
  title: `Colors: Secondary`,
  type: `document`,
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
    columns: 3, // Defines a grid for the fields and how many columns it should have
  },
  fields: [
    {
      name: 'default',
      title: 'Default',
      type: 'colors',
    },
    {
      name: 'light',
      title: 'Light',
      type: 'colors',
    },
    {
      name: 'lighter',
      title: 'Lighter',
      type: 'colors',
    },
    {
      name: 'dark',
      title: 'Dark',
      type: 'colors',
    },
    {
      name: 'darker',
      title: 'Darker',
      type: 'colors',
    },
  ],
};
