import React from 'react'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import classes from './MakeOrder.module.scss'

import { DELIVERY_COST } from '../../constants'
import { useCart } from '../Cart'

const MakeOrder = ({ productCount, currentPrice, oldPrice, onOrder, disabled }) => {
  const { t } = useTranslation()
  const { getCase } = useCart()

  return (
    <div>
      <h6>Сумма</h6>
      <table className={classes.Table}>
        <tbody>
          <tr>
            <th>
              <p>{productCount} {t('products for')}</p>
            </th>
            <th>
              <p>{oldPrice} {t('so\'m')}</p>
            </th>
          </tr>
          <tr>
            <th>
              <p>{t('All discounts')}</p>
            </th>
            <th>
              <p>{currentPrice - oldPrice} {t('so\'m')}</p>
            </th>
          </tr>
          <tr>
            <th>
              <p>{t('Total')}</p>
            </th>
            <th>
              <p>{currentPrice} {t('so\'m')}</p>
            </th>
          </tr>

          {getCase() !== 0 && (
            <>
              <tr>
                <th>
                  <hr />
                </th>
              </tr>
              <tr>
                <th>{t('Delivery in Tashkent')}</th>
                <th>{DELIVERY_COST} {t('so\'m')}</th>
              </tr>
              <tr>
                <th>{t('Total (With delivery)')}</th>
                <th>{currentPrice + DELIVERY_COST} {t('so\'m')}</th>
              </tr>
            </>
          )}
        </tbody>
      </table>
      <hr />
      <Button
        onClick={onOrder}
        form="orderForm"
        type="submit"
        disabled={disabled}
      >
        {t('Checkout')}
      </Button>
    </div>
  )
}

MakeOrder.defaultProps = {
  discount: 0,
  price: 0,
  codeControl: {
    value: '',
    onChange: null
  }
}
export default MakeOrder
