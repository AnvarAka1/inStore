import React, { useState } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { object, string } from 'yup'
import { useTranslation } from 'react-i18next'

import axios from '../../axios-api'
import { Card } from '../../components'
import ForgotForm from '../../components/forgot/ForgotForm'

const initialValues = {
  email: ''
}

const validationSchema = object({
  email: string().email().required()
})

function ForgotPage () {
  const { t } = useTranslation()
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = formValues => {
    setError(null)
    setIsSent(false)
    const data = { email: formValues.email }
    axios.post('/accounts/password/forgot', data)
      .catch(() => setError('No such email'))
      .finally(() => setIsSent(true))
  }

  return (
    <React.Fragment>
      <Row>
        <Col>
          <h2>{t('Restoring password')}</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: '6', offset: '3' }}>
          <Card>
            <Card.Header>{t('Enter Your email')}</Card.Header>
            <Card.Body>
              {isSent && (
                <Alert variant={error ? 'danger' : 'success'}>
                  {error || t('Success! Check your email')}
                </Alert>
              )}
              <ForgotForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ForgotPage
