export default {
  name: 'home',
  title: 'Page - Home',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Section - Headline',
      description: 'Add a headline within the hero section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroSubheadline',
      title: 'Hero Section - Subheadline',
      description: 'Add a subheadline within the hero section',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroCtaText',
      title: 'Hero Section - CTA Text',
      description: 'Add text to the CTA button within the hero section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroCtaLink',
      title: 'Hero Section - CTA Link',
      description: 'Add a link to the CTA button within the hero section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'practiceHeadline',
      title: 'Practices Section - Headline',
      description: 'Add a headline within the practices section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'practiceSubheadline',
      title: 'Practices Section - Subheadline',
      description: 'Add a subheadline within the practices section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'practices',
      title: 'Practices Section - List of Practices',
      description: 'Add a practice within the practices section',
      type: 'array',
      of: [{type: 'practice'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutHeadline',
      title: 'About Section - Headline',
      description: 'Add a headline within the about section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutSubheadline',
      title: 'About Section - Subheadline',
      description: 'Add a subheadline within the about section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutText',
      title: 'About Section - Main Text',
      description: 'Add text within the about section',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutImage',
      title: 'About Section - Image',
      description: 'Add text within the about section',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutImageAlt',
      title: 'About Section - Image Alt Text',
      description: 'Add alt text for your image',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'serviceHeadline',
      title: 'Services Section - Headline',
      description: 'Add a headline within the services section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'serviceSubheadline',
      title: 'Services Section - Subheadline',
      description: 'Add a subheadline within the services section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'services',
      title: 'Services Section - List of Services',
      description: 'Add a service within the services section',
      type: 'array',
      of: [{type: 'service'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'teamHeadline',
      title: 'Team Section - Headline',
      description: 'Add a headline within the team section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'teamSubheadline',
      title: 'Team Section - Subheadline',
      description: 'Add a subheadline within the team section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'teamMembers',
      title: 'Team Section - List of Team Members',
      description: 'Add a team member within the team section',
      type: 'array',
      of: [{type: 'teamMember'}],
      validation: Rule => Rule.required()
    },
  ],
}
