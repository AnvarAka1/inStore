import React from 'react'
import { Col } from 'react-bootstrap'

import Compilation from './Compilation/Compilation'
import PropTypes from 'prop-types'
const Compilations = ({ items }) => {
  const compilationsView = items.map(item => {
    return (
      <Col md={4} sm={6} key={item.id} className="mb-3">
        <Compilation {...item} />
      </Col>
    )
  })
  return <React.Fragment>{compilationsView}</React.Fragment>
}

export default Compilations
