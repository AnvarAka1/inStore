import React from 'react'

import classes from './NavigationItem.module.scss'

import CategoryLink from '../../Categories/Category/CategoryLink'

const navigationItem = ({ href, children, icon, count }) => {
  return (
    <li className={`${classes.NavigationItem} list mt-2`}>
      <CategoryLink href={href}>
        <div className="d-flex align-items-center">
          <img src={icon} alt={children} className="icon icon-sm mr-2" />
          <p className="text-lg">
            {children}
            <>{count !== null && `: ${count}`}</></p>

        </div>
      </CategoryLink>
    </li>
  )
}

export default navigationItem
