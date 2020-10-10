import React, { useRef, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { path, prop } from 'ramda'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { sprintf } from 'sprintf-js'

import { ProfileLayout } from '../../layouts'
import ErrorPage from '../404'
import { getLang } from '../../helpers/utils'
import axios from '../../axios-api'
import { Check, PageTitle, Table } from '../../components/'
import Pagination from '../../components/Pagination/Pagination'
import { getPaginationFromResponse } from '../../components/Pagination/utils'
import * as API from '../../constants/api'
import ConfirmModal from '../../components/profile/orders/ConfirmModal'
import { useModal } from '../../hooks'

const OrdersPage = ({ results, paginationProps, url, error }) => {
  const { t, i18n } = useTranslation()
  const [orders, setOrders] = useState(results)
  const cancelOrderId = useRef()
  const cancelModal = useModal()

  const pag = paginationProps || {}
  const [pagination] = useState(pag)
  const router = useRouter()
  if (error) return <ErrorPage />

  const onChangePage = (page) => axios
    .get(`${i18n.language}/profile/orders?page=${page}`)
    .then(res => setOrders(path(['data', 'results'], res)))

  const handleOrderCancel = () => {
    const cancelUrl = sprintf(API.ORDER_CANCEL, cancelOrderId.current)

    return axios.post(cancelUrl)
      .then(() => cancelModal.onHide())
      .then(() => axios.get(url))
      .then(res => setOrders(path(['data', 'results'], res)))
  }

  const handleModalShow = id => {
    cancelOrderId.current = id
    cancelModal.onShow()
  }

  return (
    <ProfileLayout title="My orders">
      <ConfirmModal
        modal={cancelModal}
        onConfirm={handleOrderCancel}
        onDecline={cancelModal.onHide}
      />
      <Row>
        <Col>
          <PageTitle>{t('Order history')}</PageTitle>
        </Col>
      </Row>
      <Row>
        <Col>
          {orders && orders.map((order, index) => (
            <div key={index} className="mb-5">
              <Table rows={order.books} />
              <div className="d-flex justify-content-between align-items-start">
                <Button onClick={() => handleModalShow(prop('id', order))} disabled={!prop('can_cancel', order)}>
                  {t('Cancel order')}
                </Button>
                <Check order={order} />
              </div>
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <Pagination
            numberOfItems={pagination.count}
            active={router.query.page ? router.query.page : 1}
            onChange={onChangePage}
          />
        </Col>
      </Row>
    </ProfileLayout>
  )
}

export const getServerSideProps = async ({ req, query }) => {
  const page = query.page ? `?page=${query.page}` : ''
  const lang = getLang(req)

  try {
    const url = `${lang}/profile/orders${page}`
    const res = await axios.get(url, req)

    const data = prop('data', res)
    const results = prop('results', data)

    const paginationProps = getPaginationFromResponse(data)

    return {
      props: {
        url,
        results,
        paginationProps
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

OrdersPage.propTypes = {
  results: PropTypes.array,
  url: PropTypes.string.isRequired,
  paginationProps: PropTypes.object,
  error: PropTypes.string
}
export default OrdersPage
