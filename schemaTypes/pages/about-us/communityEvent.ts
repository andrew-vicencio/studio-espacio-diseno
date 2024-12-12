import {defineField, defineType} from 'sanity'

export const CommuntyEvent = defineType({
  name: 'communityEvent',
  title: 'Community Events',
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
      of: [{ type: 'block' }],
    })
  ]
});