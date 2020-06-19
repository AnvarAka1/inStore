import React, {useContext} from "react";
import {Button} from "react-bootstrap";
import {CartContext} from '../../store'
import classes from './MakeOrder.module.scss'
import {DELIVERY_COST} from '../../constants'

const makeOrder = ({productCount, currentPrice, oldPrice, ordered, lang}) => {
    const cartContext = useContext(CartContext)
    const content = {
        firstRowItems: ['товара на сумму', 'products for', 'Uzb'],
        currencies: ['сум', "so'm", "so'm"],
        discounts: ['Все скидки', 'All discounts', 'Uzb'],
        totals: ['Итого', 'Total', 'Uzb'],
        deliveries: ['Доставка по Ташкенту', 'Delivery in Tashkent', 'Uzb'],
        deliveryConsiderations: ['Итого (с учетом доставки)', 'Total (With delivery)', 'Uzb'],
        checkouts: ['Оформить заказ', 'Checkout', 'Uzb']
    }
    return (
        <div>
            <h6>Сумма</h6>
            <table className={classes.Table}>
                <tbody>
                <tr>
                    <th>
                        <p>{productCount} {content.firstRowItems[lang]}</p>
                    </th>
                    <th>
                        <p>{oldPrice} {content.currencies[lang]}</p>
                    </th>
                </tr>
                <tr>
                    <th>
                        <p>{content.discounts[lang]}</p>
                    </th>
                    <th>
                        <p>{currentPrice - oldPrice} {content.currencies[lang]}</p>
                    </th>
                </tr>
                <tr>
                    <th>
                        <p>{content.totals[lang]}</p>
                    </th>
                    <th>
                        <p>{currentPrice} {content.currencies[lang]}</p>
                    </th>
                </tr>

                {cartContext.getCase() !== 0 && (
                    <>
                        <tr>
                            <th>
                                <hr/>
                            </th>
                        </tr>
                        <tr>
                            <th>{content.deliveries[lang]}</th>
                            <th>{DELIVERY_COST} {content.currencies[lang]}</th>
                        </tr>
                        <tr>
                            <th>{content.deliveryConsiderations[lang]}</th>
                            <th>{currentPrice + DELIVERY_COST} {content.currencies[lang]}</th>
                        </tr>
                    </>
                )}
                </tbody>
            </table>
            <hr/>
            <Button onClick={ordered} type="submit" disabled={productCount < 1}>
                {content.checkouts[lang]}
            </Button>
        </div>
    );
};
makeOrder.defaultProps = {
    discount: 0,
    price: 0,
    codeControl: {
        value: "",
        onChange: null
    }
};
export default makeOrder;
