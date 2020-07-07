import React from 'react';
import classes from './PlaylistItem.module.scss'
import Link from "next/link";

function PlaylistItem({src, title}) {
    return (
        <div className={classes.PlaylistItem}>
            <Link href="/">
                <a>
                    <img src={src} alt={title}/>
                    <div className={classes.Title}>
                        <h4>{title}</h4>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default PlaylistItem