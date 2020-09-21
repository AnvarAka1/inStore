import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { pathOr } from 'ramda'

import axios from '../axios-api'
import { Products } from '../components'

const SearchPage = ({ results }) => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <h5>Результаты поиска:</h5>
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
    </React.Fragment>
  )
}

export const getServerSideProps = async ({ query }) => {
  try {
    const res = await axios.get(`/books/search?q=${encodeURI(query.q)}`)
    const results = pathOr([], ['data', 'results'], res)

    return {
      props: {
        results
      }
    }
  } catch (error) {
    return {
      props: {
        error: 'Error'
      }
    }
  }
}

SearchPage.propTypes = {
  results: PropTypes.array
}

export default SearchPage
