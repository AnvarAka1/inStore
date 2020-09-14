import React from 'react'
import Link from 'next/link'
import { path } from 'ramda'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

function GenreLink ({ href, children }) {
  const router = useRouter()

  const routerGenre = parseInt(path(['query', 'genre'], router))
  const hrefGenre = path(['query', 'genre'], href)

  const className = routerGenre === hrefGenre ? 'active' : ''

  return (
    <Link href={href} passHref={true}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
}

GenreLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default GenreLink
