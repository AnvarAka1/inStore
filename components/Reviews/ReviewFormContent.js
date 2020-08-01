import React from 'react';
import {Form, useField} from "formik";
import {FormLabel, FormGroup} from 'react-bootstrap'
import {Stars} from "../index";
import {FormikGroup} from "../UI";
import {Button} from "react-bootstrap";
import {useTranslation} from "react-i18next";

function ReviewFormContent({onSubmit, getFieldProps}) {
    const { t } = useTranslation()
    const [rateField, , rateHelpers] = useField('rate')
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <FormLabel>{t('Your rate')}</FormLabel>
                <Stars
                    isBig={true}
                    onClick={rateHelpers.setValue}
                    rate={rateField.value}
                />
            </FormGroup>
            <FormikGroup
                as="textarea"
                placeholder={t('Write here (maximum 1000 characters)')}
                size="sm"
                name="text"
                {...getFieldProps('text')}
            >
                {t('Your review')}
            </FormikGroup>

            <Button type="submit">{t('Leave review')}</Button>
        </Form>
    )
}

export default ReviewFormContent