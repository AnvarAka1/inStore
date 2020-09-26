import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Genre from './Category/Genre'
import classes from './Category/Category.module.scss'

function Genres ({ items }) {
  const { t } = useTranslation()

  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <img className="icon icon-md" src="/images/icons/janra.png" alt="Жанры" />
        <h5 className="ml-1 mb-0 text-secondary">{t('Genres')}</h5>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id} className={clsx(classes.Category, 'mt-2 list')}>
            <Genre {...item} />
          </li>
        ))}
      </ul>
      <hr className="mt-4 pb-2" />
    </>
  )
}

Genres.propTypes = {
  items: PropTypes.array
}

export default Genres
