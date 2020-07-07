import React from 'react';
import AccordionItem from "../../AccordionItem";
import OverviewHeader from "./OverviewHeader";
import OverviewContent from "./OverviewContent";

function OverviewItem({eventKey, title, duration, lectureCount, lang}) {
    return (
        <AccordionItem
            eventKey={eventKey}
            title={
                <OverviewHeader
                    title={title}
                    duration={duration}
                    lectureCount={lectureCount}
                    lang={lang}
                />
            }
            content={<OverviewContent/>}

        />
    )
}

export default OverviewItem