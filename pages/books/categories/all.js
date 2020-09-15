import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { defaultTo, filter, length, pipe, prop } from 'ramda'
import Head from 'next/head'
import PropTypes from 'prop-types'

import axios from '../../../axios-api'
import { CategoriesLayout } from '../../../layouts'
import { Products } from '../../../components'
import { getLang } from '../../../helpers/utils'
import meta from '../../../lib/meta.json'

const getResults = pipe(
  defaultTo([ { books: [] } ]),
  filter(item => length(prop('books', item)))
)

const AllPage = (props) => {
  const {
    headerTitle,
    resultsProps,
  } = props

  const results = getResults(resultsProps)

  return (
    <>
      <Head>
        <title>{headerTitle || 'Some header'}</title>
        <meta property="og:title" content={headerTitle || 'Some title'} />
        <meta name="description" content={headerTitle || 'Some title'} />
      </Head>
      <CategoriesLayout>
        {results.map(result => (
          <React.Fragment key={result.id}>
            <Row>
              <Col>
                <h2 className="mb-3">{result.title}</h2>
              </Col>
            </Row>

            <Row>
              <Products
                items={result.books}
                limit={10}
              />
            </Row>
          </React.Fragment>
        ))}
      </CategoriesLayout>
    </>
  )
}

export const getServerSideProps = async ({ req, query }) => {
  const lang = getLang(req)
  const page = query.page ? query.page : 1
  const hasGenre = query.genre
  const genre = hasGenre ? `&g=${query.genre}` : ''
  const url = `${lang}/categories/books?page=${page}${genre}`

  try {
    const res = await axios.get(url)
    const data = prop('data', res)
    const resultsProps = prop('results', data)

    return {
      props: {
        url,
        resultsProps
      }
    }
  } catch (err) {
    const error = 'Error'
    return {
      props: {
        error
      }
    }
  }
}

AllPage.propTypes = {
  headerTitle: PropTypes.string,
  resultsProps: PropTypes.array
}

export default AllPage
