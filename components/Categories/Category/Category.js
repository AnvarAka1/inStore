import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import CategoryLink from './CategoryLink'

function Category ({ title, icon, link }) {
  const { i18n } = useTranslation()

  return (
    <CategoryLink href={`${link}?l=${i18n.language}`}>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <img src={icon} alt={title} className="icon icon-sm mr-2" />
          <p className="text-lg mr-1">{title}</p>
        </div>
        <div className="category__tick">
          <img src="/images/icons/tick.png" className="icon icon-sm" alt="active" />
        </div>
      </div>
    </CategoryLink>
  )
}

Category.propTypes = {
  title: PropTypes.any.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Category
