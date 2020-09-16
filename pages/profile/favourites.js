import React from 'react'
import { defaultTo, path } from 'ramda'
import { Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { getLang } from '../../helpers/utils'
import axios from '../../axios-api'
import ErrorPage from '../404'
import { Products } from '../../components'
import { ProfileLayout } from '../../layouts'

const FavouritesPage = ({ productsProps, error }) => {
  const products = defaultTo([], productsProps)

  if (error) return <ErrorPage />
  return (
    <ProfileLayout>
      <Row>
        <Col>
          <h2>Избранные</h2>
        </Col>
      </Row>
      <Row>
        {products.length ? (
          <Products items={products} />
        ) : (
          <Col>
            <h5 className="text-secondary">Пусто</h5>
          </Col>
        )}
      </Row>
    </ProfileLayout>
  )
}
export const getServerSideProps = async ({ req }) => {
  const lang = getLang(req)

  try {
    const res = await axios.get(`${lang}/profile/favourites`, req)

    const products = path(['data', 'results'], res)
    return {
      props: {
        productsProps: products
      }
    }
  } catch (err) {
    const error = 'Error'
    return {
      props: {
        error
      }
    }
  }
}

FavouritesPage.propTypes = {
  productsProps: PropTypes.array.isRequired,
  error: PropTypes.string
}
export default FavouritesPage
