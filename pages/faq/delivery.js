import React from 'react';
import {useTranslation} from "react-i18next";
import {Card, Col, Row} from 'react-bootstrap'
import {PageTitle} from "../../components";

function DeliveryPage() {
    const {t} = useTranslation()
    return (
        <>
            <Row>
                <Col>
                    <PageTitle>{t('faq.delivery.title')}</PageTitle>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <p>
                                {t('faq.delivery.description')}
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default DeliveryPage