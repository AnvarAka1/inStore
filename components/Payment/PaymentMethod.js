import React from 'react';
import classes from './PaymentMethod.module.scss';
const paymentMethod = ({lang, clicked}) => {
    const content = {
        leftButtons: ["Оплатить все онлайн", "Pay everything online", "Barchasini onlayn to'lash"],
        rightButtons: ['Оплатить печатные книги наличными', 'Pay printed books with cash', "Chop etilgan kitoblar uchun naqd pul bilan to'lang"]
    }

    return (
        <div className={classes.PaymentMethod}>
            <button onClick={()=> clicked(true)}>
                {content.leftButtons[lang]}
            </button>
            <button onClick={()=> clicked(false)}>
                {content.rightButtons[lang]}
            </button>
        </div>
    )

}

export default paymentMethod