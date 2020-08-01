import React from 'react';
import classes from './VideoHeaderSection.module.scss'
import {useTranslation} from "react-i18next";
import {Search} from "../../index";

function VideoHeaderSection({ searchControl, onSearch }) {
    const {t} = useTranslation()

    return (
        <section className={classes.VideoHeaderSection}>
            <div className={classes.Image}>
                <img className="d-block w-100" src="/images/video/main.png" alt="main"/>
                <div className={classes.Backdrop} />
            </div>
            <div className={classes.Content}>
                <h3>{t('Learn whenever and wherever you want')}</h3>
                <h5 className="text-normal">{t('More than 100 video lessons')}</h5>
                <Search control={searchControl} onSearch={onSearch}/>
            </div>
        </section>
    )
}

export default VideoHeaderSection