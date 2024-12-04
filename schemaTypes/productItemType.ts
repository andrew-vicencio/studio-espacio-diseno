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
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: rule => rule.custom((value, context) => {
            const parent = context?.parent as {asset?: {_ref?: string}}
        
            return !value && parent?.asset?._ref ? 'Alt text is required when an image is present' : true
          }),
        })
      ]
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
