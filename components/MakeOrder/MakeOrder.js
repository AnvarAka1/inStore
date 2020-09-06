import React from "react";
import {Button} from "react-bootstrap";
import classes from './MakeOrder.module.scss'
import {DELIVERY_COST} from '../../constants'
import {useCart} from "../Cart";

const makeOrder = ({productCount, currentPrice, oldPrice, ordered, lang}) => {
    const { getCase } = useCart()
    const content = {
        firstRowItems: ['товара на сумму', 'products for', 'tovarlar miqdori'],
        currencies: ['сум', "so'm", "so'm"],
        discounts: ['Все скидки', 'All discounts', 'Barcha chegirmalar'],
        totals: ['Итого', 'Total', 'Jami'],
        deliveries: ['Доставка по Ташкенту', 'Delivery in Tashkent', 'Toshkentda etkazib berish'],
        deliveryConsiderations: ['Итого (с учетом доставки)', 'Total (With delivery)', 'Jami (etkazib berish bilan birga)'],
        checkouts: ['Оформить заказ', 'Checkout', 'Buyurtma berish']
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

                {getCase() !== 0 && (
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
