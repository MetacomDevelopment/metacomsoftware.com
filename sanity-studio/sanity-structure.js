import S from '@sanity/desk-tool/structure-builder';
import { FaHome as iconHome } from 'react-icons/fa';
import { FaFileAlt as iconPage } from 'react-icons/fa';
import { FaPencilAlt as iconPost } from 'react-icons/fa';
import { FaUserEdit as iconAuthor } from 'react-icons/fa';
import { FaTag as iconTag } from 'react-icons/fa';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Page - Home')
        .icon(iconHome)
        .child(
          S.editor().id('home').schemaType('home').documentId('singleton-home')
        ),
      S.listItem()
        .title('Page - SurgeCon')
        .icon(iconPage)
        .child(
          S.editor()
            .id('surgecon')
            .schemaType('surgecon')
            .documentId('singleton-surgecon')
        ),
      S.divider(),
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
          !['home', 'surgecon', 'post', 'author', 'tag'].includes(
            listItem.getId()
          )
      ),
    ]);
