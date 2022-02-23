import S from '@sanity/desk-tool/structure-builder';
// import { createSuperPane } from 'sanity-super-pane';
import {
  FaAddressCard as iconInfo,
  FaAddressCard as iconNap,
  FaBoxOpen as iconProducts,
  FaBrush as iconTheme,
  FaBuilding as iconBusiness,
  FaChartLine as iconCaseStudies,
  FaClone as iconPages,
  FaCode as iconMetadata,
  FaCog as iconSettings,
  FaCommentDots as iconTestimonials,
  FaGlobe as iconSEO,
  FaLayerGroup as iconCategories,
  FaPalette as iconColors,
  FaPencilAlt as iconPosts,
  FaShareAlt as iconSocials,
  FaStar as iconReviews,
  FaTag as iconTags,
  FaTools as iconServices,
  FaTrello as iconProjects,
  FaUpload as iconLogo,
  FaUserEdit as iconAuthor,
  FaUsers as iconTeam,
  FaCalendarCheck as iconEvents,
} from 'react-icons/fa';
import { SiGooglemybusiness as iconGMB } from 'react-icons/si';
import { RiLayout5Fill as iconTemplates } from 'react-icons/ri';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(iconSettings)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Global SEO')
                .icon(iconSEO)
                .child(
                  S.document()
                    .title('Global SEO')
                    .schemaType('businessSeo')
                    .documentId('businessSeo')
                ),
              S.listItem()
                .title('Brand Info')
                .icon(iconInfo)
                .child(
                  S.document()
                    .title('Brand Info')
                    .schemaType('businessInfo')
                    .documentId('businessInfo')
                ),
            ])
        ),
      S.listItem()
        .title('Theme')
        .icon(iconTheme)
        .child(
          S.list()
            .title('Theme')
            .items([
              S.listItem()
                .title('Company Logos')
                .icon(iconLogo)
                .child(
                  S.document()
                    .title('Company Logos')
                    .schemaType('businessLogo')
                    .documentId('businessLogo')
                ),
              S.listItem()
                .title('Color Palette')
                .icon(iconColors)
                .child(
                  S.list()
                    .title('Color Palette')
                    .items([
                      S.listItem()
                        .title('Primary')
                        .icon(iconColors)
                        .child(
                          S.document()
                            .title('Primary')
                            .schemaType('colorsPrimary')
                            .documentId('colorsPrimary')
                        ),
                      S.listItem()
                        .title('Secondary')
                        .icon(iconColors)
                        .child(
                          S.document()
                            .title('Secondary')
                            .schemaType('colorsSecondary')
                            .documentId('colorsSecondary')
                        ),
                      S.listItem()
                        .title('Accent')
                        .icon(iconColors)
                        .child(
                          S.document()
                            .title('Accent')
                            .schemaType('colorsAccent')
                            .documentId('colorsAccent')
                        ),
                      S.listItem()
                        .title('Neutral')
                        .icon(iconColors)
                        .child(
                          S.document()
                            .title('Neutral')
                            .schemaType('colorsNeutral')
                            .documentId('colorsNeutral')
                        ),
                      S.listItem()
                        .title('Hero')
                        .icon(iconColors)
                        .child(
                          S.document()
                            .title('Hero')
                            .schemaType('colorsHero')
                            .documentId('colorsHero')
                        ),
                    ])
                ),
            ])
        ),
      S.listItem()
        .title('Templates')
        .icon(iconTemplates)
        .child(
          S.list()
            .title('Templates')
            .items([
              S.listItem()
                .title('Header')
                .icon(iconTemplates)
                .child(
                  S.document()
                    .title('Header')
                    .schemaType('navbars')
                    .documentId('navbars')
                ),
              S.listItem()
                .title('Footer')
                .icon(iconTemplates)
                .child(
                  S.document()
                    .title('Footer')
                    .schemaType('footers')
                    .documentId('footers')
                ),
              S.listItem()
                .title('Sidebars')
                .icon(iconTemplates)
                .child(
                  S.document()
                    .title('Sidebars')
                    .schemaType('footers')
                    .documentId('footers')
                ),
              S.listItem()
                .title('Forms')
                .icon(iconTemplates)
                .child(
                  S.document()
                    .title('Forms')
                    .schemaType('forms')
                    .documentId('forms')
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Pages')
        .icon(iconPages)
        .schemaType('page')
        // .child(createSuperPane('page', S)),
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Categories')
        .icon(iconCategories)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Tags')
        .icon(iconTags)
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('Tags')),
      S.divider(),
      S.listItem()
        .title('GBPs')
        .icon(iconGMB)
        .schemaType('gmb')
        .child(S.documentTypeList('gmb').title('GBPs')),
      S.listItem()
        .title('Socials')
        .icon(iconSocials)
        .schemaType('social')
        .child(S.documentTypeList('social').title('Socials')),
      S.listItem()
        .title('Employees')
        .icon(iconTeam)
        .schemaType('employee')
        .child(S.documentTypeList('employee').title('Employees')),
      S.divider(),
      S.listItem()
        .title('Products')
        .icon(iconProducts)
        .schemaType('product')
        .child(S.documentTypeList('product').title('Products')),
      S.listItem()
        .title('Services')
        .icon(iconServices)
        .schemaType('service')
        .child(S.documentTypeList('service').title('Services')),
      S.divider(),
      S.listItem()
        .title('Projects')
        .icon(iconProjects)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Case Studies')
        .icon(iconCaseStudies)
        .schemaType('caseStudy')
        .child(S.documentTypeList('caseStudy').title('Case Studies')),
      S.listItem()
        .title('Reviews')
        .icon(iconReviews)
        .schemaType('review')
        .child(S.documentTypeList('review').title('Reviews')),
      S.listItem()
        .title('Events')
        .icon(iconEvents)
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'businessInfo',
            'businessLogo',
            'businessSeo',
            'caseStudy',
            'category',
            'colorsAccent',
            'colorsHero',
            'colorsNeutral',
            'colorsPrimary',
            'colorsSecondary',
            'employee',
            'event',
            'footers',
            'forms',
            'gmb',
            'logo',
            'media.tag',
            'navbars',
            'page',
            'product',
            'project',
            'review',
            'service',
            'settingsMetadata',
            'social',
            'tag',
          ].includes(listItem.getId())
      ),
    ]);
