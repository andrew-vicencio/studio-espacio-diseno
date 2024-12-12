import { defineField, defineType } from "sanity";

export const Affiliation = defineType({
  name: 'affiliation',
  title: 'Affiliations',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'picture',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}]
    })
  ]
})