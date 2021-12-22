import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Page Builder',
  name: 'pageBuilder',
  type: 'array',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  of: [
    { type: 'benefits', title: 'Benefits Section (Home page)' },
    { type: 'contacts', title: 'Contact Section (Contact page)' },
    { type: 'cta', title: 'CTA Section (Home page)' },
    { type: 'features', title: 'Features Section (Home page)' },
    { type: 'hero', title: 'Hero Section (Any page)' },
    { type: 'menuSection', title: 'Menu Section (Menu page)' },
    { type: 'richText', title: 'Rich Text Section (Any page)' },
    { type: 'services', title: 'Services Section (Home page)' },
    { type: 'spacer', title: 'Spacer Section (Contact page)' },
    { type: 'testimonials', title: 'Testimonials (Any page)' },
  ],
};
