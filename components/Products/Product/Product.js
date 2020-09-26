import React from 'react'
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import ClampLines from 'react-clamp-lines'
import { useTranslation } from 'react-i18next'
import { prop } from 'ramda'

import classes from './Product.module.scss'

import { Stars, TextOverflow } from '../../'

const Product = (props) => {
  const { t, i18n } = useTranslation()

  const id = prop('id', props)
  const image = prop('image', props)
  const title = prop('title', props)
  const author = prop('author', props)
  const authorName = prop('title', author)
  const authorId = prop('id', author)
  const rate = prop('rate', props)
  const currentPrice = prop('current_price', props)
  const price = prop('price', props)
  const removable = prop('removable', props)
  const onAddRemoveItem = prop('onAddRemoveItem', props)

  const path = `/books/[id]?l=${i18n.language}`
  const as = `/books/${id}?l=${i18n.language}`

  const isDiscount = parseInt(currentPrice) !== parseInt(price)
  return (
    <div>
      <div className={classes.Product}>
        <Link
          href={path}
          as={as}
        >
          <a>
            <div className={classes.Image}>
              <img src={image} alt={title} />
            </div>
          </a>
        </Link>
        <Link
          href={path}
          as={as}
        >
          <a className="d-block w-100 h-100">
            <ClampLines
              text={title}
              lines={2}
              buttons={true}
              delay={200}
              ellipsis="..."
              id={`${title}${author}${id}`}
              innerElement="h5"
              className={`text-black mb-1 mt-2 without-button`}
            />
          </a>
        </Link>
        <Link href="/books/authors/[authorId]" as={`/books/authors/${authorId}`}>
          <a>
            <TextOverflow>
              <p className="text-small" title={authorName}>{authorName}</p>
            </TextOverflow>
          </a>
        </Link>

        <Stars rate={Math.round(rate)} />

        <Link
          href={path}
          as={as}
        >
          <a>
            <TextOverflow>
              <div className="d-flex align-items-end mt-1">
                <p className="text-danger text-bold mb-0 mr-1 text-md">
                  {currentPrice} {t('so\'m')}
                </p>
                {isDiscount && (
                  <p className="text-xsmall text-crossed">{price}</p>
                )}
              </div>
            </TextOverflow>
          </a>
        </Link>
      </div>
      {removable && (
        <Button
          onClick={onAddRemoveItem}
          variant="secondary text-small w-100"
          className="mt-2"
        >
          <TextOverflow>{t('Remove from cart')}</TextOverflow>
        </Button>
      )}
    </div>
  )
}

export default React.memo(Product)
