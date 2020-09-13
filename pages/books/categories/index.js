import React, { useEffect, useState, useCallback, useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { path, pathOr, prop } from 'ramda'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import PropTypes from 'prop-types'

import axios from '../../../axios-api'
import { CategoriesLayout } from '../../../layouts'
import { Products } from '../../../components'
import Pagination from '../../../components/Pagination/Pagination'
import { getLang } from '../../../helpers/utils'
import { getPaginationFromResponse } from '../../../components/Pagination/utils'
import meta from '../../../lib/meta.json'

let initialPageLoad = true

const BooksPage = (props) => {
  const {
    headerTitle,
    title,
    bookProps,
    resultsProps,
    url,
    paginationProps
  } = props

  const pag = paginationProps || {}
  const [books, setBooks] = useState(bookProps)
  const [results, setResults] = useState(resultsProps)
  const [pagination, setPagination] = useState(pag)
  const [loading, setLoading] = useState(false)
  const { t, i18n } = useTranslation()
  const router = useRouter()

  const routerRef = useRef(router)

  const updateValues = useCallback(res => {
    if (bookProps) {
      setBooks(res.data.results)
      const pagination = {
        count: res.data.count
      }
      setPagination(pagination)
    } else {
      setResults(res.data.results)
    }
  }, [bookProps])

  useEffect(() => {
    if (!initialPageLoad && router.query.genre) {
      setLoading(true)
      const genre = `&g=${router.query.genre}`
      axios
        .get(url + genre)
        .then(res => {
          updateValues(res)
        })
        .finally(() => setLoading(false))
    } else if (!initialPageLoad && !router.query.genre) {
      setLoading(true)
      axios.get(url)
        .then(res => updateValues(res))
        .then(() => setLoading(false))
    } else {
      initialPageLoad = false
    }
  }, [router.query.genre, updateValues, url])

  useEffect(() => {
    setBooks(bookProps)
  }, [bookProps])

  useEffect(() => {
    setResults(resultsProps)
  }, [resultsProps])

  useEffect(() => {
    if (!initialPageLoad) {
      axios.get(url).then(res => {
        updateValues(res)
      })
    }
  }, [router.pathname, updateValues, url])

  useEffect(() => {
    const page = pathOr(1, ['current', 'query', 'page'], routerRef)
    const genreQuery = path(['current', 'query', 'genre'], routerRef)
    const genre = genreQuery ? `genre=${genreQuery}&` : `genre=nogenre&`

    routerRef.current.replace(
      `${routerRef.current.pathname}?${genre}l=${i18n.language}&page=${page}`
    )
  }, [i18n.language])

  return (
    <>
      <Head>
        <title>{headerTitle}</title>
        <meta property="og:title" content={headerTitle} />
        <meta name="description" content={headerTitle} />
      </Head>
      <CategoriesLayout>
        {!loading && bookProps && books && (
          <React.Fragment>
            <Row>
              <Col>
                <h2 className="mb-3">{t(title)}</h2>
              </Col>
            </Row>
            <Row>
              <Products items={books} />
            </Row>
            <Row>
              <Col>
                <Pagination
                  numberOfItems={pagination.count}
                  active={router.query.page ? router.query.page : 1}
                />
              </Col>
            </Row>
          </React.Fragment>
        )}
        {resultsProps &&
                results &&
                results.map(result => (
                  result.books.length ? (
                    <React.Fragment key={result.id}>
                      <Row>
                        <Col>
                          <h2 className="mb-3">{result.title}</h2>
                        </Col>
                      </Row>

                      <Row>
                        <Products items={result.books} limit={10} />
                      </Row>
                    </React.Fragment>
                  ) : null
                ))}
      </CategoriesLayout>
    </>
  )
}

export const getServerSideProps = async ({ req, query }) => {
  const lang = getLang(req)
  const page = query.page ? query.page : 1
  const hasGenre = query.genre && query.genre !== 'nogenre'
  const g = hasGenre ? `&g=${query.genre}` : ''
  const url = `${lang}/categories/books?page=${page}${g}`

  try {
    const res = await axios.get(url)
    const data = prop('data', res)
    const resultsProps = prop('results', data)
    const paginationProps = getPaginationFromResponse(data)
    const headerTitle = 'Все книги в категории "Книги"'

    return {
      props: {
        url,
        resultsProps,
        paginationProps,
        headerTitle
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
BooksPage.propTypes = {
  headerTitle: PropTypes.string,
  title: PropTypes.string,
  bookProps: PropTypes.object,
  resultsProps: PropTypes.object,
  url: PropTypes.string,
  paginationProps: PropTypes.object
}
export default BooksPage
