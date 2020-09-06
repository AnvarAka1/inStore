import React from 'react';
import {useTranslation} from "react-i18next";
import {Card, Col, Row} from 'react-bootstrap'
import {PageTitle} from "../../components";

function HelpPage() {
    const {t} = useTranslation()
    return (
        <>
            <Row>
                <Col>
                    <PageTitle>{t('faq.help.title')}</PageTitle>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <p>
                                {t('faq.help.descriptions.0')}
                            </p>
                            <p>
                                <b>{t('faq.help.descriptions.1')}</b>
                            </p>
                            <br/>
                            <p>
                                {t('faq.help.descriptions.2')}
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default HelpPage