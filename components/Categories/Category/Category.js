import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import CategoryLink from './CategoryLink'

function Category ({ id, title_ru }) {
  const { t, i18n } = useTranslation()
  const path = `/books/categories/${id}?l=${i18n.language}`
  console.log(path)
  return (
    <CategoryLink href="/books/categories/[id]" as={path}>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <p className="text-lg mr-1">{t(title_ru)}</p>
        </div>
        <div className="category__tick">
          <img src="/images/icons/tick.png" className="icon icon-sm" alt="active" />
        </div>
      </div>
    </CategoryLink>
  )
}

Category.propTypes = {
  title_ru: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Category
