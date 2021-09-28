import SvgPreviewComponent from '../components';

export default {
  type: 'object',
  name: 'svgUpload',
  title: 'Client Image Upload',
  fields: [
    {
      type: 'string',
      name: 'source',
      title: 'Client SVG Logo',
    },
  ],
  preview: {
    select: {
      svgHtml: 'source',
    },
    component: SvgPreviewComponent,
  },
};
