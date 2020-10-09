import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { path, prop } from 'ramda'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { ProfileLayout } from '../../layouts'
import ErrorPage from '../404'
import { getLang } from '../../helpers/utils'
import axios from '../../axios-api'
import { Check, Table } from '../../components/'
import Pagination from '../../components/Pagination/Pagination'
import { getPaginationFromResponse } from '../../components/Pagination/utils'
import { ORDER_CANCEL } from '../../constants/api'

const OrdersPage = ({ results, paginationProps, error }) => {
  const { t, i18n } = useTranslation()
  const [orders, setOrders] = useState(results)

  const pag = paginationProps || {}
  const [pagination] = useState(pag)
  const router = useRouter()
  if (error) return <ErrorPage />

  const onChangePage = (page) => axios
    .get(`${i18n.language}/profile/orders?page=${page}`)
    .then(res => setOrders(path(['data', 'results'], res)))

  return (
    <ProfileLayout title="My orders">
      <Row>
        <Col>
          <h2>{t('Order history')}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {orders && orders.map((order, index) => (
            <div key={index} className="mb-5 overflow-auto">
              <Table rows={order.books} />
              <Check order={order} />
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
    const res = await axios.get(`${lang}/profile/orders${page}`, req)

    const data = prop('data', res)
    const results = prop('results', data)

    const paginationProps = getPaginationFromResponse(data)

    return {
      props: {
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
  paginationProps: PropTypes.object,
  error: PropTypes.string
}
export default OrdersPage
