import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Col, Row } from 'react-bootstrap'
import Head from 'next/head'

import { PageTitle } from '../../components'
import meta from '../../lib/meta.json'

function DeliveryPage () {
  const { t } = useTranslation()
  const title = t('faq.delivery.title')

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={title} />
      </Head>
      <Row>
        <Col>
          <PageTitle>{title}</PageTitle>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Body>
              <p>
                {t('faq.delivery.description')}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default DeliveryPage
