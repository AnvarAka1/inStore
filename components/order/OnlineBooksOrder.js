import React from 'react'
import PropTypes from 'prop-types'

import { OnlineBooksOrderForm } from './Forms'

import { useModal } from '../../hooks'

function OnlineBooksOrder ({ onAuthValidate, onSubmit, ...props }) {
  const paymentModal = useModal()

  const handleSubmit = () => {
    const isAuthorized = onAuthValidate()
    if (isAuthorized) {
      paymentModal.onShow()
    }
  }

  return (
    <OnlineBooksOrderForm
      {...props}
      modal={paymentModal}
      onSubmit={handleSubmit}
      onSubmitValues={onSubmit}
    />
  )
}

OnlineBooksOrder.propTypes = {
  onAuthValidate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default OnlineBooksOrder
