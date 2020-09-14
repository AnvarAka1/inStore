import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap'
import { Form, Formik } from 'formik'
import { object, string } from 'yup'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { prop } from 'ramda'

import { FormikGroup } from '../../components/UI'
import axios from '../../axios-api'
import { Card } from '../../components'
import RestoreForm from '../../components/restore/RestoreForm'

const initialValues = {
  fPassword: '',
  sPassword: ''
}

const validationSchema = object({
  fPassword: string().min(6).max(20).required(),
  sPassword: string().min(6).max(20).required()
})

function RestorePage ({ query }) {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const routerRef = useRef(router)

  const [count, setCount] = useState(3)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (count < 1) {
      routerRef.current.replace(`/?l=${i18n.language}`)
    }
    let timer = null
    if (isSent && !error) {
      timer = setTimeout(() => {
        setCount(count - 1)
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [isSent, count, error, i18n.language])

  const handleSubmit = (values) => {
    setIsSent(false)
    setError(null)

    const data = { password: values.fPassword, token: prop('token', query) }

    axios.post('/accounts/password/retrieve', data)
      .then(() => setIsSent(true))
      .finally(() => setIsSent(true))
  }

  return (
    <>
      <Row>
        <Col>
          <h2>{t('Restoring account')}</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: '6', offset: '3' }}>
          <Card>
            <Card.Header>{t('Change your password')}</Card.Header>
            <Card.Body>
              {isSent && (
                <Alert variant={error ? 'danger' : 'success'}>
                  {error
                    ? t('Something went wrong. Try again')
                    : t('Success. You can now login with Your new password')
                  }
                </Alert>)}
              <RestoreForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export const getServerSideProps = ({ query }) => {
  return {
    props: {
      query
    }
  }
}
export default RestorePage
