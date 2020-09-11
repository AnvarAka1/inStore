import React, { useRef } from 'react'
import { object, string } from 'yup'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import { pathOr, prop, propOr } from 'ramda'

import { useModal } from '../../../hooks'
import { parseCookies } from '../../../helpers/utils'
import axios from '../../../axios-api'
import { Modal, Success } from '../../../components'
import { CartLayout } from '../../../layouts'
import * as gtag from '../../../lib/gtag'
import { E_BOOKS_ONLY, MIXED, PRINTED_BOOK, PRINTED_ONLY, useCart, useCartManipulator } from '../../../components/Cart'
import { useAuthModal } from '../../../components/Auth'
import OnlineBooksOrder from '../../../components/order/OnlineBooksOrder'
import PrintedBooksOrder from '../../../components/order/PrintedBooksOrder'
import MixedBooksOrder from '../../../components/order/MixedBooksOrder'
import { orderSerializer } from '../../../components/order/serializers'

let fData = null

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
  const allOnlineRef = useRef(true)
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

  const handleOnlineSubmit = formValues => {
    const paymentType = prop('payment_type', formValues)
    const isOnlinePayment = paymentType < 3

    return handleSubmit(formValues, getIds())
      .then(res => {
        if (isOnlinePayment) {
          gtag.event({
            action: 'Only_online_or_only_printed_books_offline_payment',
            category: 'purchase',
            label: 'Purchase by offline payment'
          })
          onClearCart()
          purchaseModal.onShow()
        }
        if (!isOnlinePayment) {
          gtag.event({
            action: 'Only_online_or_only_printed_books_card_payment',
            category: 'purchase',
            label: 'Purchase by card payment'
          })
          const redirect = pathOr('', ['data', 'redirect_url'], res)
          location.href = redirect
        }
      })
  }

  const handleMixedBooksSubmit = formValues => {
    if (allOnlineRef.current) {
      handleSubmit(formValues, getIds())
        .then(res => {
          gtag.event({
            action: 'purchase_all_online',
            category: 'purchase',
            label: 'Online payment'
          })
          const redirect = pathOr('', ['data', 'redirect_url'], res)
          location.href = redirect
        })
    }
    if (!allOnlineRef.current) {
      const printedBooksIds = getBooksByType(PRINTED_BOOK).map(el => el.id)
      handleSubmit(formValues, printedBooksIds)
        .then(() => {
          const ebooksIds = getBooksExceptType(2).map(el => el.id)
          return handleSubmit(formValues, ebooksIds)
        })
        .then(res => {
          gtag.event({
            action: 'purchase_mix',
            category: 'purchase',
            label: 'Purchase when printed books are paid offline, online books are paid via card'
          })
          const redirect = pathOr('', ['data', 'redirect_url'], res)
          location.href = redirect
        })
    }
  }

  const handleSubmit = (formValues, books) => {
    const data = orderSerializer(formValues, books)

    return axios.post('orders/create', data, null)
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
            initialValues={getInitialValues(profile)}
            validationSchema={getValidationSchema()}
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
            initialValues={getInitialValues(profile)}
            validationSchema={getValidationSchema()}
            onSubmit={handleMixedBooksSubmit}
          />)}
      </CartLayout>
    </>
  )
}

export const getServerSideProps = async ({ req, query }) => {
  let profile = null
  const token = parseCookies(req).token
  if (token) {
    profile = await axios.get('profile', req)
    profile = profile.data
  }

  return {
    props: {
      profile,
      queryCase: +query.case
    }
  }
}
const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.token !== null
  }
}
export default connect(mapStateToProps)(OrderPage)
