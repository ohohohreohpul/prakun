// Sanity Schema Index
// Copy this to your Sanity Studio project: schemas/index.js

import service from './service'
import testimonial from './testimonial'
import faq from './faq'
import giftVoucher from './giftVoucher'
import contact from './contact'
import about from './about'
import benefit from './benefit'
import packageSchema from './package'

export const schemaTypes = [
  service,
  testimonial,
  faq,
  giftVoucher,
  contact,
  about,
  benefit,
  packageSchema,
]
