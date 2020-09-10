import React, {useRef, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {Form} from "formik";
import Phone from "../Cards/Phone";
import Contact from "../Cards/Contact";
import Comment from "../Cards/Comment";
import Address from "../Cards/Address";
import {PaymentCard} from "../Payment";
import {PAYMENT_TYPES} from '../constants'
import {Modal} from "../../index";
import MixedPayment from "../Payment/MixedPayment";
import {useModal} from "../../../hooks";

function MixedBooksOrderForm({ formik, ...props }) {
    const { handleSubmit, getFieldProps } = formik

    const [paymentType, setPaymentType] = useState(2)
    const [step, setStep] = useState(0)

    const isOnlinePayment = useRef(false)
    const modal = useModal(false)

    const handleHide = () => {
        const newStep = step - 1
        setStep(newStep)

        if(newStep === 0) {
            modal.onHide()
        }
    }
    const handleClick = isOnline => {
        const newStep = step + 1

        setStep(newStep)
        if(newStep > 0) {
            modal.onShow()
        }

        isOnlinePayment.current = isOnline
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Modal
                modal={modal}
                onHide={handleHide}
            >
                {step === 0 && <MixedPayment onClick={handleClick} />}
                {step > 1 && (
                    <PaymentCard
                        activePaymentType={paymentType}
                        onPaymentTypeClick={setPaymentType}
                        paymentTypes={PAYMENT_TYPES}
                    />
                )}
            </Modal>
            <Row>
                <Col md={6}>
                    <Phone getFieldProps={getFieldProps} />
                    <Contact getFieldProps={getFieldProps} />
                    <Comment className="mt-3" getFieldProps={getFieldProps} />
                </Col>
                <Col md={6}>
                    <Address getFieldProps={getFieldProps} />
                </Col>
            </Row>
        </Form>
    )
}

export default MixedBooksOrderForm