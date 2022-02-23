export default {
  name: `colorsSecondary`,
  title: `Colors: Secondary`,
  type: `document`,

  groups: [
    { title: 'Default', name: 'defaultSet' },
    { title: 'Light', name: 'lightSet' },
    { title: 'Lighter', name: 'lighterSet' },
    { title: 'Dark', name: 'darkSet' },
    { title: 'Darker', name: 'darkerSet' },
  ],
  fields: [
    {
      name: 'default',
      title: 'Default',
      type: 'colors',
      group: 'defaultSet',
    },
    {
      name: 'defaultCustom',
      title: 'Custom Color',
      type: 'color',
      group: 'defaultSet',
    },
    {
      name: 'light',
      title: 'Light',
      type: 'colors',
      group: 'lightSet',
    },
    {
      name: 'lightCustom',
      title: 'Custom Color',
      type: 'color',
      group: 'lightSet',
    },
    {
      name: 'lighter',
      title: 'Lighter',
      type: 'colors',
      group: 'lighterSet',
    },
    {
      name: 'lighterCustom',
      title: 'Custom Color',
      type: 'color',
      group: 'lighterSet',
    },
    {
      name: 'dark',
      title: 'Dark',
      type: 'colors',
      group: 'darkSet',
    },
    {
      name: 'darkCustom',
      title: 'Custom Color',
      type: 'color',
      group: 'darkSet',
    },
    {
      name: 'darker',
      title: 'Darker',
      type: 'colors',
      group: 'darkerSet',
    },
    {
      name: 'darkerCustom',
      title: 'Custom Color',
      type: 'color',
      group: 'darkerSet',
    },
  ],
};
