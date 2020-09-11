import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { prop } from 'ramda'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'

import axios from '../../../axios-api'
import { CategoriesLayout } from '../../../layouts'
import { Products } from '../../../components'
import Pagination from '../../../components/Pagination/Pagination'
import { getLang } from '../../../helpers/utils'
import { getPaginationFromResponse } from '../../../components/Pagination/utils'
import meta from '../../../lib/meta.json'

let initialPageLoad = true
let _isMounted = false

const BooksPage = ({ headerTitle, title, error, bookProps, resultsProps, url, paginationProps }) => {
  if (error) return null

  const pag = paginationProps || {}
  const [books, setBooks] = useState(bookProps)
  const [results, setResults] = useState(resultsProps)
  const [pagination, setPagination] = useState(pag)
  const [loading, setLoading] = useState(false)

  const { t, i18n } = useTranslation()
  const router = useRouter()

  useEffect(() => {
    _isMounted = true
    return () => (_isMounted = false)
  }, [])

  useEffect(() => {
    _isMounted = true
    if (!initialPageLoad && router.query.genre) {
      setLoading(true)
      const genre = '&g=' + router.query.genre
      axios
        .get(url + genre)
        .then(res => {
          updateValues(res)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else if (!initialPageLoad && !router.query.genre) {
      setLoading(true)
      axios.get(url)
        .then(res => {
          updateValues(res)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      initialPageLoad = false
    }
    return () => (_isMounted = false)
  }, [router.query.genre, updateValues, url])

  useEffect(() => {
    setBooks(bookProps)
  }, [bookProps])

  useEffect(() => {
    setResults(resultsProps)
  }, [resultsProps])

  useEffect(() => {
    _isMounted = true
    if (!initialPageLoad) {
      axios.get(url).then(res => {
        updateValues(res)
      })
    }
    return () => (_isMounted = false)
  }, [router.pathname, updateValues, url])

  useEffect(() => {
    const page = router.query.page ? router.query.page : 1
    const genre = router.query.genre ? 'genre=' + router.query.genre + '&' : 'genre=nogenre&'
    router.replace(
      `${router.pathname}?${genre}l=${i18n.language}&page=${page}`
    )
  }, [i18n.language, router])

  const updateValues = useCallback(res => {
    if (_isMounted) {
      if (bookProps) {
        setBooks(res.data.results)
        const pagination = {
          count: res.data.count
        }
        setPagination(pagination)
      } else {
        setResults(res.data.results)
      }
    }
  })

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
export default BooksPage
