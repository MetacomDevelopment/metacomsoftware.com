import { FaListAlt as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Spacer',
  name: 'spacer',
  type: 'object',
  icon,
  inputComponent: Tabs,
  fieldsets: [
    { title: 'Mobile', name: 'mobileSet' },
    { title: 'Desktop', name: 'desktopSet' },
  ],
  fields: [
    {
      title: 'Height',
      description: 'Enter the height for the spacer on mobile devices.',
      name: 'heightMobile',
      type: 'string',
      fieldset: 'mobileSet',
    },
    {
      title: 'Height',
      description: 'Enter the height for the spacer on desktop computers.',
      name: 'heightDesktop',
      type: 'string',
      fieldset: 'desktopSet',
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
