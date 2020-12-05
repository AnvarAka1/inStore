import React from 'react'
import { useRouter } from 'next/router'
import { prop, split } from 'ramda'
import Link from 'next/link'
import PropTypes from 'prop-types'

function ProfileLink ({ children, href }) {
  const router = useRouter()

  const route = prop('route', router)
  const hrefRoute = prop(0, split('?', href))

  const className = route === hrefRoute ? 'active' : ''

  return (
    <Link href={href} passHref={true}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
}
ProfileLink.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired
}
export default ProfileLink
