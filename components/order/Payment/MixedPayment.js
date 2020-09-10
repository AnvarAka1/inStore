import React from 'react';
import {Card} from "../../index";
import classes from "./PaymentMethod.module.scss";

function MixedPayment({ onClick }) {
    return (
        <Card className="mt-3">
            <Card.Header>СПОСОБ ОПЛАТЫ</Card.Header>
            <Card.Body>
                <div className={classes.PaymentMethod}>
                    <button onClick={() => onClick(true)}>
                        {t('Pay everything online')}
                    </button>
                    <button onClick={() => onClick(false)}>
                        {t('Pay everything online')}
                    </button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default MixedPayment