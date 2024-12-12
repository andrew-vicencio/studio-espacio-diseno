import {defineField, defineType} from 'sanity'

export const AboutUsPage = defineType({
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'banner',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'image',
      title: 'Bio Picture',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'description',
      title: 'Bio Description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'values',
      title: 'Company Values',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'companyValue' }]}]
    }),
    defineField({
      name: 'commEngImage',
      title: 'Community Engagement Banner',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'commEngDesc',
      title: 'Community Engagement Description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'commEngEvents',
      title: 'Community Engagement Events',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'communityEvent' }] }]
    }),
    defineField({
      name: 'postCommEngBreak',
      title: 'Post Community Engagement Break',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'affiliations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'affiliation' }] }]
    })
  ],
})
