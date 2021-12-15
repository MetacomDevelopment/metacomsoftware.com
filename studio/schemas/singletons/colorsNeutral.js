import Tabs from 'sanity-plugin-tabs';

export default {
  name: `colorsNeutral`,
  title: `Colors: Neutral`,
  type: `document`,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Default', name: 'defaultSet' },
    { title: 'Light', name: 'lightSet' },
    { title: 'Lighter', name: 'lighterSet' },
    { title: 'Dark', name: 'darkSet' },
    { title: 'Darker', name: 'darkerSet' },
    { title: 'White', name: 'whiteSet' },
    { title: 'Black', name: 'blackSet' },
  ],
  fields: [
    {
      title: 'Default',
      name: 'default',
      type: 'colors',
      fieldset: 'defaultSet',
    },
    {
      title: 'Light',
      name: 'light',
      type: 'colors',
      fieldset: 'lightSet',
    },
    {
      title: 'Lighter',
      name: 'lighter',
      type: 'colors',
      fieldset: 'lighterSet',
    },
    {
      title: 'Dark',
      name: 'dark',
      type: 'colors',
      fieldset: 'darkSet',
    },
    {
      title: 'Darker',
      name: 'darker',
      type: 'colors',
      fieldset: 'darkerSet',
    },
    {
      title: 'White',
      name: 'white',
      type: 'colors',
      fieldset: 'whiteSet',
    },
    {
      title: 'Black',
      name: 'black',
      type: 'colors',
      fieldset: 'blackSet',
    },
  ],
};
