import React from 'react';
import classes from './VideoContent.module.scss'
import {useTranslation} from "react-i18next";

function Content({ description }) {
    const { t } = useTranslation()

    return (
        <div className={classes.Content}>
            <h5>{t('Description')}</h5>
            <p>{description}</p>
        </div>
    )
}

export default Content