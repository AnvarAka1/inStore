import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'

function withForm (Component, FormProps) {
  const Form = props => {
    const { initialValues, validationSchema, onSubmit, ...rest } = props
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        {...FormProps}
      >
        {formik => (
          <Component formik={formik} {...rest} />
        )}
      </Formik>
    )
  }

  Form.propTypes = {
    initialValues: PropTypes.object,
    validationSchema: PropTypes.any,
    onSubmit: PropTypes.func.isRequired
  }

  return Form
}

export default withForm
