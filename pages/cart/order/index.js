import React from 'react'
import { object, string } from 'yup'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import { pathOr, prop, propOr } from 'ramda'
import PropTypes from 'prop-types'

import { useModal } from '../../../hooks'
import axios from '../../../axios-api'
import { Modal, Success } from '../../../components'
import { CartLayout } from '../../../layouts'
import { E_BOOKS_ONLY, MIXED, PRINTED_BOOK, PRINTED_ONLY, useCart, useCartManipulator } from '../../../components/Cart'
import { useAuthModal } from '../../../components/Auth'
import OnlineBooksOrder from '../../../components/order/OnlineBooksOrder'
import PrintedBooksOrder from '../../../components/order/PrintedBooksOrder'
import MixedBooksOrder from '../../../components/order/MixedBooksOrder'
import { orderSerializer } from '../../../components/order/serializers'

const getInitialValues = (profile, isOnline) => {
  const phone = propOr('', 'phone', profile)
  const fio = propOr('', 'fio', profile)
  const email = propOr('', 'email', profile)
  const city = propOr('Ташкент', 'city', profile)
  const district = propOr('Сергелийский', 'region', profile)
  const street = propOr('', 'street', profile)
  const house = propOr('', 'house', profile)
  const address = propOr('', 'full_adress', profile)
  const payment_type = isOnline ? 3 : 1

  return {
    phone,
    fio,
    email,
    city,
    district,
    street,
    house,
    address,
    comment: '',
    payment_type
  }
}
const getValidationSchema = isOnlineBooks => {
  const street = isOnlineBooks ? string() : string().required('Введите улицу')
  const house = isOnlineBooks ? string() : string().required('Введите номер дома')

  return object({
    phone: string().min(8).required('Введите номер'),
    fio: string().required('Имя обязательно'),
    email: string().email(),
    street,
    house
  })
}
const OrderPage = ({ queryCase, isAuthorized, profile }) => {
  const { t } = useTranslation()
  const { getBooksByType, getBooksExceptType, getIds } = useCart()
  const { onClearCart } = useCartManipulator()
  const { onShow } = useAuthModal()
  const purchaseModal = useModal()

  const isOnlineBooks = queryCase === E_BOOKS_ONLY
  const isPrintedBooks = queryCase === PRINTED_ONLY
  const isMixedBooks = queryCase === MIXED

  const handleAuthValidate = () => {
    if (!isAuthorized) {
      onShow()
    }
    return isAuthorized
  }

  const redirectFromResponse = response => {
    const redirect = pathOr('', ['data', 'redirect_url'], response)

    location.href = redirect
  }

  const handleOnlineSubmit = formValues => {
    const paymentType = prop('payment_type', formValues)
    const isOnlinePayment = paymentType < 3

    return handleSubmit(formValues, getIds())
      .then(res => {
        if (isOnlinePayment) {
          onClearCart()
          purchaseModal.onShow()
        }
        if (!isOnlinePayment) {
          redirectFromResponse(res)
        }
      })
  }

  const handleMixedBooksSubmit = (formValues, isOnline) => {
    if (isOnline) {
      handleSubmit(formValues, getIds())
        .then(res => redirectFromResponse(res))
    }

    if (!isOnline) {
      const printedBooksIds = getBooksByType(PRINTED_BOOK).map(el => el.id).join(',')
      return handleSubmit(formValues, printedBooksIds, 1)
        .then(() => {
          const ebooksIds = getBooksExceptType(2).map(el => el.id).join(', ')
          return handleSubmit(formValues, ebooksIds)
        })
        .then(res => redirectFromResponse(res))
    }
  }

  const handleSubmit = (formValues, books, customMethodOfPayment) => {
    const data = orderSerializer(formValues, books, customMethodOfPayment)

    return axios.post('orders/create', data, null)
      .then(res => {
        return res
      })
  }

  const title = t('Purchase order')

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>

      <Modal modal={purchaseModal}>
        <Success closed={purchaseModal.onHide} />
      </Modal>

      <CartLayout isOrderPage={true}>
        <Row>
          <Col>
            <h2>{t('Checkout')}</h2>
          </Col>
        </Row>
        {isOnlineBooks && (
          <OnlineBooksOrder
            onAuthValidate={handleAuthValidate}
            initialValues={getInitialValues(profile, true)}
            validationSchema={getValidationSchema(true)}
            onSubmit={handleOnlineSubmit}
          />
        )}
        {isPrintedBooks && (
          <PrintedBooksOrder
            onAuthValidate={handleAuthValidate}
            initialValues={getInitialValues(profile)}
            validationSchema={getValidationSchema()}
            onSubmit={handleOnlineSubmit}
          />)}
        {isMixedBooks && (
          <MixedBooksOrder
            onAuthValidate={handleAuthValidate}
            initialValues={getInitialValues(profile, true)}
            validationSchema={getValidationSchema()}
            onSubmit={handleMixedBooksSubmit}
          />)}
      </CartLayout>
    </>
  )
}

export const getServerSideProps = async ({ req, query }) => {
  try {
    const res = await axios.get('profile', req)
    const profile = prop('data', res)
    const queryCase = parseInt(prop('case', query))
    return {
      props: {
        profile,
        queryCase
      }
    }
  } catch (err) {
    const queryCase = parseInt(prop('case', query))
    return {
      props: {
        queryCase,
        err: 'Error'
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.token !== null
  }
}
OrderPage.propTypes = {
  queryCase: PropTypes.number.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  profile: PropTypes.object
}

export default connect(mapStateToProps)(OrderPage)
