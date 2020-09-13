import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Form, useField } from 'formik'
import PropTypes from 'prop-types'

import Phone from '../Cards/Phone'
import Contact from '../Cards/Contact'
import Comment from '../Cards/Comment'
import { withForm } from '../../Forms'
import { PaymentCard } from '../Payment'
import { Modal } from '../../index'
import { ONLINE_PAYMENT_TYPES } from '../constants'

function OnlineBooksOrderForm ({ formik, modal, onSubmitValues }) {
  const { handleSubmit, getFieldProps, values } = formik

  const [, meta, helpers] = useField('payment_type')

  const paymentType = meta.value
  const setPaymentType = helpers.setValue

  const handleSubmitValues = () => {
    return onSubmitValues(values)
  }

  return (
    <Form onSubmit={handleSubmit} id="orderForm">
      <Modal modal={modal}>
        <PaymentCard
          activePaymentType={paymentType}
          paymentTypes={ONLINE_PAYMENT_TYPES}
          onPaymentTypeClick={setPaymentType}
          onSubmit={handleSubmitValues}
        />
      </Modal>
      <Row>
        <Col md={6}>
          <Phone getFieldProps={getFieldProps} />
          <Contact getFieldProps={getFieldProps} />
        </Col>
        <Col md={6}>
          <Comment className="mt-3" getFieldProps={getFieldProps} />
        </Col>
      </Row>
    </Form>
  )
}

OnlineBooksOrderForm.propTypes = {
  onSubmitValues: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
  formik: PropTypes.object.isRequired
}

export default withForm(OnlineBooksOrderForm)
