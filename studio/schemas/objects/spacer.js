import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Spacer',
  name: 'spacer',
  type: 'object',
  icon,
  groups: [
    { title: 'Mobile', name: 'mobileSet' },
    { title: 'Desktop', name: 'desktopSet' },
  ],
  fields: [
    {
      title: 'Height',
      description: 'Enter the height for the spacer on mobile devices.',
      name: 'heightMobile',
      type: 'string',
      group: 'mobileSet',
    },
    {
      title: 'Height',
      description: 'Enter the height for the spacer on desktop computers.',
      name: 'heightDesktop',
      type: 'string',
      group: 'desktopSet',
    },
  ],
  preview: {
    select: {
      mobile: 'heightMobile',
      desktop: 'heightDesktop',
      media: 'icon',
    },
    prepare(selection) {
      const { mobile, desktop, media } = selection;
      return {
        title: `Spacer: ${mobile} / ${desktop} px (Mobile/Desktop)`,
        media,
      };
    },
  },
};
