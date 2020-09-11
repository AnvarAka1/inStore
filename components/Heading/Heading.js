import React from 'react'
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import { useTranslation } from 'react-i18next'

import classes from './Heading.module.scss'

const heading = ({ className, title, text, href }) => {
  const { t } = useTranslation()

  return (
    <Fade bottom={true}>
      <div className={[ className, classes.Heading ].join(' ')}>
        <h3>{title}</h3>
        <h5 className="mb-3 text-normal">{text}</h5>
        <Link href={href}>
          <a>
            <Button>{t('Open full list')}</Button>
          </a>
        </Link>
      </div>
    </Fade>
  )
}

heading.defaultProps = {
  href: '#'
}
export default heading
