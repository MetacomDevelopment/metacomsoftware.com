import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Custom Section',
  name: 'customSection',
  type: 'object',
  icon,
  groups: [
    { title: 'ID', name: 'idSet' },
    { title: 'Padding', name: 'paddingSet' },
    { title: 'Background', name: 'bgSet' },
    { title: 'Heading', name: 'headingSet' },
    { title: 'Layout', name: 'layoutSet' },
    { title: 'Content', name: 'contentSet' },
  ],
  fields: [
    {
      title: 'ID Name',
      description: 'Pick an ID name for the section (Example: "features")',
      name: 'idName',
      type: 'string',
      group: 'idSet',
    },
    {
      title: 'Padding Position',
      name: 'paddingPosition',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Top + Bottom', value: 'both' },
          { title: 'Top Only', value: 'top' },
          { title: 'Bottom Only', value: 'bottom' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'both',
      group: 'paddingSet',
    },
    {
      title: 'Padding Size',
      name: 'paddingSize',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Small (2rem / 32px)', value: 'sm' },
          { title: 'Medium (4rem / 64px)', value: 'md' },
          { title: 'Large (6rem / 96px)', value: 'lg' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'sm',
      group: 'paddingSet',
    },
    {
      title: 'Background',
      name: 'bg',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Color', value: 'bgColor' },
          { title: 'Image', value: 'bgImg' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'none',
      group: 'bgSet',
    },
    {
      title: 'Tailwind Color',
      name: 'twColor',
      type: 'colors',
      hidden: ({ parent }) => !(parent?.bg === 'bgColor'),
      group: 'bgSet',
    },
    {
      title: 'Custom Color',
      name: 'customColor',
      type: 'color',
      hidden: ({ parent }) => !(parent?.bg === 'bgColor'),
      group: 'bgSet',
    },
    {
      title: 'Image',
      name: 'bgImg',
      type: 'imageAlt',
      hidden: ({ parent }) => !(parent?.bg === 'bgImg'),
      group: 'bgSet',
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      group: 'headingSet',
    },
    {
      title: 'Subheadline',
      name: 'subheadline',
      type: 'portableText',
      group: 'headingSet',
    },
    {
      title: 'Tagline',
      name: 'tagline',
      description: 'Displayed above the headline',
      type: 'string',
      group: 'headingSet',
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: '1 Column', value: 'one' },
          { title: '2 Columns', value: 'two' },
          { title: '3 Columns', value: 'three' },
          { title: '4 Columns', value: 'four' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'one',
      group: 'layoutSet',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'string',
      options: {
        list: [
          { title: 'Text Only', value: 'text' },
          { title: 'Image + Text', value: 'imgText' },
          { title: 'SVG + Text', value: 'svgText' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'text',
      group: 'contentSet',
    },
    {
      title: 'Image',
      name: 'contentImg',
      type: 'imageAlt',
      hidden: ({ parent }) => !(parent?.content === 'imgText'),
      group: 'contentSet',
    },
    {
      title: 'SVG',
      description: 'Enter the SVG filename.',
      name: 'contentSvg',
      type: 'string',
      hidden: ({ parent }) => !(parent?.content === 'svgText'),
      group: 'contentSet',
    },
    {
      title: 'Column 1: Text',
      name: 'colOneContentText',
      type: 'portableText',
      group: 'contentSet',
    },
    {
      title: 'Column 2: Text',
      name: 'colTwoContentText',
      type: 'portableText',
      group: 'contentSet',
    },
    {
      title: 'Column 3: Text',
      name: 'colThreeContentText',
      type: 'portableText',
      group: 'contentSet',
    },
    {
      title: 'Column 4: Text',
      name: 'colFourContentText',
      type: 'portableText',
      group: 'contentSet',
    },
  ],
  preview: {
    select: {
      layout: 'layout',
      content: 'content',
      media: 'icon',
    },
    prepare(selection) {
      const { layout, content, media } = selection;
      return {
        title: `Section: ${
          layout.charAt(0).toUpperCase() + layout.slice(1)
        } Column with ${content.charAt(0).toUpperCase() + content.slice(1)}`,
        media,
      };
    },
  },
};
