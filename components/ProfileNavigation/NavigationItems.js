import React from 'react'
import { useTranslation } from 'react-i18next'

import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = ({ items }) => {
  const { t } = useTranslation()
  return (
    <>
      <ul>
        {items.map(item => {
          return (
            <NavigationItem
              href={item.href}
              count={item.count}
              key={item.id}
              icon={item.icon}
            >
              {t(item.title)}
            </NavigationItem>
          )
        })}
      </ul>
      <hr />
    </>
  )
}

export default NavigationItems
