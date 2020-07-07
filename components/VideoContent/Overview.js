import React from 'react';
import {Accordion} from "react-bootstrap";
import OverviewItem from "./OverviewItem/OverviewItem";

function Overview({overviewItems, lang}) {
    const content = {
        overviews: ['Обзор курса', 'Course overview', 'Uzb']
    }
    return (
        <>
            <h4 className="mb-4">{content.overviews[lang]}</h4>
            <Accordion>
                {overviewItems.map((item, index) => (
                    <OverviewItem key={item.id} {...item} eventKey={index} lang={lang}/>
                ))}
            </Accordion>
        </>
    )
}

export default Overview