import React, {useContext} from 'react';
import {LangContext} from "../../store";
import {Button, Col, Row} from "react-bootstrap";
import {Card} from "../../components";
import {Form, Formik} from "formik";
import {object, string} from "yup";
import {FormikGroup} from "../../components/UI";

function RestorePage() {
    const langContext = useContext(LangContext)
    const lang = langContext.lang
    const content = {
        titles: ['Восстановление аккаунта', 'Restoring account', 'Uzb'],
        headers: ['Измените свой пароль', 'Change your password', 'Uzb'],
        buttons: ['Отправить', 'Submit', 'Uzb'],
        fPasswords: ['Новый пароль', 'New password', 'Uzb'],
        sPasswords: ['Повторите пароль', 'Repeat password', 'Uzb']
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
                            <Formik onSubmit={submitHandler}
                                    initialValues={{
                                        fPassword: '',
                                        sPassword: ''
                                    }}
                                    validationSchema={
                                        object({
                                            fPassword: string().min(6).max(20).required(),
                                            sPassword: string().min(6).max(20).required()
                                        })}
                            >
                                {formik => (
                                    <Form onSubmit={formik.handleSubmit}>
                                        <FormikGroup
                                            name='fPassword'
                                            size='sm'
                                            type='password'
                                            {...formik.getFieldProps('fPassword')}
                                        >
                                            {content.fPasswords[lang]}
                                        </FormikGroup>
                                        <FormikGroup
                                            name='sPassword'
                                            size='sm'
                                            type='password'
                                            {...formik.getFieldProps('sPassword')}
                                        >
                                            {content.sPasswords[lang]}
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

export default RestorePage