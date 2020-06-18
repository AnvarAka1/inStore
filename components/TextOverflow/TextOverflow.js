import React from 'react';
import classes from './TextOverflow.module.scss'
function TextOverflow ({ children }) {
    return (
        <div className={classes.TextOverflow}>
            <div>{children}</div>
        </div>
    )
}

export default TextOverflow