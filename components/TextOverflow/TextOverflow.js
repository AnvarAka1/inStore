import React from 'react'
import clsx from 'clsx'

import classes from './TextOverflow.module.scss'

function TextOverflow ({ className, children }) {
  return (
    <div className={clsx(classes.TextOverflow, className)} title={children}>
      <div>{children}</div>
    </div>
  )
}

export default TextOverflow
