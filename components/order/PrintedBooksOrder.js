import React from 'react'

import { PrintedBooksOrderForm } from './Forms'

import { useModal } from '../../hooks'

function PrintedBooksOrder ({ onAuthValidate, onSubmit, ...props }) {
  const paymentModal = useModal()

  const handleSubmit = () => {
    const isAuthorized = onAuthValidate()
    if (isAuthorized) {
      paymentModal.onShow()
    }
  }

  return (
    <PrintedBooksOrderForm
      {...props}
      modal={paymentModal}
      onSubmit={handleSubmit}
      onSubmitValues={onSubmit}
    />
  )
}

export default PrintedBooksOrder
