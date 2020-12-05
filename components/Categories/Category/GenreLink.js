import React from 'react'
import Link from 'next/link'
import { prop } from 'ramda'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import useQuery from '../../../helpers/useQuery'

function GenreLink ({ id, href, as, children }) {
  const { queryParams } = useQuery()
  const routerGenre = parseInt(prop('genre', queryParams))

  return (
    <Link href={href} as={as} passHref={true}>
      <a className={clsx({
        'active': routerGenre === id
      })}>
        {children}
      </a>
    </Link>
  )
}

GenreLink.propTypes = {
  id: PropTypes.number.isRequired,
  as: PropTypes.string.isRequired,
  href: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired
}

export default GenreLink
