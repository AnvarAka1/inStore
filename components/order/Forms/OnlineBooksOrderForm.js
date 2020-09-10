import React from 'react';
import {Col, Row} from "react-bootstrap";
import Phone from "../Cards/Phone";
import Contact from "../Cards/Contact";
import Comment from "../Cards/Comment";
import {useModal} from "../../../hooks";
import {Form} from "formik";
import {withForm} from "../../Forms";
import {PaymentCard} from "../Payment";
import {Modal} from "../../index";

function OnlineBooksOrderForm({ formik, ...props }) {
    const { handleSubmit, getFieldProps } = formik

    return (
        <Form onSubmit={handleSubmit}>
            <Modal modal={paymentModal}>
                <PaymentCard
                    isPrintedBooks={isPrintedBooks}
                    methodOfPayment={methodOfPayment}
                    methodOfPaymentClicked={methodOfPaymentHandler}
                    methodOfPaymentList={getMethodsOfPayment()}
                    submitPaymentMix={submitPaymentMix}
                />
            </Modal>
            <Row>
                <Col md={6}>
                    <Phone getFieldProps={getFieldProps}/>
                    <Contact getFieldProps={getFieldProps}/>
                </Col>
                <Col md={6}>
                    <Comment className="mt-3" getFieldProps={getFieldProps} />
                </Col>
            </Row>
        </Form>
    )
}

export default withForm(OnlineBooksOrderForm)