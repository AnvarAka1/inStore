import { prop } from 'ramda'

import { convertPhoneForBackend } from '../../../helpers/utils'

export const orderSerializer = (formValues, books, customMethodOfPayment) => {
  const payment_type = customMethodOfPayment || prop('payment_type', formValues).toString()
  const phone = convertPhoneForBackend(prop('phone', formValues))

  const response = {
    ...formValues,
    payment_type,
    phone,
    books
  }
  return response
}
