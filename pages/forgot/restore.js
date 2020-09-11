import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap'
import { Form, Formik } from 'formik'
import { object, string } from 'yup'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { FormikGroup } from '../../components/UI'
import axios from '../../axios-api'
import { Card } from '../../components'

function RestorePage ({ query }) {
  const { t, i18n } = useTranslation()
  const router = useRouter()

  const [count, setCount] = useState(3)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState(null)

  const initialValues = {
    fPassword: '',
    sPassword: ''
  }

  const validationSchema = object({
    fPassword: string().min(6).max(20).required(),
    sPassword: string().min(6).max(20).required()
  })

  useEffect(() => {
    if (count < 1) {
      router.replace(`/?l=${i18n.language}`)
    }
    let timer = null
    if (isSent && !error) {
      timer = setTimeout(() => {
        setCount(count - 1)
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [isSent, count, error, router, i18n.language])

  const submitHandler = (values) => {
    setIsSent(false)
    setError(null)
    const formData = new FormData()
    formData.append('password', values.fPassword)
    formData.append('token', query.token)

    axios.post('/accounts/password/retrieve', formData)
      .then(() => setIsSent(true))
      .catch(err => console.log(err))
      .finally(() => setIsSent(true))
  }
  return (
    <React.Fragment>
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
              {isSent && <Alert variant={error ? 'danger' : 'success'}>
                {error
                  ? t('Something went wrong. Try again')
                  : t('Success. You can now login with Your new password')
                }
              </Alert>}
              <Formik
                onSubmit={submitHandler}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {formik => (
                  <Form onSubmit={formik.handleSubmit}>
                    <FormikGroup
                      name="fPassword"
                      size="sm"
                      type="password"
                      {...formik.getFieldProps('fPassword')}
                    >
                      {t('New password')}
                    </FormikGroup>
                    <FormikGroup
                      name="sPassword"
                      size="sm"
                      type="password"
                      {...formik.getFieldProps('sPassword')}
                    >
                      {t('Repeat password')}
                    </FormikGroup>
                    <Button
                      type="submit"
                      className="mt-2 w-100"
                    >
                      {t('Send')}
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
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
