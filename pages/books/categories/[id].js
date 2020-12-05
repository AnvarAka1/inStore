import React, { useCallback, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { prop } from 'ramda'

import { CategoriesLayout } from '../../../layouts'
import { Products } from '../../../components'
import Pagination from '../../../components/Pagination/Pagination'
import meta from '../../../lib/meta.json'
import { getLang } from '../../../helpers/utils'
import axios from '../../../axios-api'
import { getPaginationFromResponse } from '../../../components/Pagination/utils'
import useQuery from '../../../helpers/useQuery'

const BooksPage = (props) => {
  const {
    headerTitle,
    title,
    bookProps,
    paginationProps
  } = props

  const { t, i18n } = useTranslation()
  const { replaceParams } = useQuery()
  const router = useRouter()



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

export const getServerSideProps = async ({ query, req }) => {
  const lang = getLang(req)
  const page = query.page ? query.page : 1
  const id = parseInt(query.id)
  const g = query.genre ? `&g=${query.genre}` : ''

  const url = `${lang}/book_type/${id}?page=${page}${g}`
  try {
    const res = await axios.get(url)
    const data = prop('data', res)
    const bookProps = prop('results', data)
    const paginationProps = getPaginationFromResponse(data)

    const title = 'Audio books'
    const headerTitle = 'Список Аудиокниг в категории "Книги"'

    return {
      props: {
        bookProps,
        paginationProps,
        title,
        url,
        headerTitle
      }
    }
  } catch (err) {
    const error = 'Error'
    return { props: { error } }
  }
}

BooksPage.propTypes = {
  headerTitle: PropTypes.string,
  title: PropTypes.string,
  bookProps: PropTypes.array,
  paginationProps: PropTypes.object
}

export default BooksPage
