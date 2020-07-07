import React from 'react';
import classes from './VideoContent.module.scss'

function Content({ description, lang }) {
    const content = {
        descs: ['Описание', 'Description', 'Uzb']
    }
    return (
        <div className={classes.Content}>
            <h5>{content.descs[lang]}</h5>
            <p>{description}</p>
        </div>
    )
}

export default Content