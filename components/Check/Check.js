import React from 'react';
import classes from './Check.module.scss'
import Moment from 'react-moment'
const check = ({ order,lang}) => {
    const cols =  {
        date: ["Дата", "Date", "Sana"],
        amounts: ["Стоимость", "Cost", "Narxi"],
        paymentTypes: ["Тип оплаты", "Payment type", "To'lov turi"],
        paymentStatuses: ["Статус", "Status", "Holat"]
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
                <td><p>{cols.date[lang]}:</p></td>
                <td><p><Moment format="hh:mm:ss DD/MM/YYYY">{order.created_at}</Moment></p></td>
            </tr>
            <tr>
                <td><p>{cols.amounts[lang]}:</p></td>
                <td><p>{order.amount}</p></td>
            </tr>
        </tbody>
    </table>
}

export default check;