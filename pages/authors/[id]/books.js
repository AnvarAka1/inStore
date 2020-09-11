import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import axios from '../../../axios-api'
import { Products } from '../../../components'
import Pagination from '../../../components/Pagination/Pagination'

let _isMounted = false
const AuthorBooks = ({ error, booksProps, paginationProps }) => {
  if (error) return null

  const { t } = useTranslation()
  const pag = paginationProps || {}
  const [books, setBooks] = useState(booksProps)
  const [pagination, setPagination] = useState(pag)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    _isMounted = true
    return () => (_isMounted = false)
  }, [])

  return (
    <>
      {!loading && (
        <React.Fragment>
          <Row>
            <Col>
              <h2 className="mb-3">{t('Author\'s books')}</h2>
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
    </>
  )
}

export const getServerSideProps = async () => {
  // axios
  const lang = ['ru', 'en', 'uz']
  const page = query.page ? query.page : 1
  const g = query.genre && query.genre !== 'nogenre' ? `&g=${query.genre}` : ''
  const url = `${lang[+query.l || 0]}/categories/books?page=${page}${g}`

  let res = null
  let error = null
  try {
    res = await axios.get(url)
  } catch (err) {
    error = 'Error'
    return {
      props: {
        error
      }
    }
  }

  const { results } = res.data
  const { next, previous, count, } = res.data
  const paginationProps = {
    next,
    previous,
    count
  }
  return {
    props: {
      url,
      resultsProps: results,
      paginationProps
    }
  }
}

export default AuthorBooks
