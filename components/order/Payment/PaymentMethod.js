import React from 'react'
import { useTranslation } from 'react-i18next'

import classes from './PaymentMethod.module.scss'

const paymentMethod = ({ clicked }) => {
  const { t } = useTranslation()

  return (
    <div className={classes.PaymentMethod}>
      <button onClick={() => clicked(true)}>
        {t('Pay everything online')}
      </button>
      <button onClick={() => clicked(false)}>
        {t('Pay everything online')}
      </button>
    </div>
  )
}

export default paymentMethod
