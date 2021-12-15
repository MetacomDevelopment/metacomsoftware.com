import Tabs from 'sanity-plugin-tabs';

export default {
  name: `colorsHero`,
  title: `Colors: Hero`,
  type: `document`,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Headline', name: 'headlineSet' },
    { title: 'Tagline', name: 'taglineSet' },
    { title: 'Overlay', name: 'overlaySet' },
  ],
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'colors',
      fieldset: 'headlineSet',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'colors',
      fieldset: 'taglineSet',
    },
    {
      name: 'overlay',
      title: 'Overlay',
      type: 'colors',
      fieldset: 'overlaySet',
    },
  ],
};
