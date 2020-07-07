import React from 'react';
import PlaylistItem from "./PlaylistItem/PlaylistItem";
import classes from './PlaylistItems.module.scss'

function PlaylistItems({items, lang}) {
    const content = {
        titles: ['Список серий', 'Series list', 'Uzb'],
        overviews: ['Обзор курса', 'Course overview', 'Uzb']
    }
    return (
        <>
            <h4>{content.titles[lang]}</h4>
            <p>{content.overviews[lang]}</p>
            <div className={classes.PlaylistItems}>
                {items.map(item => (
                    <PlaylistItem key={item.id} {...item} lang={lang}/>
                ))}
            </div>
        </>
    )
}

export default PlaylistItems