import {defineType} from 'sanity'
import { defineImage } from './utils/utils'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'company',
      type: 'reference',
      to: [{type: 'client'}],
      validation: rule => rule.required()
    },
    {
      name: 'name',
      type: 'string',
      description: 'Full Name',
      validation: (rule) => rule.required()
    },
    {
      name: 'position',
      description: 'ex. CEO, President, CFO, etc.',
      type: 'string',
    },
    defineImage(),
    {
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required()
    },
  ],
})
