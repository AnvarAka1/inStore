import React from 'react';
import {useTranslation} from "react-i18next";
import {Card, Col, Row} from 'react-bootstrap'
import {PageTitle} from "../../components";
import Head from "next/head";
import meta from "../../lib/meta.json";

function HelpPage() {
    const {t} = useTranslation()
    const title = t('faq.help.title')

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta name="description" content={title} />
            </Head>
            <Row>
                <Col>
                    <PageTitle>{title}</PageTitle>
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