import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSnackbar } from 'react-simple-snackbar'
import { Col, Row } from 'react-bootstrap'
import Router from 'next/router'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import Head from 'next/head'
import { prop } from 'ramda'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { useCart, useCartManipulator } from '../../components/Cart'
import { useAuthModal } from '../../components/Auth'
import {
  Comments,
  ProductDescription,
  ProductDetails,
  ProductsCarousel
} from '../../components/'
import axios from '../../axios-api'
import { useForm } from '../../hooks'
import { getLang } from '../../helpers/utils'

const OPTIONS = {
  position: 'top-right',
  style: {
    backgroundColor: 'rgba(0, 0, 0, .75)',
    color: 'white',
    zIndex: '999999999',
    textAlign: 'left',
    fontSize: '1rem'
  },
  closeStyle: {
    color: 'white',
    fontSize: '16px',
  },
}

const BookPage = ({ bookProps, isAuthorized, query }) => {
  const { t, i18n } = useTranslation()
  const [book, setBook] = useState(bookProps)
  const [rate, setRate] = useState(0)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  const [openSnackbar] = useSnackbar(OPTIONS)

  const { onFindInCart } = useCart()
  const { onAddRemoveItem } = useCartManipulator()
  const { onShow } = useAuthModal()
  const commentControl = useForm()

  const id = prop('id', query)
  const title = prop('title', book)

  useEffect(() => {
    Router.replace(Router.pathname, `/books/${id}?l=${i18n.language}`)
  }, [i18n.language, id])

  const expandDescription = () => {
    setIsDescriptionExpanded(true)
  }

  useEffect(() => {
    setBook(bookProps)
  }, [bookProps])

  const handleCart = (book) => {
    onAddRemoveItem(book)
    const inCart = onFindInCart(book.id)
    const add = (
      <>
        {t('Added to cart')}<br />
        <Link href={`/cart/?l=${i18n.language}`}>
          <a className="mt-2 d-inline-block text-warning">
            {t('Proceed to cart')}
          </a>
        </Link>
      </>
    )
    const remove = t('Removed from cart')

    openSnackbar(!inCart ? add : remove)
  }

  const commentSubmitHandler = event => {
    event.preventDefault()
    const data = { rate, text: commentControl.value }
    axios
      .post(`${i18n.language}/books/${book.id}/feedback`, data)
      .then(() => {
        commentControl.clear()
        return axios.get('books/' + book.id)
      })
      .then(res => setBook(res.data))
  }

  const favouriteHandler = () => {
    axios
      .post(`${i18n.language}/profile/favourites/${book.id}`, null)
      .then(() => setBook({ ...book, in_favourites: !book.in_favourites }))
  }

  const rateHandler = id => setRate(id + 1)

  const relatedBooks = prop('related', book)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" property="og:title" content={title} />
        <meta name="description" content={prop('description', book)} />
        <meta name="description" property="og:description" content={prop('description', book)} />
        <meta name="og:image" property="og:image" content={prop('image', book)} />
      </Head>
      <Row>
        <Col sm={4}>
          <ProductDetails
            {...book}
            social={null}
          />

        </Col>
        <Col sm={8}>
          <Row>
            <Col sm={12} md={11} lg={9}>
              <ProductDescription
                {...book}
                expandDescription={expandDescription}
                isDescriptionExpanded={isDescriptionExpanded}
                cartClicked={() => handleCart(book)}
                isInCart={onFindInCart(book.id)}
                favouriteClicked={favouriteHandler}
                isAuthorized={isAuthorized}
              />

              <Comments
                items={book.feedback}
                rate={rate}
                onSubmit={commentSubmitHandler}
                commentControl={commentControl}
                rateClicked={rateHandler}
                onAuth={onShow}
                isAuthorized={isAuthorized}
              />
            </Col>
          </Row>
          <h3 className="mt-5">{t('This may be interesting for you')}</h3>
          <Fade right={true}>
            <ProductsCarousel
              items={relatedBooks}
              responsive={{ lg: 4, xl: 4, sm: 4 }}
            />
          </Fade>
        </Col>
      </Row>
    </>
  )
}

export const getServerSideProps = async ({ query, req }) => {
  const lang = getLang(req)

  try {
    const res = await axios.get(`${lang}/books/${query.id}`, req)
    const bookProps = prop('data', res)
    console.log(bookProps)

    return {
      props: {
        bookProps,
        query
      }
    }
  } catch (error) {
    console.log('hey')
    return {
      props: {
        error: 'Error'
      }
    }
  }
}

BookPage.propTypes = {
  bookProps: PropTypes.object.isRequired,
  isAuthorized: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.token !== null
  }
}
export default connect(mapStateToProps)(BookPage)
