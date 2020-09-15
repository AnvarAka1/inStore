import React, { useEffect, useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { CategoriesLayout } from '../../../layouts'
import { Products } from '../../../components'
import Pagination from '../../../components/Pagination/Pagination'
import meta from '../../../lib/meta.json'

const BooksPage = (props) => {
  const {
    headerTitle,
    title,
    bookProps,
    paginationProps
  } = props

  const { t, i18n } = useTranslation()
  const router = useRouter()
  const routerRef = useRef(router)
  const genreQuery = router.query.genre
  const page = router.query.page || '1'

  useEffect(() => {
    const genre = genreQuery ? `genre=${genreQuery}&` : `genre=&`

    const url = `${routerRef.current.pathname}?${genre}l=${i18n.language}&page=${page}`

    routerRef.current.replace(url)
  }, [genreQuery, i18n.language, page])

  return (
    <>
      <Head>
        <title>{headerTitle || 'Some header'}</title>
        <meta property="og:title" content={headerTitle || 'Some title'} />
        <meta name="description" content={headerTitle || 'Some description'} />
      </Head>
      <CategoriesLayout>
        {bookProps && (
          <React.Fragment>
            <Row>
              <Col>
                <h2 className="mb-3">{t(title)}</h2>
              </Col>
            </Row>
            <Row>
              <Products items={bookProps} />
            </Row>
            <Row>
              <Col>
                <Pagination
                  numberOfItems={paginationProps.count}
                  active={router.query.page ? router.query.page : 1}
                />
              </Col>
            </Row>
          </React.Fragment>
        )}
      </CategoriesLayout>
    </>
  )
}

BooksPage.propTypes = {
  headerTitle: PropTypes.string,
  title: PropTypes.string,
  bookProps: PropTypes.array,
  paginationProps: PropTypes.object
}

export default BooksPage
