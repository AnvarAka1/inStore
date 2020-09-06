import React from 'react';
import classes from './OverviewItem.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretSquareRight} from "@fortawesome/free-regular-svg-icons";
import {useTranslation} from "react-i18next";

function OverviewHeader({ title, lectureCount, duration }) {
    const { t } = useTranslation()

    return (
        <div className={classes.OverviewHeader}>
            <div>
                <FontAwesomeIcon icon={faCaretSquareRight} />
                <h6>{title}</h6>
            </div>
            <div>
                <p>{lectureCount} {t('lectures')}</p>
                <p>{duration}</p>
            </div>

        </div>
    )
}

export default OverviewHeader