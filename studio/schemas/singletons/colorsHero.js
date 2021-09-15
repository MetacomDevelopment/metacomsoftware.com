export default {
  name: `colorsHero`,
  title: `Colors: Hero`,
  type: `document`,
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
    columns: 3, // Defines a grid for the fields and how many columns it should have
  },
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'colors',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'colors',
    },
    {
      name: 'overlay',
      title: 'Overlay',
      type: 'colors',
    },
  ],
};
