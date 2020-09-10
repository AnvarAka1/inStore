import React from 'react';
import { PrintedBooksOrderForm } from './Forms'
import {useModal} from "../../hooks";

function PrintedBooksOrder({ onAuthValidate, onSubmit }) {
    const paymentModal = useModal();
    const handleSubmit = () => {
        const isAuthorized = onAuthValidate()
        if(isAuthorized) {
            paymentModal.onShow()
        }
    }

    return (
        <PrintedBooksOrderForm modal={paymentModal} onSubmit={handleSubmit} />
    )
}

export default PrintedBooksOrder