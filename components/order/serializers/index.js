import { prop } from 'ramda'

import { convertPhoneForBackend } from '../../../helpers/utils'

export const orderSerializer = (formValues, books) => {
  const payment_type = prop('payment_type', formValues).toString()
  const phone = convertPhoneForBackend(prop('phone', formValues))

  const response = {
    ...formValues,
    payment_type,
    phone,
    books
  }
  return response
}
