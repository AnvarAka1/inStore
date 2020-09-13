import React from 'react'

import { FormikGroup } from '../UI'
import { cities, districts } from '../../lib/locations'
import PropTypes from 'prop-types'
function AddressForm ({ getFieldProps }) {
  return (
    <React.Fragment>
      <FormikGroup
        name="city"
        as="select"
        options={null}
        {...getFieldProps('city')}
        size="sm"
        options={cities()}
      >
        Выберите город
      </FormikGroup>
      <FormikGroup
        name="district"
        as="select"
        options={null}
        {...getFieldProps('district')}
        size="sm"
        options={districts()}
      >
        Выберите район
      </FormikGroup>
      <FormikGroup name="street" {...getFieldProps('street')} size="sm">
        Улица*
      </FormikGroup>
      <FormikGroup name="house" {...getFieldProps('house')} size="sm">
        Номер дома*
      </FormikGroup>

    </React.Fragment>
  )
}

export default AddressForm
