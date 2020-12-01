export default {
  name: 'home',
  title: 'Page - Home',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'heroLogoImage',
      title: 'Hero Section - Logo Image',
      description: 'Add a logo image within the "Hero" section',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'heroLogoImageAlt',
      title: 'Hero Section - Logo Image Alt Text',
      description: 'Add alt text to your logo image',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroHeadline',
      title: 'Hero Section - Headline',
      description: 'Add a headline within the "Hero" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroSubheadline',
      title: 'Hero Section - Subheadline',
      description: 'Add a subheadline within the "Hero" section',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroCtaText',
      title: 'Hero Section - CTA Text',
      description: 'Add text to the CTA button within the "Hero" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroCtaLink',
      title: 'Hero Section - CTA Link',
      description: 'Add a link to the CTA button within the "Hero" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutHeadline',
      title: 'About Section - Headline',
      description: 'Add a headline within the "About" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutSubheadline',
      title: 'About Section - Subheadline',
      description: 'Add a subheadline within the "About" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutText',
      title: 'About Section - Main Text',
      description: 'Add text within the "About" section',
      type: 'array',
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutImage',
      title: 'About Section - Image',
      description: 'Add an image within the "About" section',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutImageAlt',
      title: 'About Section - Image Alt Text',
      description: 'Add alt text to your image',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'practiceHeadline',
      title: 'Practices Section - Headline',
      description: 'Add a headline within the "Practices" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'practiceSubheadline',
      title: 'Practices Section - Subheadline',
      description: 'Add a subheadline within the "Practices" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'practices',
      title: 'Practices Section - List of Practices',
      description: 'Add a practice within the "Practices" section',
      type: 'array',
      of: [{type: 'practice'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'serviceHeadline',
      title: 'Services Section - Headline',
      description: 'Add a headline within the "Services" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'serviceSubheadline',
      title: 'Services Section - Subheadline',
      description: 'Add a subheadline within the "Services" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'services',
      title: 'Services Section - List of Services',
      description: 'Add a service within the "Services" section',
      type: 'array',
      of: [{type: 'service'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'techHeadline',
      title: 'Tech Section - Headline',
      description: 'Add a headline within the "Tech We Use" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'techSubheadline',
      title: 'tech Section - Subheadline',
      description: 'Add a subheadline within the "Tech We Use" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'techWeUseLogos',
      title: 'Tech We Use Section - List of Tech We Use',
      description: 'Add a tech logo within the "Tech We Use" section',
      type: 'array',
      of: [{type: 'techWeUseLogo'}],
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
