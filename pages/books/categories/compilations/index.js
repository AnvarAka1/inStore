import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Router, { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { prop } from 'ramda'
import Head from 'next/head'
import PropTypes from 'prop-types'

import axios from '../../../../axios-api'
import { CategoriesLayout } from '../../../../layouts'
import { Compilations } from '../../../../components'
import Pagination from '../../../../components/Pagination/Pagination'
import { getPaginationFromResponse } from '../../../../components/Pagination/utils'
import { getLang } from '../../../../helpers/utils'
import meta from '../../../../lib/meta.json'

const CompilationsPage = ({ results, pagination }) => {
  const { t, i18n } = useTranslation()
  const router = useRouter()

  useEffect(() => {
    Router.replace(`${Router.pathname}?l=${i18n.language}`)
  }, [i18n.language])

  const title = t('Compilations')

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={meta.title} />
      </Head>
      <CategoriesLayout withoutGenre={true}>
        <Row>
          <Col>
            <h2 className="mb-3">{t('Collections')}</h2>
          </Col>
        </Row>
        <Row className="mb-5 mt-1">
          <Compilations items={results} />
        </Row>
        <Row>
          <Col>
            <Pagination
              numberOfItems={pagination.count}
              active={router.query.page || 1}
            />
          </Col>
        </Row>
      </CategoriesLayout>
    </>
  )
}
export const getServerSideProps = async ({ req }) => {
  const lang = getLang(req)

  try {
    const res = await axios.get(`${lang}/collections`)

    const data = prop('data', res)
    const results = prop('results', data)

    const pagination = getPaginationFromResponse(data)

    return {
      props: {
        results,
        pagination
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

CompilationsPage.propTypes = {
  results: PropTypes.array,
  pagination: PropTypes.object
}

export default CompilationsPage
