import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import {find, path, pipe, prop, propEq} from 'ramda'

import axios from '../axios-api'
import Genres from '../components/Categories/Genres'
import Categories from '../components/Categories/Categories'
import { CATEGORIES, COMPILATION_ID } from '../constants/categories'

const getCompilationRoute = pipe(
  find(propEq('id', COMPILATION_ID)),
  prop('link')
)

const CategoriesLayout = ({ children }) => {
  const { i18n } = useTranslation()
  const [pathname, setPathname] = useState(null)
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const isCompilationPage = prop('route', router) === getCompilationRoute(CATEGORIES)
  const renderGenres = !loading && !isCompilationPage

  console.log(prop('route', router), getCompilationRoute(CATEGORIES))
  console.log(router.route)
  useEffect(() => {
    axios
      .get(`${i18n.language}/genres`)
      .then(res => {
        const results = path(['data', 'results'], res)
        setGenres(results)
      })
      .finally(() => setLoading(false))
  }, [i18n.language])

  useEffect(() => {
    setPathname(router.pathname)
  }, [router.pathname])

  return (
    <Row>
      <Col sm={3}>
        <Categories items={CATEGORIES} isStatic={true} />
        {renderGenres && <Genres items={genres} pathname={pathname} />}
      </Col>
      <Col sm={9}>{children}</Col>
    </Row>
  )
}

export default CategoriesLayout
