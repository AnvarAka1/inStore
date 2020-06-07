import React from 'react';
import {Button} from "react-bootstrap";

const payment = ({methodOfPaymentList, methodOfPayment, queryCase, methodOfPaymentClicked, lang}) => (
    <React.Fragment>
        {methodOfPaymentList.map(method => {
                // if only ebooks and only audio book => render only click and payme
                // else if only printed books => render all
                if (queryCase !== 1 && method.id < 2) return;
                return <Button
                    onClick={() =>
                        methodOfPaymentClicked(method.id, method.percent || null)
                    }
                    key={method.id}
                    className={`inactive w-100 mt-2 text-small ${methodOfPayment === method.id && "green-active"}`}
                >
                    {method.titles[lang].toUpperCase()}
                </Button>

            }
        )}
    </React.Fragment>
)

export default payment