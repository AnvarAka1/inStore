import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import classes from './HeaderText.module.scss'

function HeaderText ({ title, subtitle, curator, date, rating }) {
  const { t } = useTranslation()

  return (
    <Container>
      <Row>
        <Col md={{ span: 7, offset: 1 }}>
          <div className={classes.HeaderText}>
            <div>
              <h2>{title}</h2>
              <h5 className="text-normal mt-4 mb-4">
                {subtitle}
              </h5>
              <div className="d-flex">
                <h6 className="mr-5">\
                  {t('Curator')}: {curator}
                </h6>
                <h6>{t('Date')}: {date}</h6>
              </div>
              <h6>{t('Rating')}: {rating}</h6>
            </div>
          </div>
        </Col>
      </Row>

    </Container>
  )
}

export default HeaderText
