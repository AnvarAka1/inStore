import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import classes from './HeaderText.module.scss'

function HeaderText({title, subtitle, curator, date, rating, lang}) {
    const content = {
        curators: ['Куратор', 'Curator', 'Kurator'],
        dates: ['Дата', 'Date', 'Uzb'],
        ratings: ['Рейтинг', 'Rating', 'Uzb']
    }
    return (
        <Container>
            <Row>
                <Col md={{span: 7, offset: 1}}>
                    <div className={classes.HeaderText}>
                        <div>
                            <h2>{title}</h2>
                            <h5 className="text-normal mt-4 mb-4">{subtitle}</h5>
                            <div className="d-flex">
                                <h6 className="mr-5">{content.curators[lang]}: {curator}</h6>
                                <h6>{content.dates[lang]}: {date}</h6>
                            </div>
                            <h6>{content.ratings[lang]}: {rating}</h6>
                        </div>
                    </div>
                </Col>
            </Row>


        </Container>
    )
}

export default HeaderText