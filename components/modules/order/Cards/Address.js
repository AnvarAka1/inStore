import React from 'react';
import {AddressForm, Card} from "../../../index";
import {FormikGroup} from "../../../UI";

function Address({ getFieldProps }) {
    return (
        <Card>
            <Card.Header>АДРЕС ДОСТАВКИ</Card.Header>
            <Card.Body>
                <AddressForm getFieldProps={getFieldProps}/>
                <FormikGroup name="address" {...getFieldProps("address")} size="sm">
                    Указать в формате КВАРТАЛ-ДОМ-КВАРТИРА
                </FormikGroup>
            </Card.Body>
        </Card>
    )
}

export default Address