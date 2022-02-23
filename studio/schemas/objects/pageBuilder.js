import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Page Builder',
  name: 'pageBuilder',
  type: 'array',
  icon,
  of: [
    { type: 'benefits', title: 'Benefits Section (Home page)' },
    { type: 'contacts', title: 'Contact Section (Contact page)' },
    { type: 'cta', title: 'CTA Section (Home page)' },
    { type: 'employees', title: 'Employees (About page)' },
    { type: 'features', title: 'Features Section (Home page)' },
    { type: 'hero', title: 'Hero Section (Any page)' },
    { type: 'menuSection', title: 'Menu Section (Menu page)' },
    { type: 'richText', title: 'Rich Text Section (Any page)' },
    { type: 'services', title: 'Services Section (Home page)' },
    { type: 'spacer', title: 'Spacer Section (Contact page)' },
    { type: 'testimonials', title: 'Testimonials (Any page)' },
    { type: 'customSection', title: 'Custom Section (Any page)' },
  ],
};
