import { useContext } from 'react'

import Context from './context'

export const useAuthModal = () => {
  const values = useContext(Context)
  return { ...values }
}
