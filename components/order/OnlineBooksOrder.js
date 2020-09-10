import React from 'react';
import { OnlineBooksOrderForm } from './Forms'
function OnlineBooksOrder({ onSubmit, ...props }) {

    return (
        <OnlineBooksOrderForm {...props} onSubmit={onSubmit} />
    )
}

export default OnlineBooksOrder