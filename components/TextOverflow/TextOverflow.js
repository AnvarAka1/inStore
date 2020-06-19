import React from 'react';
import classes from './TextOverflow.module.scss'
function TextOverflow ({ children }) {
    return (
        <div className={classes.TextOverflow} title={children}>
            <div>{children}</div>
        </div>
    )
}

export default TextOverflow