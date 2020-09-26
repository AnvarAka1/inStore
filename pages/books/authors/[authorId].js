import React from 'react'
import { prop, path } from 'ramda'
import { Col, Row } from 'react-bootstrap'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { getLang } from '../../../helpers/utils'
import axios from '../../../axios-api'
import { Products } from '../../../components/Products'
import Pagination from '../../../components/Pagination/Pagination'
import meta from '../../../lib/meta.json'
import { getPaginationFromResponse } from '../../../components/Pagination/utils'

const responsive = {
  md: 2,
  sm: 3,
  xs: 6
}
const BooksByAuthorPage = ({ title, bookProps, paginationProps }) => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{title || 'Some header'}</title>
        <meta property="og:title" content={title || 'Some title'} />
        <meta name="description" content={title || 'Some description'} />
      </Head>
      <Row>
        <Col>
          <h2 className="mb-3">{t(title)}</h2>
        </Col>
      </Row>
      <Row>
        <Products items={bookProps} {...responsive} />
      </Row>
      <Row>
        <Col>
          <Pagination
            numberOfItems={paginationProps.count}
            active={router.query.page || 1}
          />
        </Col>
      </Row>
    </>
  )
}

export const getServerSideProps = async ({ req, query }) => {
  const lang = getLang(req)
  const authorId = prop('authorId', query)

  try {
    const res = await axios.get(`${lang}/books/author/${authorId}`)
    const data = prop('data', res)
    const bookProps = prop('results', data)
    const title = path(['0', 'author'], bookProps)

    const paginationProps = getPaginationFromResponse(data)

    return {
      props: {
        bookProps,
        paginationProps,
        title
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

BooksByAuthorPage.propTypes = {
  title: PropTypes.string,
  bookProps: PropTypes.array,
  paginationProps: PropTypes.object
}

export default BooksByAuthorPage
