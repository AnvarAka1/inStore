import React from 'react';
import {Button} from "react-bootstrap";
import clsx from "clsx";

const payment = props => {
    const {
        methodOfPaymentList,
        methodOfPayment,
        isPrintedBooks,
        methodOfPaymentClicked,
        lang
    } = props

    // if only ebooks and only audio book => render only click and payme
    // else if only printed books => render all

    return (
        <>
            {methodOfPaymentList.map(method => {
                    if (!isPrintedBooks && method.id < 2) return;

                    const active = methodOfPayment === method.id

                    return (
                        <Button
                            key={method.id}
                            onClick={() => methodOfPaymentClicked(method.id)}
                            className={clsx("inactive", "w-100", "mt-2", "text-small", {
                                ["green-active"]: active
                            })}
                        >
                            {method.titles[lang].toUpperCase()}
                        </Button>
                    )

                }
            )}
        </>
    )
}

export default payment