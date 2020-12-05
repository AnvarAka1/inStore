import React, { useCallback, useEffect } from 'react'
import { prop } from 'ramda'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { parseCookies, setCookie } from '../../helpers/utils'
import useQuery from '../../helpers/useQuery'

function Language ({ children }) {
  const { i18n } = useTranslation()
  const { replaceParams } = useQuery()

  const replace = useCallback(replaceParams, [i18n.language])

  useEffect(() => {
    replace({ l: i18n.language })
  }, [i18n.language, replace])

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

Language.propTypes = {
  children: PropTypes.any.isRequired
}

export default Language
