import React from 'react'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { Card } from '../../index'

function PaymentCard (props) {
  const {
    paymentTypes,
    activePaymentType,
    onPaymentTypeClick,
    onSubmit
  } = props

  const { t } = useTranslation()

  return (
    <Card className="mt-3">
      <Card.Header>СПОСОБ ОПЛАТЫ</Card.Header>
      <Card.Body>
        {paymentTypes.map(type => (
          <Button
            key={type.id}
            onClick={() => onPaymentTypeClick(type.id)}
            className={clsx('inactive', 'w-100', 'mt-2', 'text-small', {
              'green-active': activePaymentType === type.id
            })}
          >
            {t(type.title).toUpperCase()}
          </Button>
        ))}
        <Button
          className="mt-2 w-100"
          type="submit"
          form="orderForm"
          onClick={onSubmit}
        >
          {t('Checkout')}
        </Button>
      </Card.Body>
    </Card>
  )
}

PaymentCard.propTypes = {
  paymentTypes: PropTypes.array.isRequired,
  activePaymentType: PropTypes.number.isRequired,
  onPaymentTypeClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default PaymentCard
