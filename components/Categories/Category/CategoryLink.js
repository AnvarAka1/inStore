import React from 'react'
import { useRouter } from 'next/router'
import { prop, split } from 'ramda'
import Link from 'next/link'
import PropTypes from 'prop-types'

function CategoryLink ({ children, href, as }) {
  const router = useRouter()

  const route = prop(0, split('?', prop('asPath', router)))
  const asPathRoute = prop(0, split('?', as))

  const className = route === asPathRoute ? 'active' : ''

  return (
    <Link href={href} as={as} passHref={true}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
}

CategoryLink.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired
}

export default CategoryLink
