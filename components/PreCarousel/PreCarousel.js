import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import classes from './PreCarousel.module.scss'

const preCarousel = ({ children, link }) => {
  const { t } = useTranslation()

  return (
    <Link href={link}>
      <a>
        <div className={classes.PreCarousel}>
          <div>
            <div className={classes.Image}>
              <img
                src={`/images/icons/books.png`} alt="books" />
            </div>
            <h3 className="text-accent">{children}</h3>
            <p className={`text-small mt-auto`}>{t('All compilations')}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default preCarousel
