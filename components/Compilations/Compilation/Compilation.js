import React from 'react'
import Link from 'next/link'

import classes from './Compilation.module.scss'

const compilation = ({ className, id, title, image }) => {
  return (
    <Link href={`/books/categories/compilations/[id]`} as={`/books/categories/compilations/${id}`}>
      <a>
        <div className={`${className} ${classes.Compilation}`}>
          <img src={image} alt={title} />
          <div>
            <h4>{title}</h4>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default compilation
