import { FaFileInvoice as icon } from 'react-icons/fa';

export default {
  title: 'Menu Items',
  name: 'navItem',
  type: 'object',
  icon,
  groups: [
    { title: 'Menu Item Type', name: 'menuItemTypeSet' },
    { title: 'Single Page Link', name: 'singlePageLinkSet' },
    { title: 'Dropdown Menu', name: 'dropdownMenuSet' },
  ],
  fields: [
    {
      title: 'Menu Item Type',
      description: 'Directions: Select the menu item type to be displayed.',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Single Page Link', value: 'single' },
          { title: 'Dropdown Menu', value: 'dropdown' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'menuItemTypeSet',
    },
    {
      title: 'Single Page Link',
      description: 'Directions: Select a page link for the menu item.',
      name: 'singlePageLink',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ parent }) => !(parent?.type === 'single'),
      group: 'singlePageLinkSet',
    },
    {
      title: 'Text Label',
      description: 'Directions: Enter a text label for the dropdown menu item.',
      name: 'dropdownTextLabel',
      type: 'string',
      hidden: ({ parent }) => !(parent?.type === 'dropdown'),
      group: 'dropdownMenuSet',
    },
    {
      title: 'Dropdown Links',
      description: 'Directions: Add page links to the dropdown menu.',
      name: 'dropdowns',
      type: 'array',
      of: [{ type: 'navItem' }],
      hidden: ({ parent }) => !(parent?.type === 'dropdown'),
      group: 'dropdownMenuSet',
    },
  ],
  preview: {
    select: {
      single: 'singlePageLink.anchor',
      dropdownTextOnly: 'dropdownTextLabel',
      dropdownLink: 'dropdownPageLink.page.anchor',
      media: 'pageLinks.0.pageBuilder.0.bgImg',
    },
    prepare(selection) {
      const { single, dropdownTextOnly, dropdownLink, media } = selection;
      return {
        title: single
          ? `${single} (Single Link)`
          : `${dropdownTextOnly} (Dropdown Menu)`
          ? `${dropdownTextOnly} (Dropdown Menu)`
          : `${dropdownLink} (Dropdown Menu)`,
        media: media,
      };
    },
  },
};
