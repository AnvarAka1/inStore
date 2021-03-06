import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const footerItem = ({ title, link }) => {
  return (
    <li>
      <Link href={link}>
        <a className="text-small text-accent">
          <p className="mb-sm-3 mb-5 text-underline">{title}</p>
        </a>
      </Link>
    </li>
  )
}

export default footerItem
