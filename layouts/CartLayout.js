import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { prop, reduce } from 'ramda'

import { MakeOrder } from '../components'
import { useCart } from '../components/Cart'

const CartLayout = ({ children, isOrderPage }) => {
  const { i18n } = useTranslation()
  const [currentPrice, setCurrentPrice] = useState(0)
  const [oldPrice, setOldPrice] = useState(0)
  const [orderCase, setOrderCase] = useState(0)
  const { cart, getCase } = useCart()
  const router = useRouter()
  useEffect(() => {
    const oldPrice = reduce((sum, product) => {
      return sum + parseInt(product.price)
    }, 0, cart)
    const currentPrice = reduce((sum, product) => {
      const currentPrice = parseInt(prop('current_price', product))
      return sum + currentPrice
    }, 0, cart)

    setOldPrice(oldPrice)
    setCurrentPrice(currentPrice)
    setOrderCase(getCase())
  }, [cart, getCase])

  useEffect(() => {
    router.replace({
      pathname: router.pathname,
      query:{
        l: i18n.language,
        case: orderCase
      }
    })
  }, [i18n.language, orderCase, router])

  const handleOrder = () => {
    if (!isOrderPage) {
      router.push({
        pathname: '/cart/order',
        query: {
          l: i18n.language,
          case: orderCase
        }
      })
    }
  }

  return (
    <Row>
      <Col md={9}>{children}</Col>
      <Col md={3}>
        <MakeOrder
          currentPrice={currentPrice}
          oldPrice={oldPrice}
          productCount={cart.length}
          disabled={cart.length < 1}
          onOrder={handleOrder}
        />
      </Col>
    </Row>
  )
}

export default CartLayout
