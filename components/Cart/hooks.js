import { useContext } from 'react'

import Context from './context'

export const useCart = () => {
  const {
    cart,
    getIds,
    onFindInCart,
    getCase,
    getBooksByType,
    getBooksExceptType
  } = useContext(Context)

  return { cart, onFindInCart, getIds, getCase, getBooksByType, getBooksExceptType }
}

export const useCartManipulator = () => {
  const { onAddRemoveItem, onClearCart } = useContext(Context)
  return { onAddRemoveItem, onClearCart }
}
