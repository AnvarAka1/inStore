import {prop} from "ramda";

export const orderPrintedSerializer = formValues => {

}
export const orderPrintedOnlySerializer = (formValues, printedBookIds) => {
    return {
        ...formValues,
        books: printedBookIds
    }
}

export const orderSerializer = (formValues, books) => {
    const payment_type = prop('payment_type', formValues).toString()
    return {
        ...formValues,
        payment_type,
        books,
        source
    }
}