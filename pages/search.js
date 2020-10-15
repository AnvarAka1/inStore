import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { pathOr, prop, propOr } from 'ramda'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import axios from '../axios-api'
import { PageTitle, Products } from '../components'
import Pagination from '../components/Pagination/Pagination'
import { getPaginationFromResponse } from '../components/Pagination/utils'

const SearchPage = ({ results, paginationProps }) => {
  const { i18n } = useTranslation()
  const router = useRouter()
  const page = router.query.page || '1'
  useEffect(() => {
    const url = `${router.pathname}?q=${router.query.q}&l=${i18n.language}&page=${page}`

    router.replace(url)
  }, [page])

  return (
    <React.Fragment>
      <Row>
        <Col>
          <PageTitle>Результаты поиска:</PageTitle>
        </Col>
      </Row>
      <Row>
        {results && results.length ? (
          <Products items={results} md={2} sm={3} xs={6} />
        ) : (
          <Col>
            <h5 className="text-secondary">Не найдено</h5>
          </Col>
        )}
      </Row>
      <Row>
        <Col>
          <Pagination
            numberOfItems={paginationProps ? paginationProps.count : 0}
            active={router.query.page ? router.query.page : 1}
          />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export const getServerSideProps = async ({ query }) => {
  try {
    const page = query.page ? query.page : 1
    const res = await axios.get(`/books/search?q=${encodeURI(query.q)}&page=${page}`)
    const data = prop('data', res)
    const results = propOr([], 'results', data)
    const paginationProps = getPaginationFromResponse(data)

    return {
      props: { results, paginationProps }
    }
  } catch (error) {
    return {
      props: { error: 'Error' }
    }
  }
}

SearchPage.propTypes = {
  results: PropTypes.array,
  paginationProps: PropTypes.object
}

export default SearchPage
