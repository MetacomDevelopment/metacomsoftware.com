import React from 'react';
import { FaPaperclip, FaGlobe, FaExchangeAlt } from 'react-icons/fa';

import {
  mathInlineIcon,
  mathIcon,
  highlightIcon,
  highlightRender,
} from '../components/PortableTextEditorComponents';

export default {
  title: 'Content',
  name: 'portableTextBody',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles set the various mark up that the user can use to format content blocks. These
      // correspond to HTML tags, but you can set a custom title and/or value
      // and decide how it will be formatted or displayed where your content is used.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },

          /*
          {
            title: 'Math',
            value: 'latex',
            blockEditor: {
              icon: latexIcon,
              render: latexRender
            }
          }
          */
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'External link',
            name: 'externalLink',
            type: 'object',
            blockEditor: {
              icon: FaGlobe,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
          {
            title: 'Internal link',
            name: 'internalLink',
            type: 'object',
            blockEditor: {
              icon: FaPaperclip,
            },
            fields: [
              {
                title: 'Reference',
                name: 'reference',
                type: 'reference',
                to: [{ type: 'page' }],
              },
            ],
          },
          {
            title: 'Variables',
            name: 'variable',
            type: 'object',
            blockEditor: {
              icon: FaExchangeAlt,
            },
            fields: [
              {
                title: 'Reference',
                name: 'reference',
                type: 'reference',
                to: [{ type: 'gmb' }],
              },
            ],
          },
        ],
      },
      // of: [
      //   { type: 'authorReference' },
      //   { type: 'math', icon: mathInlineIcon, title: 'Inline math' },
      // ],
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'imageAlt',
    },
    // { type: 'instagram' },
    // { type: 'videoEmbed' },
    // { type: 'math', icon: mathIcon, title: 'Math block' },
  ],
};
