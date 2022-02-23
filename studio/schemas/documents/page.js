import { RiPagesFill as icon } from 'react-icons/fa';
import { StringWithLimits } from '../components';
import { DescriptionWithLimits } from '../components';

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon,
  groups: [
    { title: 'Page Type', name: 'pageTypeSet' },
    { title: 'Navigation', name: 'navSet' },
    { title: 'SEO', name: 'seoSet' },
    { title: 'Page Builder', name: 'pageBuilderSet' },
  ],
  fields: [
    {
      title: 'Page Type',
      description: 'Choose a type for the page...',
      name: 'pageType',
      type: 'string',
      options: {
        list: [
          { title: 'Brand', value: 'brand' },
          { title: 'Service', value: 'service' },
          { title: 'Product', value: 'product' },
          { title: 'Location', value: 'location' },
          { title: 'Post', value: 'post' },
          { title: 'None', value: 'none' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'pageTypeSet',
    },
    {
      title: 'Index Status',
      description: `WARNING: This page-specific index setting can be overridden by the global index setting.`,
      name: 'indexStatus',
      type: 'string',
      options: {
        list: [
          { title: 'Index', value: 'index' },
          { title: 'No Index', value: 'noIndex' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'seoSet',
      initialValue: 'index',
    },
    {
      title: 'Anchor Text',
      description:
        'Directions: Enter the anchor text for all internal link references.',
      name: 'anchor',
      type: 'string',
      group: 'navSet',
    },
    {
      title: 'Short Description',
      description:
        'Directions: Enter a short description for the navigation menu.',
      name: 'shortDescription',
      type: 'text',
      rows: 3,
      group: 'navSet',
    },
    {
      title: 'Add to Footer?',
      description:
        'Directions: Decide if this page should be linked in the footer.',
      name: 'addToFooter',
      type: 'boolean',
      initialValue: true,
      group: 'navSet',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .error('Title tag must be less than 55 characters.')
          .min(10)
          .max(55),
      inputComponent: StringWithLimits,
      group: 'seoSet',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      group: 'seoSet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .error('Meta description must be less than 155 characters.')
          .min(10)
          .max(155),
      inputComponent: DescriptionWithLimits,
      group: 'seoSet',
      rows: 3,
    },
    {
      title: 'Schema',
      name: 'schema',
      type: 'code',
      options: {
        language: 'js',
      },
      group: 'seoSet',
    },
    {
      title: 'Page Builder',
      name: 'pageBuilder',
      type: 'pageBuilder',
      group: 'pageBuilderSet',
    },
  ],
  preview: {
    select: {
      title: 'anchor',
      slug: 'slug.current',
      media: 'pageBuilder.0.bgImg',
    },
    prepare(selection) {
      const { title, slug, media } = selection;
      return {
        title: title,
        subtitle: slug ? `/${slug}/` : 'Error in slug',
        media: media,
      };
    },
  },
};
