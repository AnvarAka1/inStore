import React, { useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Form, useField } from 'formik'
import PropTypes from 'prop-types'

import Phone from '../Cards/Phone'
import Contact from '../Cards/Contact'
import Comment from '../Cards/Comment'
import Address from '../Cards/Address'
import { withForm } from '../../Forms'
import MixedPayment from '../Payment/MixedPayment'
import { PaymentCard } from '../Payment'
import { ONLINE_PAYMENT_TYPES, PAYMENT_TYPES } from '../constants'
import { Modal } from '../../index'

function MixedBooksOrderForm (props) {
  const {
    formik,
    modal,
    onSubmitValues,
    onMethodClick,
    step,
    onHide
  } = props

  const { handleSubmit, values, getFieldProps } = formik

  const isOnlinePayment = useRef(false)

  const [, meta, helpers] = useField('payment_type')

  const paymentType = meta.value
  const setPaymentType = helpers.setValue

  const handleMethodClick = (isOnline) => {
    onMethodClick()
    isOnlinePayment.current = isOnline
  }

  const handleSubmitValues = () => {
    return onSubmitValues(values, isOnlinePayment.current)
  }

  return (
    <>
      <Modal
        modal={modal}
        onHide={onHide}
      >
        {step === 1 && <MixedPayment onClick={handleMethodClick} />}
        {step === 2 && (
          <PaymentCard
            activePaymentType={paymentType}
            onPaymentTypeClick={setPaymentType}
            paymentTypes={ONLINE_PAYMENT_TYPES}
            onSubmit={handleSubmitValues}
          />
        )}
      </Modal>
      <Form onSubmit={handleSubmit} id="orderForm">
        <Row>
          <Col md={6}>
            <Phone getFieldProps={getFieldProps} />
            <Contact getFieldProps={getFieldProps} />
            <Comment className="mt-3" getFieldProps={getFieldProps} />
          </Col>
          <Col md={6}>
            <Address getFieldProps={getFieldProps} />
          </Col>
        </Row>
      </Form>
    </>
  )
}

MixedBooksOrderForm.propTypes = {
  formik: PropTypes.object,
  modal: PropTypes.object,
  onSubmitValues: PropTypes.func,
  onMethodClick: PropTypes.func,
  onHide: PropTypes.func,
  step: PropTypes.number
}

export default withForm(MixedBooksOrderForm)
