import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { path } from 'ramda'

import { ProfileLayout } from '../../layouts'
import { Products } from '../../components'
import ErrorPage from '../404'
import axios from '../../axios-api'
import { getLang } from '../../helpers/utils'

const LibraryPage = ({ books, error }) => {
  if (error) return <ErrorPage />

  return (
    <ProfileLayout title="My library">
      <Row>
        <Col>
          <h2>Моя библиотека</h2>
        </Col>
      </Row>
      <Row>
        {books && books.length ? (
          <Products items={books} />
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
    const res = await axios.get(`${lang}/profile/library`, req)
    const books = path(['data', 'results'], res)

    return {
      props: {
        books
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
LibraryPage.propTypes = {
  books: PropTypes.array.isRequired,
  error: PropTypes.string
}
export default LibraryPage
