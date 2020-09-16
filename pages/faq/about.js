import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Col, Row } from 'react-bootstrap'
import Head from 'next/head'

import { PageTitle } from '../../components'
import meta from '../../lib/meta.json'

function AboutPage () {
  const { t } = useTranslation()
  const title = t('faq.about.title')

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
                <b>in-Study.uz</b>
                {t('faq.about.descriptions.0')}
              </p>
              <p>{t('faq.about.descriptions.1')}</p>

              <br />
              <ul>
                <li>
                  <p><i>{t('faq.about.organization.title')}</i></p>
                </li>
                <li>
                  <p className="pl-5">{t('faq.about.organization.content')}</p>
                </li>
                <li>
                  <p><i>{t('faq.about.address.title')}</i></p>
                </li>
                <li>
                  <p className="pl-5">{t('faq.about.address.content')}</p>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default AboutPage
