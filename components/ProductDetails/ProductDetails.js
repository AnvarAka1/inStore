import React from 'react'

import classes from './ProductDetails.module.scss'

import { Stars } from '../../components'
import Social from '../Social/Social'

const productDetails = props => {
  const rows = [
    ['Страниц: ', props.page_count],
    ['Тип обложки', props.cover],
    ['Подробнее: ', props.link]
  ]

  return (
    <div className={classes.ProductDetails}>
      <div className={classes.Image}>
        <img src={props.image} alt={props.title} />
      </div>
      <p>{props.publish_year}</p>
      <div className="d-flex align-items-center mt-4 mb-4">
        <h4 className="mb-0 mr-3">Рейтинг книги</h4>
        <Stars rate={Math.round(props.rate)} isBig={true} />
      </div>

      <table>
        <thead />
        <tbody>
          {rows.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="d-lg-flex justify-content-start mt-5 d-inline-block">
        <h5>Поделиться:</h5>
        <Social />
      </div>
    </div>
  )
}

export default productDetails
