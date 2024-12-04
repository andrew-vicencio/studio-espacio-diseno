import {defineField, ImageRule, ImageValue, ValidationBuilder} from 'sanity'

export function defineImage(
  name = 'image',
  title = 'Main Image',
  validation?: ValidationBuilder<ImageRule, ImageValue>
) {
  return defineField({
    name: 'image',
    type: 'image',
    title: 'Main Image',
    options: {
      hotspot: true,
    },
    fields: [
      defineField({
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
        validation: (rule) =>
          rule.custom((value, context) => {
            const parent = context?.parent as {asset?: {_ref?: string}}

            return !value && parent?.asset?._ref
              ? 'Alt text is required when an image is present'
              : true
          }),
      }),
    ],
    validation,
  })
}
