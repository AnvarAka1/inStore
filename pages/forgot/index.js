import React, {useState, useContext} from 'react';
import {Card} from '../../components'
import {FormikGroup} from '../../components/UI'
import {Row, Col, Button, Alert} from 'react-bootstrap'
import {Formik, Form} from 'formik'
import {string, object} from 'yup'
import {LangContext} from '../../store'

function ForgotPage() {
    const [isSent, setIsSent] = useState(false)
    const langContext = useContext(LangContext)

    const lang = langContext.lang
    const content = {
        titles: ['Восстановление пароля', 'Restoring password', 'Uzb'],
        headers: ['Введите Вашу электронную почту', 'Enter Your email', 'Uzb'],
        messages: ['Успешно! Проверьте свою электронную почту', 'Success! Check your email', 'Uzb'],
        labels: ['Эл. почта', 'Email', 'Uzb'],
        buttons: ['Отправить', 'Submit', 'Uzb']
    }
    const submitHandler = (values) => {
        console.log(values)
    }
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h2>{content.titles[lang]}</h2>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={{span: '6', offset: '3'}}>
                    <Card>
                        <Card.Header>{content.headers[lang]}</Card.Header>
                        <Card.Body>
                            {isSent && <Alert variant='success'>{content.messages[lang]}</Alert>}
                            <Formik onSubmit={submitHandler}
                                    initialValues={{email: ''}}
                                    validationSchema={
                                        object({
                                            email: string().email().required()
                                        })}
                            >
                                {formik => (
                                    <Form onSubmit={formik.handleSubmit}>
                                        <FormikGroup
                                            name='email'
                                            placeholder='Email'
                                            size='sm'
                                            {...formik.getFieldProps('email')}
                                        >
                                            {content.labels[lang]}
                                        </FormikGroup>
                                        <Button type='submit' className='mt-2 w-100'>{content.buttons[lang]}</Button>
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