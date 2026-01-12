// Sanity Schema: Contact Information
// Copy this to your Sanity Studio project: schemas/contact.js

export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'address',
      title: 'Street Address',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'zipCode',
      title: 'ZIP Code',
      type: 'string',
    },
    {
      name: 'hoursOfOperation',
      title: 'Hours of Operation',
      type: 'string',
      description: 'e.g., Mo-So: 10:00 - 20:00',
    },
    {
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'facebook', type: 'url', title: 'Facebook' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'address',
      subtitle: 'phone',
    },
  },
};
