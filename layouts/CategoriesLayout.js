import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { find, pipe, prop, propEq } from 'ramda'
import PropTypes from 'prop-types'

import * as API from '../constants/api'
import Genres from '../components/Categories/Genres'
import Categories from '../components/Categories/Categories'
import { CATEGORIES, COMPILATION_ID } from '../constants/categories'
import useList from '../hooks/useList'

const getCompilationRoute = pipe(
  find(propEq('id', COMPILATION_ID)),
  prop('link')
)

const CategoriesLayout = ({ children }) => {
  const categoryList = useList(API.CATEGORY_LIST)
  const genreList = useList(API.GENRE_LIST)
  const router = useRouter()
  const route = prop('route', router)

  const isCompilationPage = (
    route === getCompilationRoute(CATEGORIES) ||
    route.includes('compilations')
  )

  const renderGenres = !genreList.isLoading && !isCompilationPage

  return (
    <Row>
      <Col sm={3}>
        <Categories items={categoryList.results} />
        {renderGenres && (
          <Genres items={genreList.results} />
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
