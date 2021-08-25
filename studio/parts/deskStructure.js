import S from '@sanity/desk-tool/structure-builder';
import { FaHome as iconHome } from 'react-icons/fa';
import { FaFileAlt as iconPage } from 'react-icons/fa';
import { FaTools as iconService } from 'react-icons/fa';
import { FaPencilAlt as iconPost } from 'react-icons/fa';
import { FaUserEdit as iconAuthor } from 'react-icons/fa';
import { FaTag as iconTag } from 'react-icons/fa';
import { FaCog as iconSettings } from 'react-icons/fa';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(iconSettings)
        .child(
          S.list()
            .title('Settings Options')
            .items([
              S.listItem()
                .title('Company')
                .icon(iconSettings)
                .child(
                  S.document()
                    .schemaType('settingsCompany')
                    .documentId('settingsCompany')
                ),
              S.listItem()
                .title('Socials')
                .icon(iconSettings)
                .child(
                  S.document()
                    .schemaType('settingsSocials')
                    .documentId('settingsSocials')
                ),
              S.listItem()
                .title('Metadata')
                .icon(iconSettings)
                .child(
                  S.document()
                    .schemaType('settingsMetadata')
                    .documentId('settingsMetadata')
                ),
              S.listItem()
                .title('Colors')
                .icon(iconSettings)
                .child(
                  S.document()
                    .schemaType('settingsColors')
                    .documentId('settingsColors')
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Brand Pages')
        .icon(iconHome)
        .child(
          S.list()
            .title('Brand/Core Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(iconHome)
                .child(
                  S.document().schemaType('pageHome').documentId('pageHome')
                ),
              S.listItem()
                .title('About')
                .icon(iconHome)
                .child(
                  S.document().schemaType('pageAbout').documentId('pageAbout')
                ),
              S.listItem()
                .title('Contact')
                .icon(iconHome)
                .child(
                  S.document()
                    .schemaType('pageContact')
                    .documentId('pageContact')
                ),
            ])
        ),
      S.listItem()
        .title('Pages')
        .icon(iconPage)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Services')
        .icon(iconService)
        .schemaType('service')
        .child(S.documentTypeList('service').title('Services')),
      S.listItem()
        .title('Locations')
        .icon(iconService)
        .schemaType('location')
        .child(S.documentTypeList('location').title('Locations')),
      S.listItem()
        .title('Posts')
        .icon(iconPost)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Authors')
        .icon(iconAuthor)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Tags')
        .icon(iconTag)
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('Tags')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'settingsCompany',
            'settingsSocials',
            'settingsMetadata',
            'settingsColors',
            'pageHome',
            'pageAbout',
            'pageContact',
            'page',
            'service',
            'location',
            'post',
            'author',
            'tag',
          ].includes(listItem.getId())
      ),
    ]);
