import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { MixedBooksOrderForm } from './Forms'

import { useModal } from '../../hooks'

function MixedBooksOrder ({ onAuthValidate, onSubmit, ...props }) {
  const [step, setStep] = useState(0)
  const modal = useModal(false)

  const handleMethodClick = () => {
    const newStep = step + 1
    setStep(newStep)

    if (newStep > 0) {
      modal.onShow()
    }
  }

  const handleHide = () => {
    const newStep = step - 1
    setStep(newStep)

    if (newStep === 0) {
      modal.onHide()
    }
  }

  const handleSubmit = () => {
    const isAuthorized = onAuthValidate()
    if (isAuthorized) {
      handleMethodClick()
    }
  }

  const handleSubmitValues = (formValues, isOnlinePayment) => {
    return onSubmit(formValues, isOnlinePayment)
  }

  return (
    <>
      <MixedBooksOrderForm
        {...props}
        onSubmit={handleSubmit}
        onSubmitValues={handleSubmitValues}
        onMethodClick={handleMethodClick}
        onHide={handleHide}
        modal={modal}
        step={step}
      />
    </>
  )
}

MixedBooksOrder.propTypes = {
  onAuthValidate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default MixedBooksOrder
