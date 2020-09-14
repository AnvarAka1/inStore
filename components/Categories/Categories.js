import React from 'react'
import PropTypes from 'prop-types'

import Category from './Category/Category'
import classes from './Category/Category.module.scss'

function Categories ({ items }) {
  return (
    <>
      <ul>
        {items.map(item => (
          <li className={`${classes.Category} mt-2 list`}>
            <Category key={item.id} {...item} />
          </li>
        ))}
      </ul>
      <hr className="mt-4 pb-2" />
    </>
  )
}
Categories.propTypes = {
  items: PropTypes.array.isRequired
}
export default Categories
