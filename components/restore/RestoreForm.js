import React from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'formik'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { FormikGroup } from '../UI'
import { withForm } from '../Forms'

function RestoreForm ({ formik }) {
  const { t } = useTranslation()

  const { handleSubmit, getFieldProps } = formik

  return (
    <Form onSubmit={handleSubmit}>
      <FormikGroup
        name="fPassword"
        size="sm"
        type="password"
        {...getFieldProps('fPassword')}
      >
        {t('New password')}
      </FormikGroup>
      <FormikGroup
        name="sPassword"
        size="sm"
        type="password"
        {...getFieldProps('sPassword')}
      >
        {t('Repeat password')}
      </FormikGroup>
      <Button
        type="submit"
        className="mt-2 w-100"
      >
        {t('Send')}
      </Button>
    </Form>
  )
}

RestoreForm.propTypes = {
  formik: PropTypes.object.isRequired
}

export default withForm(RestoreForm)
