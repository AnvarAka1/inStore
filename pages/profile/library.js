import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { ProfileLayout } from '../../layouts'
import { Products } from '../../components'
import ErrorPage from '../404'
import axios from '../../axios-api'

const LibraryPage = ({ books, error }) => {
  if (error) return <ErrorPage />

  return (
    <ProfileLayout>
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

export const getServerSideProps = async ({ req, query }) => {
  const lang = ['ru', 'en', 'uz']
  let res = null
  let error = null
  try {
    res = await axios.get(lang[+query.l || 0] + '/profile/library', req)
  } catch (err) {
    error = 'Error'

    return {
      props: {
        error
      }
    }
  }
  const books = res.data.results
  return {
    props: {
      books
    }
  }
}
export default LibraryPage
