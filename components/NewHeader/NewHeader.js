import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const NewHeader = ({ title, href }) => {
  const { t } = useTranslation()

  return (
    <Link href={href}>
      <a>
        <div className="d-flex align-items-end pb-3">
          <h3 className="mb-0 mr-3 text-normal text-secondary">
            {t(title)}
          </h3>
        </div>
      </a>
    </Link>
  )
}

NewHeader.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default NewHeader
