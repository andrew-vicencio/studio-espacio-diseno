import { defineField, defineType } from "sanity";

export const CompanyValues = defineType({
  name: 'companyValue',
  title: 'Company Values',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
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
      of: [{ type: 'block' }]
    })
  ]
})