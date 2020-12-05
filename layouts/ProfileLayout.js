import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { prop } from 'ramda'

import { NavigationItems } from '../components/'
import axios from '../axios-api'
import { useCart } from '../components/Cart'
import meta from '../lib/meta.json'

const FAVOURITES = 'favourites'
const LIBRARY = 'library'
const ORDERS = 'orders'
const CART = 'cart'
const SETTINGS = 'settings'

const navigation = {
  [ORDERS]: {
    icon: '/images/icons/story.png',
    title: 'Order history',
    count: 0,
    href: '/profile/orders'
  },
  [LIBRARY]: {
    icon: '/images/icons/book.png',
    title: 'My library',
    count: 0,
    href: '/profile/library'
  },
  [FAVOURITES]: {
    icon: '/images/icons/star.png',
    title: 'Favourites',
    count: 0,
    href: '/profile/favourites'
  },
  [CART]: {
    icon: '/images/icons/cart.png',
    title: 'Cart',
    count: 0,
    href: '/cart'
  },
  [SETTINGS]: {
    icon: '/images/icons/settings.png',
    title: SETTINGS,
    href: '/profile/settings',
    count: null,
    className: 'mt-auto'
  }
}
const ProfileLayout = ({ children, title }) => {
  const { i18n } = useTranslation()
  const [navigationItems, setNavigationItems] = useState([])

  const { cart } = useCart()

  useEffect(() => {
    axios
      .get('profile/info')
      .then(({ data }) => {
        const orders = prop(ORDERS, data)
        const library = prop(LIBRARY, data)
        const favourites = prop(FAVOURITES, data)

        const countableNavigationItems = [
          { ...navigation[ORDERS], count: orders },
          { ...navigation[LIBRARY], count: library },
          { ...navigation[FAVOURITES], count: favourites },
          { ...navigation[CART], count: cart.length },
          { ...navigation[SETTINGS], count: null }
        ]

        setNavigationItems(countableNavigationItems)
      })
  }, [cart.length, i18n.language])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={title} />
      </Head>
      <Row>
        <Col sm={3}>
          <NavigationItems items={navigationItems} />
        </Col>
        <Col sm={9}>{children}</Col>
      </Row>
    </>
  )
}

ProfileLayout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string
}

export default ProfileLayout
