import React from 'react';
import {Col, Row} from "react-bootstrap";
import Comment from "../Cards/Comment";
import Address from "../Cards/Address";
import Contact from "../Cards/Contact";
import Phone from "../Cards/Phone";
import {useModal} from "../../../hooks";
import {Form, useField} from "formik";
import {withForm} from "../../Forms";
import {PaymentCard} from "../Payment";
import {Modal} from "../../index";
import {PAYMENT_TYPES} from '../constants'

function PrintedBooksOrderForm ({ formik, modal, ...props }) {
    const { handleSubmit, getFieldProps } = formik
    const [, meta, helpers] = useField('payment_type')

    const paymentType = meta.value
    const setPaymentType = helpers.setValue


    return (
        <Form onSubmit={handleSubmit}>
            <Modal modal={modal}>
                <PaymentCard
                    activePaymentType={paymentType}
                    methodOfPaymentClicked={setPaymentType}
                    paymentTypes={PAYMENT_TYPES}
                />
            </Modal>
            <Row>
                <Col md={6}>
                    <Phone getFieldProps={getFieldProps} />
                    <Contact getFieldProps={getFieldProps} />
                </Col>
                <Col md={6}>
                    <Address getFieldProps={getFieldProps} />
                    <Comment className="mt-3" getFieldProps={getFieldProps} />
                </Col>
            </Row>
        </Form>
    )
}

export default withForm(PrintedBooksOrderForm)