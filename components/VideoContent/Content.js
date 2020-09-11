import React from 'react'
import { useTranslation } from 'react-i18next'

import classes from './VideoContent.module.scss'

function Content ({ description }) {
  const { t } = useTranslation()

  return (
    <div className={classes.Content}>
      <h5>{t('Description')}</h5>
      <p>{description}</p>
    </div>
  )
}

export default Content
