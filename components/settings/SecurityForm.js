import React from 'react'
import { Form } from 'formik'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { FormikGroup } from '../UI'
import { withForm } from '../Forms'

function SecurityForm ({ formik }) {
  const { handleSubmit, getFieldProps, isSubmitting, isValidating } = formik

  return (
    <Form onSubmit={handleSubmit}>
      <h6 className="text-md mt-4 mt-sm-0">Защита</h6>
      <FormikGroup
        name="email"
        {...getFieldProps('email')}
        autoComplete="off"
        type="email"
        size="sm"
        disabled={true}
      >
        Эл. почта
      </FormikGroup>
      <FormikGroup
        name="curPassword"
        type="password"
        autoComplete="off"
        {...getFieldProps('curPassword')}
        size="sm"
      >
        Текущий пароль
      </FormikGroup>
      <FormikGroup
        name="newPassword"
        type="password"
        size="sm"
        autoComplete="off"
        {...getFieldProps('newPassword')}
      >
        Новый пароль
      </FormikGroup>
      <FormikGroup
        name="repPassword"
        type="password"
        size="sm"
        autoComplete="off"
        {...getFieldProps('repPassword')}
      >
        Подтвердите пароль
      </FormikGroup>

      <Button type="submit" disabled={isSubmitting || isValidating}>
        Сохранить
      </Button>
    </Form>
  )
}

SecurityForm.propTypes = {
  formik: PropTypes.object.isRequired
}
export default withForm(SecurityForm)
