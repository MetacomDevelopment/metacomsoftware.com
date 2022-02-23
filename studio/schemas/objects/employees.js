import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Employees',
  name: 'employees',
  type: 'object',
  icon,
  groups: [
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Section ID', name: 'sectionIdSet' },
    { title: 'Section Headline', name: 'sectionSet' },
    { title: 'Employees', name: 'employeesSet' },
  ],
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [{ title: 'Images', value: 'images' }],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'layoutSet',
    },
    {
      title: 'ID Name',
      description: 'Pick an ID name for the section (Example: "features")',
      name: 'idName',
      type: 'string',
      group: 'sectionIdSet',
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      group: 'sectionSet',
    },
    {
      title: 'Tagline',
      name: 'tagline',
      type: 'string',
      group: 'sectionSet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
      group: 'sectionSet',
    },
    {
      title: 'Employee',
      name: 'employee',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'employee' }],
        },
      ],
      group: 'employeesSet',
    },
  ],
  preview: {
    select: {
      title: 'layout',
      media: 'icon',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: `Employees: ${title.charAt(0).toUpperCase() + title.slice(1)}`,
        media,
      };
    },
  },
};
