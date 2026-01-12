// Sanity Schema: About Page
// Copy this to your Sanity Studio project: schemas/about.js

export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'intro',
      title: 'Introduction Text',
      type: 'text',
      rows: 4,
    },
    {
      name: 'story',
      title: 'Our Story',
      type: 'text',
      rows: 10,
    },
    {
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 4,
    },
    {
      name: 'teamImage',
      title: 'Team/Studio Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value (e.g., "12+")' },
            { name: 'label', type: 'string', title: 'Label (e.g., "Jahre Erfahrung")' },
          ],
        },
      ],
    },
    {
      name: 'values',
      title: 'Our Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'teamImage',
    },
  },
};
