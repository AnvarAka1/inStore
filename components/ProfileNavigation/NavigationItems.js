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
              key={item.id}
              {...item}
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
