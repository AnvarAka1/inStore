import React, {useState, useContext} from 'react';
import {Card} from '../../components'
import {FormikGroup} from '../../components/UI'
import {Row, Col, Button, Alert} from 'react-bootstrap'
import {Formik, Form} from 'formik'
import {string, object} from 'yup'
import {LangContext} from '../../store'
import axios from '../../axios-api'

function ForgotPage() {
    const [isSent, setIsSent] = useState(false)
    const [error, setError] = useState(null)
    const langContext = useContext(LangContext)

    const lang = langContext.lang
    const content = {
        titles: ['Восстановление пароля', 'Restoring password', 'Parolni tiklash'],
        headers: ['Введите Вашу электронную почту', 'Enter Your email', 'E-pochtangizni kiriting'],
        messages: ['Успешно! Проверьте свою электронную почту', 'Success! Check your email', 'Muvaffaqiyatli! Elektron pochtangizni tekshiring'],
        labels: ['Эл. почта', 'Email', 'Elektron pochta pochta idorasi'],
        buttons: ['Отправить', 'Submit', 'Yuborish']
    }
    const submitHandler = (values) => {
        setError(null)
        setIsSent(false)
        const formData = new FormData()
        formData.append('email', values.email)
        axios.post('/accounts/password/forgot', formData).then(res => {
        }).catch(err => {
            setError('No such email')
        }).finally(() => {
            setIsSent(true)
        })

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
                            {isSent && <Alert variant={error ? 'danger' : 'success'}>{error ? error : content.messages[lang]}</Alert>}
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
                                        <Button type='submit' className='mt-2 w-100' disabled={formik.isSubmitting}>{content.buttons[lang]}</Button>
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