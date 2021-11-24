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
    { type: 'benefits', title: 'Benefits' },
    { type: 'contacts', title: 'Contacts' },
    { type: 'cta', title: 'CTA' },
    { type: 'features', title: 'Features' },
    { type: 'hero', title: 'Heros' },
    { type: 'richText', title: 'Rich Text' },
    { type: 'services', title: 'Services' },
    { type: 'testimonials', title: 'Testimonials' },
    { type: 'menuSection', title: 'Menu' },
  ],
};
