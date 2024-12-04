import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    { name: 'main-text', title: 'Main text' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule
        .required()
        .error(`Required to generate a page on the website`),
      hidden: ({ document }) => !document?.title
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true
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
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'},
        {
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
        }
      ],
      group: 'main-text',
    }),
    defineField({
      name: 'excerpt',
      description: 'Excerpt shown in preview of post.',
      type: 'string',
      hidden: ({ document }) => !document?.body,
      group: 'main-text',
    }),
    {
      name: 'tags',
      type: 'array',
      of: [
        { 
          type: 'reference',
          to: [{ type: 'tag' }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'image',
    }
  }
})
