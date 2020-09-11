import React from 'react'

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

export default OnlineBooksOrder
