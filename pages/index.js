import React, { useEffect } from 'react'
import Router from 'next/router'
import { prop } from 'ramda'
import Fade from 'react-reveal/Fade'
import { Carousel, Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'

import { CompilationsCarousel, Heading, NewHeader, ProductsCarousel } from '../components'
import { getLang } from '../helpers/utils'
import axios from '../axios-api'

const LandingPage = ({ books, bookCollections, error }) => {
  const { t, i18n } = useTranslation()

  if (error) return <h3>{error}</h3>

  useEffect(() => {
    Router.replace(Router.pathname, `/?l=${i18n.language}`)
  }, [i18n.language])

  return (
    <>
      <Head>
        <title>in-Study.uz | {t('Books library - Tashkent, Uzbekistan')}</title>
        <meta property="og:title" content={'in-Study.uz | Книжная библиотека - Ташкент, Узбекистан'} />
      </Head>
      <Row className="mb-4">
        <Col>
          <Fade>
            <section>
              <Carousel>
                {getCarouselItems().map(item => {
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
            title="New books"
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
const getCarouselItems = () => [
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
export default React.memo(LandingPage)
