import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import GenreLink from './GenreLink'

function Genre ({ title, pathname, id }) {
  const { i18n } = useTranslation()

  const href = {
    pathname: pathname,
    query: {
      genre: id,
      l: i18n.language
    }
  }

  return (
    <GenreLink href={href}>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <p className="mr-1">{title}</p>
        </div>
        <div className="category__tick">
          <img
            alt="active"
            className="icon icon-sm"
            src="/images/icons/tick.png"
          />
        </div>
      </div>
    </GenreLink>
  )
}

Genre.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
  id: PropTypes.number.isRequired
}

export default Genre
