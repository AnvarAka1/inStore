import React from 'react'

import { Card } from '../../index'
import PhoneField from '../Fields/PhoneField'

function Phone ({ getFieldProps, ...props }) {
  return (
    <Card className="mb-3">
      <Card.Header>Номера телефона*</Card.Header>
      <Card.Body>
        <PhoneField getFieldProps={getFieldProps} {...props} />
      </Card.Body>
    </Card>
  )
}

export default Phone
