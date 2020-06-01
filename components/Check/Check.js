import React from 'react';
import classes from './Check.module.scss'
const check = ({ order,lang}) => {
    const cols =  {
        amounts: ["Стоимость", "Cost", "Uzb"],
        paymentTypes: ["Тип оплаты", "Payment type", "Uzb"],
        paymentStatuses: ["Статус", "Status", "Uzb"]
    }
    return <table className={classes.Check}>
        <tbody>

            <tr>
                <td><p>{cols.paymentTypes[lang]}:</p></td>
                <td><p>{order.payment_type}</p></td>
            </tr>
            <tr>
                <td><p>{cols.paymentStatuses[lang]}:</p></td>
                <td><p>{order.payment_status}</p></td>
            </tr>
            <tr>
                <td><p>{cols.amounts[lang]}:</p></td>
                <td><p>{order.amount}</p></td>
            </tr>
        </tbody>
    </table>
}

export default check;