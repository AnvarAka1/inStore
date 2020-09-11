import React from 'react'

import { Card } from '../../index'
import { FormikGroup } from '../../UI'

function Contact ({ getFieldProps }) {
  return (
    <Card>
      <Card.Header>КОНТАКТНАЯ ИНФОРМАЦИЯ</Card.Header>
      <Card.Body>
        <FormikGroup name="fio" {...getFieldProps('fio')} size="sm">
          Имя*
        </FormikGroup>
        <FormikGroup name="email" {...getFieldProps('email')} size="sm">
          Эл. почта (для получения эл. версии)
        </FormikGroup>
      </Card.Body>
    </Card>
  )
}

export default Contact
