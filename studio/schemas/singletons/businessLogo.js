import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'businessLogo',
  title: 'Logos',
  type: 'document',
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Navbar', name: 'navbarSet' },
    { title: 'Footer', name: 'footerSet' },
    { title: 'Favicon', name: 'faviconSet' },
  ],
  fields: [
    {
      title: 'Navbar Logo',
      description: 'Upload an image that properly fits the navbar.',
      name: 'navbar',
      type: 'imageAlt',
      fieldset: 'navbarSet',
    },
    {
      title: 'Footer Logo',
      description: 'Upload an image that properly fits the footer.',
      name: 'footer',
      type: 'imageAlt',
      fieldset: 'footerSet',
    },
    {
      title: 'Favicon Logo',
      description: 'Upload an image that properly fits the favicon.',
      name: 'favicon',
      type: 'imageAlt',
      fieldset: 'faviconSet',
    },
  ],
};
