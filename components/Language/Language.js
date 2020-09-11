import React, { useEffect } from 'react'
import { prop } from 'ramda'
import { useTranslation } from 'react-i18next'

import { parseCookies, setCookie } from '../../helpers/utils'

function Language ({ children }) {
  const { i18n } = useTranslation()

  useEffect(() => {
    const lang = prop('lang', parseCookies(null))
    if (lang) {
      i18n.changeLanguage(lang)
    }
  }, [i18n])

  useEffect(() => {
    setCookie('lang', i18n.language)
  }, [i18n.language])

  return (
    <>
      {children}
    </>
  )
}

export default Language
