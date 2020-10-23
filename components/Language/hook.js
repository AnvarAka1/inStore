import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { getLang } from '../../helpers/utils'

function useChangeLang (callback) {
  const { i18n } = useTranslation()
  const oldLang = useRef(getLang(null))

  useEffect(() => {
    if (oldLang.current !== i18n.language) {
      oldLang.current = i18n.language
      callback()
    }
  })
}

export default useChangeLang
