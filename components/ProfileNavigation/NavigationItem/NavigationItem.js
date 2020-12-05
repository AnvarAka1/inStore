import React from 'react'
import clsx from 'clsx'

import classes from './NavigationItem.module.scss'

import ProfileLink from '../../profile/ProfileLink'

const navigationItem = ({ href, children, icon, count }) => {
  return (
    <li className={clsx(classes.NavigationItem, 'list mt-2')}>
      <ProfileLink href={href} as={href}>
        <div className="d-flex align-items-center">
          <img src={icon} alt={children} className="icon icon-sm mr-2" />
          <p className="text-lg">
            {children}
            <>{count !== null && `: ${count}`}</></p>

        </div>
      </ProfileLink>
    </li>
  )
}

export default navigationItem
