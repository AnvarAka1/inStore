import React, {useState} from 'react';
import {Card} from '../../components'
import {FormikGroup} from '../../components/UI'
import {Alert, Button, Col, Row} from 'react-bootstrap'
import {Form, Formik} from 'formik'
import {object, string} from 'yup'
import axios from '../../axios-api'
import {useTranslation} from "react-i18next";

function ForgotPage() {
    const { t } = useTranslation()
    const [isSent, setIsSent] = useState(false)
    const [error, setError] = useState(null)

    const initialValues = {
        email: ''
    }

    const validationSchema = object({
        email: string().email().required()
    })

    const submitHandler = (values) => {
        setError(null)
        setIsSent(false)
        const formData = new FormData()
        formData.append('email', values.email)

        axios.post('/accounts/password/forgot', formData)
            .then(() => {})
            .catch(() => setError('No such email'))
            .finally(() => setIsSent(true))
    }

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h2>{t('Restoring password')}</h2>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={{span: '6', offset: '3'}}>
                    <Card>
                        <Card.Header>{t('Enter Your email')}</Card.Header>
                        <Card.Body>
                            {isSent && (
                                <Alert variant={error ? 'danger' : 'success'}>
                                    {error || t('Success! Check your email')}
                                </Alert>
                            )}
                            <Formik onSubmit={submitHandler}
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                            >
                                {formik => (
                                    <Form onSubmit={formik.handleSubmit}>
                                        <FormikGroup
                                            name='email'
                                            placeholder='Email'
                                            size='sm'
                                            {...formik.getFieldProps('email')}
                                        >
                                            {t('Email')}
                                        </FormikGroup>
                                        <Button
                                            type='submit'
                                            className='mt-2 w-100'
                                            disabled={formik.isSubmitting}
                                        >
                                            {t('Submit')}
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ForgotPage