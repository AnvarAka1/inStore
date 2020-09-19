import React, { useEffect } from 'react'
import Router from 'next/router'
import { prop } from 'ramda'
import Fade from 'react-reveal/Fade'
import { Carousel, Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'

import { CompilationsCarousel, Heading, NewHeader, ProductsCarousel } from '../components'
import { getLang } from '../helpers/utils'
import axios from '../axios-api'
import meta from '../lib/meta.json'

const carouselItems = [
  {
    id: 0,
    titles: ['Электронные книги и Видео уроки', 'E-books and Videolessons', 'Elektron darsliklar va video darsliklar'],
    img: '/images/main/books/carousel.png',
    link: '/'
  },

  {
    id: 1,
    titles: ['Электронные книги и Видео уроки', 'E-books and Videolessons', 'Elektron darsliklar va video darsliklar'],
    img: '/images/main/books/carousel.png',
    link: '/'
  }
]

const LandingPage = ({ books, bookCollections, error }) => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    Router.replace(Router.pathname, `/?l=${i18n.language}`)
  }, [i18n.language])

  if (error) return <h3>{error}</h3>
  return (
    <>
      <Head>

        <title>in-Study.uz | {t('Books library - Tashkent, Uzbekistan')}</title>
        <meta property="og:title" content="in-Study.uz | Книжная библиотека - Ташкент, Узбекистан" />
        <meta name="description" content={ReactHtmlParser(meta.description)} />
      </Head>
      <Row className="mb-4">
        <Col>
          <Fade>
            <section>
              <Carousel>
                {carouselItems.map(item => {
                  return (
                    <Carousel.Item key={item.id}>
                      <img
                        className="d-block w-100"
                        src={item.img}
                        alt={item.titles[0]}
                      />
                      <Carousel.Caption>
                        <h3>{item.titles[0]}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                })}
              </Carousel>
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
            text={t('for any taste')}
            href={`/books/categories?l=${i18n.language}`}
            title={t('Printed and e-books')}
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
            href={`/books/categories?l=${i18n.language}`}
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

    return {
      props: {
        feedback,
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
  books: PropTypes.array,
  bookCollections: PropTypes.array,
  error: PropTypes.string
}

export default React.memo(LandingPage)
