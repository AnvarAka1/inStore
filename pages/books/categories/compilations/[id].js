import React, { useEffect, useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { path, prop } from 'ramda'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { Products } from '../../../../components'
import { CategoriesLayout } from '../../../../layouts/'
import { getLang } from '../../../../helpers/utils'
import axios from '../../../../axios-api'
import meta from '../../../../lib/meta.json'

const CompilationPage = ({ title, books, query }) => {
  const { i18n } = useTranslation()
  const router = useRouter()
  const routerRef = useRef(router)

  useEffect(() => {
    routerRef.current.replace(
      `${routerRef.current.pathname}?l=${i18n.language}`,
      `/books/categories/compilations/${query.id}?l=${i18n.language}`
    )
  }, [i18n.language, query.id])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={title} />
      </Head>
      <CategoriesLayout>
        <Row>
          <Col>
            <h2 className="mb-3">{title}</h2>
          </Col>
        </Row>
        <Row>
          {books && (<Products items={books} />)}
        </Row>
      </CategoriesLayout>
    </>
  )
}
export const getServerSideProps = async ({ req, query }) => {
  const lang = getLang(req)

  try {
    const res = await axios.get(`${lang}/collections/books?pk=${query.id}`)

    const data = path(['data', 'results', 0], res)
    const books = prop('books', data)
    const title = prop('title', data)

    return {
      props: {
        title,
        books,
        query
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

CompilationPage.propTypes = {
  title: PropTypes.string.isRequired,
  query: PropTypes.object.isRequired,
  books: PropTypes.array
}

export default CompilationPage
