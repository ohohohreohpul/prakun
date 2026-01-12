// Sanity Schema: FAQ
// Copy this to your Sanity Studio project: schemas/faq.js

export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Services', value: 'services' },
          { title: 'Booking', value: 'booking' },
          { title: 'Pricing', value: 'pricing' },
          { title: 'Health', value: 'health' },
          { title: 'General', value: 'general' },
        ],
      },
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
      title: 'question',
      subtitle: 'category',
    },
  },
};
