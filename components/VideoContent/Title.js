import React from 'react'

import classes from './VideoContent.module.scss'

function Title ({ title, author }) {
  return (
    <div className={classes.Title}>
      <h4>{title}</h4>
      <p className="text-small">{author}</p>
    </div>
  )
}

export default Title
