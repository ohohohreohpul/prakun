// Sanity Schema: Gift Voucher
// Copy this to your Sanity Studio project: schemas/giftVoucher.js

export default {
  name: 'giftVoucher',
  title: 'Gift Vouchers',
  type: 'document',
  fields: [
    {
      name: 'amount',
      title: 'Amount (€)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'isFeatured',
      title: 'Featured (Popular)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'isActive',
      title: 'Active',
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
      title: 'amount',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title: `€${title}`,
        subtitle: subtitle,
      };
    },
  },
};
