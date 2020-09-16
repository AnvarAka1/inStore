import { prop } from 'ramda'

import { convertPhoneForBackend } from '../../../helpers/utils'

export const PersonalSerializer = formValues => {
  const formData = new FormData()

  const avatar = prop('avatar', formValues)
  const name = prop('name', formValues)
  const dob = prop('dob', formValues)
  const gender = prop('gender', formValues)
  const phone = prop('phone', formValues)
  const city = prop('city', formValues)
  const district = prop('district', formValues)
  const street = prop('street', formValues)
  const house = prop('house', formValues)

  if (avatar) {
    formData.append('avatar', avatar)
  }
  if (dob) {
    formData.append('dob', dob)
  }

  formData.append('fio', name)
  formData.append('gender', gender)
  formData.append('phone', convertPhoneForBackend(phone))
  formData.append('city', city)
  formData.append('region', district)
  formData.append('street', street)
  formData.append('house', house)

  return formData
}

export const SecuritySerializer = formValues => {
  const old_password = prop('curPassword', formValues)
  const new_password = prop('newPassword', formValues)
  return {
    old_password,
    new_password
  }
}
