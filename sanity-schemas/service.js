// Sanity Schema: Service (Massage)
// Copy this to your Sanity Studio project: schemas/service.js

export default {
  name: 'service',
  title: 'Massage Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (German)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 10,
    },
    {
      name: 'duration',
      title: 'Duration (e.g., "60-90 min")',
      type: 'string',
    },
    {
      name: 'priceFrom',
      title: 'Starting Price (€)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    },
    {
      name: 'pricing',
      title: 'Pricing Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'duration', type: 'string', title: 'Duration' },
            { name: 'price', type: 'number', title: 'Price (€)' },
          ],
        },
      ],
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Thai Massage', value: 'thai' },
          { title: 'Wellness', value: 'wellness' },
          { title: 'Spezial', value: 'special' },
          { title: 'Teilkörper', value: 'partial' },
        ],
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Image (Large)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'cardImage',
      title: 'Card Image (Small)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'isPopular',
      title: 'Featured/Popular',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'cardImage',
    },
  },
};
