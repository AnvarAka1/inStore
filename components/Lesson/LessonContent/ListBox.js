import React from 'react'

import classes from './ListBox.module.scss'
import PropTypes from 'prop-types'
function ListBox ({ title, listItems }) {
  return (
    <div className={classes.ListBox}>
      <h4>{title}</h4>
      <ul className={classes.ListBoxWrapper}>
        {listItems.map(item => (
          <li key={item} className={classes.ListBoxItem}>
            <div>pass</div>
            <p className="ml-2">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListBox
