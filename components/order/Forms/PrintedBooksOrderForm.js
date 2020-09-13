import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Form, useField } from 'formik'
import PropTypes from 'prop-types'

import Comment from '../Cards/Comment'
import Address from '../Cards/Address'
import Contact from '../Cards/Contact'
import Phone from '../Cards/Phone'
import { withForm } from '../../Forms'
import { PaymentCard } from '../Payment'
import { Modal } from '../../index'
import { PAYMENT_TYPES } from '../constants'

function PrintedBooksOrderForm ({ formik, modal, onSubmitValues }) {
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
          paymentTypes={PAYMENT_TYPES}
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
          <Address getFieldProps={getFieldProps} />
          <Comment className="mt-3" getFieldProps={getFieldProps} />
        </Col>
      </Row>
    </Form>
  )
}

PrintedBooksOrderForm.propTypes = {
  onSubmitValues: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
  formik: PropTypes.object.isRequired
}

export default withForm(PrintedBooksOrderForm)
