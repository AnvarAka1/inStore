import React from 'react'
import { Button, FormGroup, FormLabel } from 'react-bootstrap'
import { Form } from 'formik'
import PropTypes from 'prop-types'

import { AddressForm } from '../index'
import { FormikGroup } from '../UI'
import { withForm } from '../Forms'

function PersonalForm ({ formik, avatar }) {
  const { handleSubmit, getFieldProps, isSubmitting, isValidating, setFieldValue } = formik

  const handleFileUpload = event =>
    setFieldValue('avatar', event.currentTarget.files[0])

  return (
    <Form onSubmit={handleSubmit}>
      <h6 className="text-md">Персональные данные</h6>
      <FormGroup className="mb-0">
        <FormLabel htmlFor="upload-button">
          <p className="text-small">Фотография профиля</p>
          <div className="d-flex align-items-center justify-content-start mt-2">
            <div className="avatar">
              <img src={avatar} className="image" alt="avatar" />
            </div>
            <p className="ml-1 text-small">Выбрать файл</p>
          </div>
        </FormLabel>
        <input
          type="file"
          style={{ display: 'none' }}
          id="upload-button"
          name="avatar"
          onChange={handleFileUpload}
        />
      </FormGroup>
      <FormikGroup name="name" size="sm" {...getFieldProps('name')}>
        Ф.И.О
      </FormikGroup>
      <FormikGroup
        name="dob"
        type="date"
        size="sm"
        {...getFieldProps('dob')}
      >
        Дата рождения
      </FormikGroup>
      <FormikGroup
        name="gender"
        as="select"
        size="sm"
        {...getFieldProps('gender')}
        options={[
          { value: 'm', title: 'Мужчина' },
          { value: 'f', title: 'Женщина' }
        ]}
      >
        Ваш пол
      </FormikGroup>
      <FormikGroup name="phone" size="sm" {...getFieldProps('phone')}>
        Номер телефона
      </FormikGroup>
      <AddressForm getFieldProps={getFieldProps} />
      <Button type="submit" disabled={isSubmitting || isValidating}>
        Сохранить
      </Button>
    </Form>
  )
}

PersonalForm.propTypes = {
  formik: PropTypes.object.isRequired,
  avatar: PropTypes.string
}

export default withForm(PersonalForm)
