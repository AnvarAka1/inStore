import React from 'react';
import classes from './Check.module.scss'
import Moment from 'react-moment'
import {useTranslation} from "react-i18next";

const check = ({ order,lang}) => {
    const {t} = useTranslation()
    return <table className={classes.Check}>
        <tbody>
            <tr>
                <td><p>{t('profile.orders.check.number')} №</p></td>
                <td><p>{order.id}</p></td>
            </tr>
            <tr>
                <td><p>{t('profile.orders.check.paymentType')}:</p></td>
                <td><p>{order.payment_type}</p></td>
            </tr>
            <tr>
                <td><p>{t('profile.orders.check.paymentStatus')}:</p></td>
                <td><p>{order.payment_status}</p></td>
            </tr>
            <tr>
                <td><p>{t('profile.orders.check.date')}:</p></td>
                <td><p><Moment format="hh:mm:ss DD/MM/YYYY">{order.created_at}</Moment></p></td>
            </tr>
            <tr>
                <td><p>{t('profile.orders.check.amount')}:</p></td>
                <td><p>{order.amount}</p></td>
            </tr>
        </tbody>
    </table>
}

export default check;