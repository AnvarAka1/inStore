import React from 'react'
import PropTypes from 'prop-types'

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

PrintedBooksOrder.propTypes = {
  onAuthValidate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default PrintedBooksOrder
