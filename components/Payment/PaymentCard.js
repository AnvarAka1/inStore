import React from 'react';
import {Card, Payment} from "../index";
import {Button} from "react-bootstrap";

function PaymentCard({ submitPaymentMix, ...props }) {
    return (
        <Card className="mt-3">
            <Card.Header>СПОСОБ ОПЛАТЫ</Card.Header>
            <Card.Body>
                <Payment {...props} />
                <Button onClick={submitPaymentMix} className="mt-2 w-100" type="submit">
                    Оформить заказ
                </Button>
            </Card.Body>
        </Card>
    )
}

export default PaymentCard