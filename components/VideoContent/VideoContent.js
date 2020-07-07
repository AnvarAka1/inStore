import React from 'react';
import Content from "./Content";
import Title from "./Title";
import Overview from "./Overview";

function VideoContent({title, author, description, overview, lang}) {
    return (
        <>
            {/* Video */}
            <Title title={title} author={author}/>
            <Content lang={lang} description={description}/>
            <Overview overviewItems={overview} lang={lang}/>
        </>
    )
}

export default VideoContent
