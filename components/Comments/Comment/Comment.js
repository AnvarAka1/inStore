import React from 'react'
import Moment from 'react-moment'

import classes from './Comment.module.scss'
import PropTypes from 'prop-types'
import { Stars } from '../../'

const Comment = ({ id, user, rate, text, created_at }) => {
  return (
    <li className={classes.Comment}>
      <div className="d-flex align-items-end mb-1">
        <p className="mb-0 text-small text-bold text-black mr-2">{user.fio}</p>
        <Stars rate={rate} />
      </div>
      <p className="text-small mb-4">{text}</p>
      <p className="text-small">
        <Moment format="HH:mm:ss DD/MM/YYYY">{created_at}</Moment>
      </p>
    </li>
  )
}

export default Comment
