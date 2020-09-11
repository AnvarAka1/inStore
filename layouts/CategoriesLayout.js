import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { path } from 'ramda'

import axios from '../axios-api'
import { Categories } from '../components/'
import { getStaticCategories } from '../lib/categories'

let _isMounted = false

const CategoriesLayout = ({ children, withoutGenre }) => {
  const { i18n } = useTranslation()
  const [pathname, setPathname] = useState(null)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    _isMounted = true
    axios
      .get(`${i18n.language}/genres`)
      .then(res => {
        if (_isMounted) {
          const results = path(['data', 'results'], res)
          setCategories(results)
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        if (_isMounted) setLoading(false)
      })

    return () => {
      _isMounted = false
    }
  }, [i18n.language])

  useEffect(() => {
    _isMounted = true
    if (_isMounted) {
      setPathname(router.pathname)
    }
    return () => {
      _isMounted = false
    }
  }, [router.pathname])

  return (
    <Row>
      <Col sm={3}>
        <Categories items={getStaticCategories()} isStatic={true} />
        {!withoutGenre && !loading && (
          <Categories items={categories} pathname={pathname} />
        )}
      </Col>
      <Col sm={9}>{children}</Col>
    </Row>
  )
}

export default CategoriesLayout
