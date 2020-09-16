import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { date, object, string } from 'yup'
import { prop, propOr } from 'ramda'
import PropTypes from 'prop-types'

import axios from '../../axios-api'
import ErrorPage from '../404'
import { ProfileLayout } from '../../layouts'
import SecurityForm from '../../components/settings/SecurityForm'
import { PersonalSerializer, SecuritySerializer } from '../../components/settings/serializers'
import Personal from '../../components/settings/Personal'

const personalValidationSchema = object({
  name: string()
    .min(2, 'Имя должно содержать минимум 2 буквы')
    .max(100, 'Name is too long')
    .required('Name is required!'),
  dob: date(),
  gender: string().required(),
  phone: string()
})

const securityValidationSchema = object({
  email: string().email(),
  curPassword: string()
    .min(8)
    .max(20),
  newPassword: string()
    .min(8)
    .max(20),
  repPassword: string()
    .min(8)
    .max(20)
})

const getPersonalInitialValues = values => {
  const avatar = prop('avatar', values)
  const name = prop('fio', values)
  const phone = prop('phone', values)
  const gender = propOr('m', 'gender', values)
  const city = propOr('Ташкент', 'city', values)
  const district = propOr('Сергелийский', 'region', values)
  const street = propOr('', 'street', values)
  const house = propOr('', 'house', values)

  return {
    avatar,
    name,
    phone,
    gender,
    city,
    district,
    street,
    house
  }
}

const SettingsPage = ({ userData, error }) => {
  if (error) {
    return <ErrorPage />
  }

  const securityInitialValues = {
    email: prop('email', userData),
    curPassword: '',
    newPassword: '',
    repPassword: ''
  }

  const updatePasswordHandler = (formValues) =>
    axios.put('profile/password', SecuritySerializer(formValues))

  const handlePersonalSubmit = (formValues, { setSubmitting }) => {
    setSubmitting(true)
    return axios
      .patch('profile/', PersonalSerializer(formValues))
      .finally(() => setSubmitting(false))
  }

  const handleSecuritySubmit = (values, { setSubmitting }) => {
    setSubmitting(true)
    updatePasswordHandler(values)
      .finally(() => setSubmitting(false))
  }

  return (
    <ProfileLayout>
      <Row>
        <Col sm={12}>
          <h2>Настройки</h2>
          <p className="mb-5">ID пользователя: {userData.id}</p>
        </Col>
      </Row>
      <Row>
        <Col md={4} sm={6}>
          <Personal
            initialValues={getPersonalInitialValues(userData)}
            onSubmit={handlePersonalSubmit}
            validationSchema={personalValidationSchema}
          />
        </Col>
        <Col md={4} sm={6}>
          <SecurityForm
            initialValues={securityInitialValues}
            onSubmit={handleSecuritySubmit}
            validationSchema={securityValidationSchema}
          />
        </Col>
      </Row>
    </ProfileLayout>
  )
}

export const getServerSideProps = async ({ req }) => {
  try {
    const res = await axios.get('/profile', req)
    const userData = prop('data', res)
    return {
      props: {
        userData
      }
    }
  } catch (err) {
    const error = 'Error'
    return {
      props: {
        error
      }
    }
  }
}

SettingsPage.propTypes = {
  userData: PropTypes.object,
  error: PropTypes.string
}

export default SettingsPage
