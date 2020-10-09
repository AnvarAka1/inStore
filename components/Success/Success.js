import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import classes from './Success.module.scss'

const success = ({ closed, isWithLink, paymentLink }) => {
  const { t, i18n } = useTranslation()

  return (
    <div className={classes.Success}>
      {isWithLink ? (
        <>
          <div>
            <img src="/images/success.png" alt="Success!" />
          </div>
          <h3>{t('One more step. Click the link')}</h3>
          <div>
            <a href={paymentLink} target="_blank" rel="noopener noreferrer">
              {t('Proceed to payment')}
            </a>
          </div>
        </>
      ) : (
        <>
          <div>
            <img src="/images/success.png" alt="Success!" />
          </div>
          <h3>{t('Your order is being proceeded. We will call you back')}</h3>
          <div>
            <Link href={`/profile/library?l=${i18n.language}`}>
              <a>{t('Proceed to personal account')}</a>
            </Link>
            <a role="button" onClick={closed}>
              {t('Close')}
            </a>
          </div>
        </>
      )}
    </div>
  )
}

export default success
