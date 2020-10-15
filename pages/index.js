import React, { useEffect } from 'react'
import Router from 'next/router'
import { prop } from 'ramda'
import Fade from 'react-reveal/Fade'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { CompilationsCarousel, Heading, NewHeader, ProductsCarousel } from '../components'
import { getLang } from '../helpers/utils'
import axios from '../axios-api'
import meta from '../lib/meta.json'
import Banner from '../components/Banner/Banner'

const LandingPage = ({ slider, books, bookCollections, error }) => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    Router.replace(Router.pathname, `/?l=${i18n.language}`)
  }, [i18n.language])

  if (error) return <h3>{error}</h3>

  return (
    <>
      <Head>
        <title>in-Store.uz | {t('title')}</title>
        <meta property="og:title" content={t('title')} />
        <meta name="description" content={t('title')} />
      </Head>

      <Row className="mb-4">
        <Col>
          <Fade>
            <section>
              <Banner slider={slider} />
            </section>
          </Fade>
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="d-none d-sm-block">
          <Fade>
            <div>
              <img
                src="/images/main/books/first.png"
                alt="Электронные и печатные книги"
              />
            </div>
          </Fade>
        </Col>
        <Col sm={6} xs={12}>
          <Heading
            href={`/books/categories?l=${i18n.language}`}
            title={t('Books for everyone')}
          />
        </Col>
      </Row>
      <Row className="mt-4 mb-4 pt-4 pb-4">
        <Col sm={12}>
          <CompilationsCarousel items={bookCollections} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewHeader
            href={`/books/categories/all?l=${i18n.language}`}
            title={t('New books')}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Fade right={true}>
            <ProductsCarousel items={books} />
          </Fade>
        </Col>
      </Row>
    </>
  )
}

export const getServerSideProps = async ({ req }) => {
  const lang = getLang(req)

  try {
    const res = await axios.get(lang + '/home')

    const data = prop('data', res)
    const feedback = prop('feedback', data)
    const books = prop('books', data)
    const bookCollections = prop('book_collections', data)
    const slider = prop('slider', data)

    return {
      props: {
        feedback,
        slider,
        books,
        bookCollections,
      }
    }
  } catch (err) {
    return {
      props: {
        error: 'Error'
      }
    }
  }
}

LandingPage.propTypes = {
  slider: PropTypes.array,
  books: PropTypes.array,
  bookCollections: PropTypes.array,
  error: PropTypes.string
}

export default React.memo(LandingPage)
