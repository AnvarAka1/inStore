import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import classes from './PriceBlock.module.scss'

import Social from '../../Social/Social'

function PriceBlock ({ src, title, price, description }) {
  return (
    <Card className={classes.PriceBlock}>
      <div className={classes.Image} variant="top">
        <img src={src || '/images/video/1.png'} alt={title} />
      </div>
      <Card.Body>
        <Card.Title>{price}</Card.Title>

        <Button variant="primary">В корзину</Button>
        <Button variant="primary">Купить</Button>
        <div>{description}</div>
        <hr />
        <Social />
      </Card.Body>
    </Card>
  )
}

export default PriceBlock
