import { FaFileInvoice as icon } from 'react-icons/fa';

export default {
  title: 'Navbar: Desktop',
  name: 'navbars',
  type: 'document',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Navbar: Desktop',
      name: 'navbarsSet',
    },
  ],
  fields: [
    {
      title: 'Navbar Items',
      description: 'Create an item for the navbar.',
      name: 'navItem',
      type: 'array',
      of: [{ type: 'navItem' }],
    },
    // {
    //   title: 'Navbar: Dropdown Menus',
    //   description: 'Create a dropdown menu and add navigational links',
    //   name: 'dropdowns',
    //   type: 'array',
    //   of: [{ type: 'dropdown' }],
    // },
    // {
    //   title: 'Navbar: Individual Links',
    //   description: 'Create individual navigational links',
    //   name: 'pageLinks',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [
    //         {
    //           type: 'page',
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      name: 'contactLinks',
      title: 'Contact Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'nap',
            },
          ],
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'social',
            },
          ],
        },
      ],
    },
  ],
};
