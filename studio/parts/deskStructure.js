import S from '@sanity/desk-tool/structure-builder';
import {
  FaBuilding as iconBusiness,
  FaClone as iconPages,
  FaCode as iconMetadata,
  FaCog as iconSettings,
  FaGlobe as iconSEO,
  FaUpload as iconLogo,
  FaAddressCard as iconNap,
  FaPalette as iconColors,
  FaPencilAlt as iconPosts,
  FaShareAlt as iconSocials,
  FaTag as iconTags,
  FaUserEdit as iconAuthors,
  FaUsers as iconTeam,
} from 'react-icons/fa';
import { SiGooglemybusiness as iconGMB } from 'react-icons/si';
import { RiLayout5Fill as iconLayouts } from 'react-icons/ri';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Business')
        .icon(iconBusiness)
        .child(
          S.list()
            .title('Business')
            .items([
              S.listItem()
                .title('SEO')
                .icon(iconSEO)
                .child(
                  S.document()
                    .title('SEO')
                    .schemaType('businessSeo')
                    .documentId('businessSeo')
                ),
              S.listItem()
                .title('Logos')
                .icon(iconLogo)
                .child(
                  S.document()
                    .title('Logos')
                    .schemaType('businessLogo')
                    .documentId('businessLogo')
                ),
              S.listItem()
                .title('NAP')
                .icon(iconNap)
                .schemaType('nap')
                .child(S.documentTypeList('nap').title('NAP')),
              S.listItem()
                .title('GMBs')
                .icon(iconGMB)
                .schemaType('gmb')
                .child(S.documentTypeList('gmb').title('GMBs')),
              S.listItem()
                .title('Socials')
                .icon(iconSocials)
                .schemaType('social')
                .child(S.documentTypeList('social').title('Socials')),
              S.listItem()
                .title('Employees')
                .icon(iconTeam)
                .schemaType('team')
                .child(S.documentTypeList('team').title('Team')),
            ])
        ),
      S.listItem()
        .title('Colors')
        .icon(iconColors)
        .child(
          S.list()
            .title('Colors')
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
      S.listItem()
        .title('Layouts')
        .icon(iconLayouts)
        .child(
          S.list()
            .title('Layouts')
            .items([
              S.listItem()
                .title('Navbars')
                .icon(iconLayouts)
                .child(
                  S.document()
                    .title('Navbars')
                    .schemaType('navbars')
                    .documentId('navbars')
                ),
              S.listItem()
                .title('Footers')
                .icon(iconLayouts)
                .child(
                  S.document()
                    .title('Footers')
                    .schemaType('footers')
                    .documentId('footers')
                ),
              S.listItem()
                .title('Sidebars')
                .icon(iconLayouts)
                .child(
                  S.document()
                    .title('Sidebars')
                    .schemaType('navbarMobile')
                    .documentId('navbarMobile')
                ),
            ])
        ),
      S.listItem()
        .title('Pages')
        .icon(iconPages)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Posts')
        .icon(iconPosts)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Authors')
        .icon(iconAuthors)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Tags')
        .icon(iconTags)
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('Tags')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'author',
            'businessLogo',
            'colorsAccent',
            'colorsHero',
            'colorsNeutral',
            'colorsPrimary',
            'colorsSecondary',
            'footers',
            'gmb',
            'logo',
            'nap',
            'navbars',
            'page',
            'post',
            'settingsMetadata',
            'businessSeo',
            'social',
            'tag',
            'team',
          ].includes(listItem.getId())
      ),
    ]);
