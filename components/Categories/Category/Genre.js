import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { path } from 'ramda'

import GenreLink from './GenreLink'

function Genre ({ id, title }) {
  const { i18n } = useTranslation()
  const router = useRouter()
  const catId = path(['query', 'id'], router)

  const href = {
    pathname: router.pathname,
    query: {
      id: catId,
      genre: id,
      l: i18n.language
    }
  }

  const as = {
    as: router.asPath
  }

  return (
    <GenreLink id={id} href={href} as={as}>
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
  id: PropTypes.number.isRequired
}

export default Genre
