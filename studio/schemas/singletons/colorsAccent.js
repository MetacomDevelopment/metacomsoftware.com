import Tabs from 'sanity-plugin-tabs';

export default {
  name: `colorsAccent`,
  title: `Colors: Accent`,
  type: `document`,
  inputComponent: Tabs,
  fieldsets: [
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
      fieldset: 'defaultSet',
    },
    {
      title: 'Light',
      name: 'light',
      type: 'colors',
      fieldset: 'lightSet',
    },
    {
      name: 'lighter',
      title: 'Lighter',
      type: 'colors',
      fieldset: 'lighterSet',
    },
    {
      name: 'dark',
      title: 'Dark',
      type: 'colors',
      fieldset: 'darkSet',
    },
    {
      name: 'darker',
      title: 'Darker',
      type: 'colors',
      fieldset: 'darkerSet',
    },
  ],
};
