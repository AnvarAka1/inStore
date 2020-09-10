import React from 'react';
import {Formik} from "formik";

function withForm(Component, FormProps) {
    return props => {
        const {initialValues, validationSchema, onSubmit, ...rest} = props
        return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                {...FormProps}
            >
                {formik => (
                    <Component formik={formik} {...rest} />
                )}
            </Formik>
        )
    }
}

export default withForm