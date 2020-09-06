import React from 'react';
import classes from './OverviewItem.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretSquareRight} from "@fortawesome/free-regular-svg-icons";

function OverviewHeader({ title, lectureCount, duration, lang }) {
    const content = {
        lectures: ['лекции', 'lectures', 'Uzb']
    }
    return (
        <div className={classes.OverviewHeader}>
            <div>
                <FontAwesomeIcon icon={faCaretSquareRight} />
                <h6>{title}</h6>
            </div>
            <div>
                <p>{lectureCount} {content.lectures[lang]}</p>
                <p>{duration}</p>
            </div>

        </div>
    )
}

export default OverviewHeader