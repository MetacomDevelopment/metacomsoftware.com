export default {
  name: 'surgecon',
  title: 'Page - SurgeCon',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'surgeconHeroHeadline',
      title: 'Hero Section - Headline',
      description: 'Add a headline within the "Hero" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconHeroSubheadline',
      title: 'Hero Section - Subheadline',
      description: 'Add a subheadline within the "Hero" section',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconHeroCtaText',
      title: 'Hero Section - CTA Text',
      description: 'Add text to the CTA button within the "Hero" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconHeroCtaLink',
      title: 'Hero Section - CTA Link',
      description: 'Add a link to the CTA button within the "Hero" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconAboutLogo',
      title: 'About Section - Logo',
      description: 'Add a logo within the "About" section',
      type: 'imageAlt',
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconAboutText',
      title: 'About Section - Main Text',
      description: 'Add text within the "About" section',
      type: 'array',
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconAboutImage',
      title: 'About Section - Image',
      description: 'Add an image within the "About" section',
      type: 'imageAlt',
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconFeaturesHeadline',
      title: 'Features Section - Headline',
      description: 'Add a headline within the "Features" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconFeaturesList',
      title: 'Features Section - List of Features',
      description: 'Add a benefit within the "Features" section',
      type: 'array',
      of: [{type: 'surgeconFeature'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconCovidBenefitsHeadline',
      title: 'Covid Benefits Section - Headline',
      description: 'Add a headline within the "Covid Benefits" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconCovidBenefitsList',
      title: 'Covid Section - List of Covid Benefit',
      description: 'Add a benefit within the "Covid Benefits" section',
      type: 'array',
      of: [{type: 'surgeconCovidBenefit'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconBenefitsHeadline',
      title: 'Benefits Section - Headline',
      description: 'Add a headline within the "Benefits" section',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'surgeconBenefitsList',
      title: 'Benefits Section - List of Benefits',
      description: 'Add a surgeconBenefits within the "Benefits" section',
      type: 'array',
      of: [{type: 'practice'}],
      validation: Rule => Rule.required()
    },
  ],
}
