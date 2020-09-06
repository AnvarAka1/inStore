import React from 'react';
import HeaderText from "./HeaderText";
import classes from './LessonHeader.module.scss'

function LessonHeader({lang, ...props}) {
    return (
        <div className={classes.LessonHeader}>
            <HeaderText lang={lang} {...props} />
        </div>
    )
}

export default LessonHeader