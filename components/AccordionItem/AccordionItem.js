import React from 'react'
import { Accordion as BTAccordion, Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
function AccordionItem ({ title, content, eventKey }) {
  const Header = (props) => <Card.Header style={{ cursor: 'pointer' }} {...props} />
  return (
    <Card>
      <BTAccordion.Toggle as={Header} eventKey={eventKey}>
        {title}
      </BTAccordion.Toggle>
      <BTAccordion.Collapse eventKey={eventKey}>
        <Card.Body>{content}</Card.Body>
      </BTAccordion.Collapse>
    </Card>
  )
}

export default AccordionItem
