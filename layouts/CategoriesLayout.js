import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { find, path, pipe, prop, propEq } from 'ramda'
import PropTypes from 'prop-types'

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
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const route = prop('route', router)

  const isCompilationPage = (
    route === getCompilationRoute(CATEGORIES) ||
    route.includes('compilations')
  )

  const renderGenres = !loading && !isCompilationPage

  useEffect(() => {
    axios
      .get(`${i18n.language}/genres`)
      .then(res => {
        const results = path(['data', 'results'], res)
        setGenres(results)
      })
      .finally(() => setLoading(false))
  }, [i18n.language])

  return (
    <Row>
      <Col sm={3}>
        <Categories items={CATEGORIES} isStatic={true} />
        {renderGenres && (
          <Genres items={genres} />
        )}
      </Col>
      <Col sm={9}>{children}</Col>
    </Row>
  )
}

CategoriesLayout.propTypes = {
  children: PropTypes.any.isRequired
}

export default CategoriesLayout
