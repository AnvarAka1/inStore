import React from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'formik'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { FormikGroup } from '../UI'
import { withForm } from '../Forms'

function ForgotForm ({ formik }) {
  const { t } = useTranslation()

  const { handleSubmit, getFieldProps, isSubmitting } = formik
  return (
    <Form onSubmit={handleSubmit}>
      <FormikGroup
        name="email"
        placeholder="Email"
        size="sm"
        {...getFieldProps('email')}
      >
        {t('Email')}
      </FormikGroup>
      <Button
        type="submit"
        className="mt-2 w-100"
        disabled={isSubmitting}
      >
        {t('Submit')}
      </Button>
    </Form>
  )
}

ForgotForm.propTypes = {
  formik: PropTypes.object.isRequired
}

export default withForm(ForgotForm)
