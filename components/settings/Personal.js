import React, { useState } from 'react'
import { propOr, path } from 'ramda'
import PropTypes from 'prop-types'

import PersonalForm from './PersonalForm'

const defaultImage = '/images/avatar.png'

function Personal ({ onSubmit, initialValues, ...props }) {
  const defaultAvatar = propOr(defaultImage, 'avatar', initialValues)
  const [avatar, setAvatar] = useState(defaultAvatar)

  const handleSubmit = (formValues, { setSubmitting }) =>
    onSubmit(formValues, { setSubmitting })
      .then(res => setAvatar(path(['data', 'avatar'], res)))

  return (
    <PersonalForm
      {...props}
      avatar={avatar}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    />
  )
}

Personal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired
}
export default Personal
