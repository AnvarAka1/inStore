import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { assoc, pathOr, prop, propOr } from 'ramda'

import axios from '../axios-api'

const getDataFromResponse = res => {
  const data = prop('data', res)
  const results = propOr([], 'results', data)

  return assoc('results', results, data)
}

function useList (api) {
  const { i18n } = useTranslation()
  const initialData = { results: [] }
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)

  const url = `${i18n.language}${api}`
  const getList = useCallback(() => {
    setIsLoading(true)
    return axios.get(url)
      .then(res => setData(getDataFromResponse(res)))
      .finally(() => setIsLoading(false))
  }, [url])

  useEffect(() => {
    getList()
  }, [getList])

  return { ...data, isLoading, getList }
}

export default useList
