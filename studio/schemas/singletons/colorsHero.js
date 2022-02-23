export default {
  name: `colorsHero`,
  title: `Colors: Hero`,
  type: `document`,

  groups: [
    { title: 'Headline', name: 'headlineSet' },
    { title: 'Tagline', name: 'taglineSet' },
    { title: 'Overlay', name: 'overlaySet' },
  ],
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'colors',
      group: 'headlineSet',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'colors',
      group: 'taglineSet',
    },
    {
      name: 'overlay',
      title: 'Overlay',
      type: 'colors',
      group: 'overlaySet',
    },
  ],
};
