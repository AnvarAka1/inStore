import React from 'react'

import Content from './Content'
import Title from './Title'

import CourseOverview from '../CourseOverview/'

function VideoContent ({ title, author, description, overview, lang }) {
  return (
    <div className="pb-5">
      {/* Video */}
      <Title title={title} author={author} />
      <Content lang={lang} description={description} />
      <CourseOverview overviewItems={overview} lang={lang} />
    </div>
  )
}

export default VideoContent
