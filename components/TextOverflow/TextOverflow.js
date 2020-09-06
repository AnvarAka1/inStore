import React from 'react';
import classes from './TextOverflow.module.scss'
import clsx from "clsx";

function TextOverflow ({ className, children }) {
    return (
        <div className={clsx(classes.TextOverflow, className)} title={children}>
            <div>{children}</div>
        </div>
    )
}

export default TextOverflow