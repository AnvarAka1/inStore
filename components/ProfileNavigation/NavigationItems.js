import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = ({ items }) => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <ul>
        {items.map(item => (
          <NavigationItem
            key={item.id}
            {...item}
            href={`${item.href}?l=${i18n.language}`}
          >
            {t(item.title)}
          </NavigationItem>
        ))}
      </ul>
      <hr />
    </>
  )
}

NavigationItems.propTypes = {
  items: PropTypes.array
}

export default NavigationItems
