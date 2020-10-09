import React from 'react'
import PropTypes from 'prop-types'

function PageTitle ({ children }) {
  return (
    <h1 className="mb-3">
      {children}
    </h1>
  )
}

export default PageTitle

PageTitle.propTypes = {
  children: PropTypes.any.isRequired
}
