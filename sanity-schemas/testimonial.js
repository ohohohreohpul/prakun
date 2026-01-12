// Sanity Schema: Testimonial
// Copy this to your Sanity Studio project: schemas/testimonial.js

export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5),
    },
    {
      name: 'serviceReceived',
      title: 'Service Received',
      type: 'string',
    },
    {
      name: 'clientImage',
      title: 'Client Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'isVideo',
      title: 'Is Video Testimonial',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'videoUrl',
      title: 'YouTube Video URL',
      type: 'url',
      hidden: ({ document }) => !document?.isVideo,
    },
    {
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
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
      title: 'clientName',
      subtitle: 'serviceReceived',
      media: 'clientImage',
    },
  },
};
