import React from 'react';
import {Card, Payment} from "../../index";
import {Button} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import clsx from "clsx";

function PaymentCard({ paymentTypes, activePaymentType, onPaymentTypeClick }) {
    const { t } = useTranslation()

    return (
        <Card className="mt-3">
            <Card.Header>СПОСОБ ОПЛАТЫ</Card.Header>
            <Card.Body>
                {paymentTypes.map(type => (
                    <Button
                        key={type.id}
                        onClick={() => onPaymentTypeClick(type.id)}
                        className={clsx("inactive", "w-100", "mt-2", "text-small", {
                            ["green-active"]: activePaymentType === type.id
                        })}
                    >
                        {t(type.title).toUpperCase()}
                    </Button>
                ))}
                <Button
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