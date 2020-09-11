import React from 'react'
import Link from 'next/link'
import { Alert, Button, FormCheck, FormGroup, FormLabel } from 'react-bootstrap'
import InputMask from 'react-input-mask'
import { ErrorMessage, Form, Formik } from 'formik'
import { object, string } from 'yup'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

import Social from './Social'
import classes from './AuthModal.module.scss'

import { FormikGroup } from '../UI'
import { convertPhoneForBackend } from '../../helpers/utils'
import { Card, Modal } from '../'

const authModal = (props) => {
  const {
    modal,
    onHide,
    isSignUp,
    modeHandler,
    showInputMask,
    checkboxControl,
    onAuth,
    lang,
    error
  } = props

  const { t } = useTranslation()

  const form = isSignUp ? (
    <Formik
      key={0}
      initialValues={{
        name: '',
        email: '',
        phone: '',
        fPassword: '',
        sPassword: ''
      }}
      validationSchema={object({
        name: string().min(2).required(),
        email: string().email().min(4).required(),
        phone: string().required(),
        fPassword: string().min(6).max(20).required(),
        sPassword: string().min(6).max(20).required()
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        const phone = convertPhoneForBackend(values.phone)
        onAuth(values.name, values.email, phone, values.fPassword, isSignUp, () => setSubmitting(false))
      }}
    >
      {register => (
        <Form onSubmit={register.handleSubmit}>
          <FormikGroup
            name="name"
            size="md"
            {...register.getFieldProps('name')}
          >
            {t('Full name')}
          </FormikGroup>
          <FormikGroup
            name="email"
            size="md"
            {...register.getFieldProps('email')}
          >
            Email
          </FormikGroup>
          {showInputMask && (
            <FormGroup>
              <FormLabel>{t('Phone number')}</FormLabel>
              <InputMask
                className="form-control form-control-md"
                mask="+\9\98 (99) 999-99-99"
                name="phone"
                placeholder="+998 (__) ___-__-__"
                alwaysShowMask={true}
                value={register.getFieldProps('phone').value}
                onChange={register.getFieldProps('phone').onChange}
              />
              <span className="text-danger text-small">
                <ErrorMessage name="phone" />
              </span>
            </FormGroup>
          )}
          <FormikGroup
            name="fPassword"
            type="password"
            size="md"
            {...register.getFieldProps('fPassword')}
          >
            {t('Enter password')}
          </FormikGroup>
          <FormikGroup
            name="sPassword"
            type="password"
            size="md"
            {...register.getFieldProps('sPassword')}
          >
            {t('Confirm password')}
          </FormikGroup>
          <Button
            type="submit"
            className="w-100 mt-2 pt-3 pb-3"
            disabled={register.isSubmitting}
          >
            <h6 className="mb-0">
              {t('Register')}
            </h6>
          </Button>
        </Form>
      )}
    </Formik>
  ) : (
    <Formik
      key={1}
      initialValues={{
        emailPhone: '',
        password: '',
        checkbox: ''
      }}
      validationSchema={object({
        emailPhone: string()
          .min(6, 'Слишком мало символов')
          .required('Введите email или номер телефона'),
        password: string()
          .min(6, 'Пароль должен содержать минимум 6 символов')
          .max(20, 'Пароль должен содержать максимум 20 символов')
          .required('Введите пароль')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        onAuth(
          null,
          values.emailPhone,
          null,
          values.password,
          isSignUp,
          () => setSubmitting(false)
        )
      }}
    >
      {login => (
        <Form onSubmit={login.handleSubmit}>
          <FormikGroup
            name="emailPhone"
            {...login.getFieldProps('emailPhone')}
            size="md"
          >
            {t('Email or phone number')}
          </FormikGroup>
          <FormikGroup
            name="password"
            {...login.getFieldProps('password')}
            type="password" size="md"
          >
            {t('Enter password')}
          </FormikGroup>

          <FormCheck
            type="checkbox"
            label={t('Remember password')}
            value={checkboxControl.value}
            onChange={checkboxControl.onChange}
          />

          <Link href="/forgot">
            <a className="text-small" onClick={modal.onHide}>
              {t('Can\'t access?')}
            </a>
          </Link>
          <Button
            type="submit"
            className="w-100 mt-2 pt-3 pb-3"
            disabled={login.isSubmitting}
          >
            <h6 className="mb-0">{t('Login')}</h6>
          </Button>
        </Form>
      )}
    </Formik>
  )
  return (
    <Modal modal={modal} size="lg" onHide={onHide}>
      <Card>
        <Card.Header>
          <div className={classes.TopButtons}>
            <a
              role="button"
              onClick={() => modeHandler(false)}
              className={clsx({
                [classes.Active]: !isSignUp
              })}
            >
              {t('Login').toUpperCase()}
            </a>
            <a
              role="button"
              onClick={() => modeHandler(true)}
              className={clsx({
                [classes.Active]: isSignUp
              })}
            >
              {t('Register').toUpperCase()}
            </a>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="d-flex align-items-center pt-5">
            <div className="w-100 pl-2 pr-4">
              <div className={`${classes.Social}  w-100`}>
                <p className="text-small text-bold mb-3" />
                <h6>
                  {isSignUp
                    ? t('Register via social media')
                    : t('Login via social media')
                  }:
                </h6>
                <Social onAuth={onAuth} />
              </div>

              <h5 className={classes.Or}>or</h5>
              {error && <Alert variant="danger">{error[lang]}</Alert>}
              {form}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Modal>
  )
}

export default React.memo(authModal)
