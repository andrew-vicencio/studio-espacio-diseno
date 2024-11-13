import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
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
    defineField({
      name: 'client',
      type: 'reference',
      to: [ {type: 'client' }]
    }),
    defineField({
        name: 'video',
        type: 'array',
        of: [ { type: 'file' } ]
    }),
    defineField({
        name: 'images',
        type: 'array',
        of: [ { type: 'image' } ]
    }),
  ],
})
