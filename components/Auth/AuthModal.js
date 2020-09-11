import React from 'react'

import Context from './context'

import { useModal } from '../../hooks'

function AuthModal ({ children }) {
  const authModal = useModal(false)

  const value = {
    ...authModal
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default AuthModal
