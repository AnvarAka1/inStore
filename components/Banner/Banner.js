
import React from 'react'
import { prop } from 'ramda'
import { Carousel } from 'react-bootstrap'
import Link from 'next/link'
import PropTypes from 'prop-types'

const BOOK = 'book'

function Banner ({ slider }) {
  return (
    <Carousel>
      {slider.map(item => {
        const id = prop('id', item)
        const isActive = prop('is_active', item)
        const image = prop('image', item)
        const title = prop('title', item)
        const bookId = prop('book', item)
        const collectionId = prop('collection', item)
        const type = prop('type', item)
        const href = type === BOOK
          ? '/books/[id]'
          : '/books/categories/compilations/[id]'
        const as = type === BOOK
          ? `/books/${bookId}`
          : `/books/categories/compilations/${collectionId}`

        return isActive ? (
          <Carousel.Item key={id}>
            <Link href={href} as={as}>
              <a>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={title}
                />
              </a>
            </Link>
            <Carousel.Caption>
              <h3>{title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ) : null
      })}
    </Carousel>
  )
}
Banner.defaultProps = {
  slider: []
}

Banner.propTypes = {
  slider: PropTypes.array.isRequired
}

export default Banner
