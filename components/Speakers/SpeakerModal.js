import React from 'react'
import { Form, Formik } from 'formik'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { object, string } from 'yup'

import { Card, Modal } from '../index'
import { FormikGroup } from '../UI'

function SpeakerModal ({ speakerModal, onSpeakerSubmit }) {
  const { t } = useTranslation()
  const initialValues = {
    name: '',
    mail: '',
    phone: ''
  }
  const validationSchema = object({
    name: string()
      .min(2)
      .required(),
    email: string()
      .email()
      .min(4)
      .required(),
    phone: string()
      .min(9)
      .max(9)
      .required()
  })

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true)
    return onSpeakerSubmit(values, setSubmitting)
  }
  return (
    <Modal modal={speakerModal}>
      <Card>
        <Card.Header>{t('Become a speaker')}</Card.Header>
        <Card.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit, getFieldProps, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <FormikGroup placeholder="Ф.И.О" name="name" {...getFieldProps('name')}>
                  {t('Full name')}
                </FormikGroup>
                <FormikGroup placeholder="example@mail.com" name="email" {...getFieldProps('email')}>
                  {t('Email')}
                </FormikGroup>
                <FormikGroup
                  placeholder="+998 (__) ___ - __ - __"
                  name="phone"
                  {...getFieldProps('phone')}
                >
                  {t('Phone')}
                </FormikGroup>
                <Button type="submit" disabled={isSubmitting}>
                  {t('Send')}
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Modal>
  )
}

export default SpeakerModal
