import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import classes from './PaymentMethod.module.scss'

import { Card } from '../../index'

function MixedPayment ({ onClick }) {
  const { t } = useTranslation()

  return (
    <Card className="mt-3">
      <Card.Header>СПОСОБ ОПЛАТЫ</Card.Header>
      <Card.Body>
        <div className={classes.PaymentMethod}>
          <button onClick={() => onClick(true)}>
            {t('Pay everything online')}
          </button>
          <button onClick={() => onClick(false)}>
            {t('Pay printed books with cash')}
          </button>
        </div>
      </Card.Body>
    </Card>
  )
}

MixedPayment.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default MixedPayment
