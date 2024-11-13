import {defineField, defineType} from 'sanity'

export const productCategoryType = defineType({
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: { source: 'title' },
        validation: (rule) => rule.required(),
    }),
  ],
})
