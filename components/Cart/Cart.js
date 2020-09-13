import React, { useEffect, useState } from 'react'
import { filter, find, prop, reduce } from 'ramda'

import Context from './context'
import PropTypes from 'prop-types'
export const E_BOOKS_ONLY = 0
export const PRINTED_ONLY = 1
export const MIXED = 2
export const PRINTED_BOOK = 2

const getPrintedBooksCount = reduce((printedBookCounter, book) => {
  return prop('book_type', book) === PRINTED_BOOK ? ++printedBookCounter : printedBookCounter
}, 0)

const Cart = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      setCart(JSON.parse(cart))
    }
  }, [])

  const addRemoveItemFromCart = product => {
    const item = cart.find(item => item.id === product.id)
    if (item) {
      const newCart = cart.filter(item => item.id !== product.id)
      saveCart(newCart)
    } else {
      const newCart = [...cart, product]
      saveCart(newCart)
    }
  }

  const saveCart = cart => {
    setCart(cart)
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const findItemInCart = id => find(item => item.id === id, cart)

  const clearCartHandler = () => {
    setCart([])
    localStorage.removeItem('cart')
  }

  const getIds = () => {
    return cart.map(c => c.id).join(',')
  }

  const getCase = () => {
    const printedBookCounter = getPrintedBooksCount(cart)

    if (!printedBookCounter) {
      return E_BOOKS_ONLY
    }
    if (printedBookCounter === cart.length) {
      return PRINTED_ONLY
    }
    return MIXED
  }

  const getBooksByType = (type) => filter(product => prop('book_type', product) === type, cart)

  const getBooksExceptType = (type) => filter(product => prop('book_type', product) !== type, cart)

  const value = {
    cart,
    onAddRemoveItem: addRemoveItemFromCart,
    onFindInCart: findItemInCart,
    onClearCart: clearCartHandler,
    getIds,
    getCase,
    getBooksByType,
    getBooksExceptType
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default Cart
