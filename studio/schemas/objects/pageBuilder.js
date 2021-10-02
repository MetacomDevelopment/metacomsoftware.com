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
    { type: 'hero', title: 'All: Hero' },
    { type: 'richText', title: 'All: Rich Text' },
    { type: 'benefits', title: 'Home: Benefits' },
    { type: 'features', title: 'Home: Features' },
    { type: 'cta', title: 'Home: CTA' },
    { type: 'services', title: 'Home: Services' },
    { type: 'testimonials', title: 'Home: Testimonials' },
    { type: 'contacts', title: 'Contact: Contacts' },
  ],
};
