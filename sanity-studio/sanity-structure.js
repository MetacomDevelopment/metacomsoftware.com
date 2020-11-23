import S from "@sanity/desk-tool/structure-builder";
import { FaFileAlt as icon } from 'react-icons/fa';

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Page - Home")
        .icon(icon)
        .child(
          S.editor()
            .id('home')
            .schemaType("home")
            .documentId("singleton-home")
        ),
        ...S.documentTypeListItems().filter(listItem => !['home'].includes(listItem.getId()))
    ]);