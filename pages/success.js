import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { useCartManipulator } from '../components/Cart'

const SuccessPage = () => {
  const { t, i18n } = useTranslation()
  const [count, setCount] = useState(2)
  const { onClearCart } = useCartManipulator()
  const router = useRouter()

  useEffect(() => {
    onClearCart()
    if (count <= 1) {
      router.replace(`/profile/library?l=${i18n.language}`)
    }
    const timeout = setTimeout(() => {
      setCount(count - 1)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [count, i18n.language, onClearCart, router])

  return (
    <div>
      <h1 className="text-center mt-5">
        {t('Successfully purchased! Redirect in')} {count}
      </h1>
    </div>
  )
}

export default SuccessPage
