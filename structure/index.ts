import type {StructureResolver} from 'sanity/structure'
import {CalendarIcon, UsersIcon, PinIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem().title('Site Settings').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      ...S.documentTypeListItems().filter(i => !['siteSettings'].includes(i.getId() || "")),
    ])