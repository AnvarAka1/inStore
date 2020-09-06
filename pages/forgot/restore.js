import React, {useContext, useEffect, useState} from 'react';
import {LangContext} from "../../store";
import {Alert, Button, Col, Row} from "react-bootstrap";
import {Card} from "../../components";
import {Form, Formik} from "formik";
import {object, string} from "yup";
import {FormikGroup} from "../../components/UI";
import axios from '../../axios-api'
import Router from "next/router";

function RestorePage({ query }) {
    const [count, setCount] = useState(3)
    const [isSent, setIsSent] = useState(false)
    const [error, setError] = useState(null)
    const langContext = useContext(LangContext)
    const lang = langContext.lang
    useEffect(() => {
        if(count < 1) Router.replace(`/?l=${lang}`)
        let timer = null
        if(isSent && !error){
            timer = setTimeout(() => {
                setCount(count - 1)
            }, 1000)
        }
        return () => clearTimeout(timer)
    }, [isSent, count])

    const content = {
        titles: ['Восстановление аккаунта', 'Restoring account', 'Hisobni tiklash'],
        headers: ['Измените свой пароль', 'Change your password', 'Parolni o\'zgartiring'],
        buttons: ['Отправить', 'Submit', 'Yuborish'],
        fPasswords: ['Новый пароль', 'New password', 'Yangi parol'],
        sPasswords: ['Повторите пароль', 'Repeat password', 'Parolni qayta kiriting'],
        errorMessages: ['Что то пошло не так. Попробуйте еще раз', 'Something went wrong. Try again', 'Nimadir noto\'g\'ri bajarildi. yana bir bor urinib ko `ring'],
        successMessages: [
            'Получилось. Можете войти используя Ваш новый пароль',
            'Success. You can now login with Your new password',
            'Bo\'ldi. Siz yangi parolingizdan foydalanib tizimga kirishingiz mumkin.'
        ]
    }
    const submitHandler = (values) => {
        setIsSent(false)
        setError(null)
        const formData = new FormData()
        formData.append('password', values.fPassword)
        formData.append('token', query.token)
        axios.post('/accounts/password/retrieve', formData).then(res => {
            setIsSent(true)
        }).catch(err => {
            console.log(err)
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
                            {isSent && <Alert variant={error ? 'danger' : 'success'}>
                                {error ? content.errorMessages[lang] : content.successMessages[lang]}
                            </Alert>}
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
export const getServerSideProps = ({query}) => {
    return {
        props: {
            query
        }
    }
}
export default RestorePage