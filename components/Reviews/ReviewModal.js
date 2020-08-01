import React from 'react';
import {object, string} from "yup";
import {Formik} from "formik";
import ReviewFormContent from "./ReviewFormContent";
import {Card, Modal} from "../index";
import {useTranslation} from "react-i18next";

function ReviewModal({ reviewModal, onReviewSubmit }) {
    const { t } = useTranslation()

    const initialValues = {
        rate: "",
        text: ""
    }
    const validationSchema = object({
        text: string()
            .max(1000)
            .required()
    })

    const onSubmit = (values, { setSubmitting }) => {
        setSubmitting(true);
        onReviewSubmit(values, setSubmitting)
    }

    return (
        <Modal modal={reviewModal}>
            <Card>
                <Card.Header>{t('Leave review')}</Card.Header>
                <Card.Body>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >

                        {({handleSubmit, getFieldProps}) => (
                            <ReviewFormContent
                                onSubmit={handleSubmit}
                                getFieldProps={getFieldProps}
                            />
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </Modal>

    )
}

export default ReviewModal