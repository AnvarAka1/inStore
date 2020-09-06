import React from 'react';
import {Card, Payment} from "../index";
import {Button} from "react-bootstrap";
import {useTranslation} from "react-i18next";

function PaymentCard({ submitPaymentMix, ...props }) {
    const { t } = useTranslation()

    return (
        <Card className="mt-3">
            <Card.Header>СПОСОБ ОПЛАТЫ</Card.Header>
            <Card.Body>
                <Payment {...props} />
                <Button
                    onClick={submitPaymentMix}
                    className="mt-2 w-100"
                    type="submit"
                >
                    {t('Checkout')}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default PaymentCard