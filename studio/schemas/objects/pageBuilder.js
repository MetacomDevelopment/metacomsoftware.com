import { FaListAlt as icon } from 'react-icons/fa';

export default {
  name: 'pageBuilder',
  type: 'array',
  title: 'Page Builder',
  icon,
  of: [
    { type: 'hero', title: 'Hero' },
    { type: 'benefits', title: 'Benefits' },
    { type: 'features', title: 'Features' },
    { type: 'ctaFull', title: 'CTA (Full)' },
    { type: 'services', title: 'Services' },
    { type: 'ctaHalf', title: 'CTA (Half)' },
    { type: 'testimonials', title: 'Testimonials' },
  ],
};
