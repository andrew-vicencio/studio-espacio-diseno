import {defineField, defineType} from 'sanity'

export const productItemType = defineType({
  name: 'productItem',
  title: 'Product Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: { source: 'name' },
        validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'website',
      type: 'url'
    }),
    defineField({
        name: 'category',
        type: 'reference',
        to: [{ type: 'productCategory' }]
    })
  ],
})
