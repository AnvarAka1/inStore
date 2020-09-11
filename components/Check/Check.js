import React from 'react'
import Moment from 'react-moment'
import { useTranslation } from 'react-i18next'
import { prop } from 'ramda'

import classes from './Check.module.scss'

const check = ({ order }) => {
  const { t } = useTranslation()
  const id = prop('id', order)
  const paymentType = prop('payment_type', order)
  const paymentStatus = prop('payment_status', order)
  const createdAt = prop('created_at', order)
  const amount = prop('amount', order)

  return <table className={classes.Check}>
    <tbody>
      <tr>
        <td>
          <p>{t('profile.orders.check.number')} №</p>
        </td>
        <td>
          <p>{id}</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>{t('profile.orders.check.paymentType')}:</p>
        </td>
        <td>
          <p>{paymentType}</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>{t('profile.orders.check.paymentStatus')}:</p>
        </td>
        <td>
          <p>{paymentStatus}</p>
        </td>
      </tr>
      <tr>
        <td><p>{t('profile.orders.check.date')}:</p></td>
        <td>
          <p>
            <Moment format="hh:mm:ss DD/MM/YYYY">{createdAt}</Moment>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p>{t('profile.orders.check.amount')}:</p>
        </td>
        <td>
          <p>{amount}</p>
        </td>
      </tr>
    </tbody>
  </table>
}

export default check
