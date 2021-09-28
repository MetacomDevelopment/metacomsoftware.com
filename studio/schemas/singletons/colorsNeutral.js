export default {
  name: `colorsNeutral`,
  title: `Colors: Neutral`,
  type: `document`,
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
    columns: 3, // Defines a grid for the fields and how many columns it should have
  },
  fields: [
    {
      title: 'Default',
      name: 'default',
      type: 'colors',
    },
    {
      title: 'White',
      name: 'white',
      type: 'colors',
    },
    {
      title: 'Light',
      name: 'light',
      type: 'colors',
    },
    {
      title: 'Lighter',
      name: 'lighter',
      type: 'colors',
    },
    {
      title: 'Dark',
      name: 'dark',
      type: 'colors',
    },
    {
      title: 'Darker',
      name: 'darker',
      type: 'colors',
    },
    {
      title: 'Black',
      name: 'black',
      type: 'colors',
    },
  ],
};
