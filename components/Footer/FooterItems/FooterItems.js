import React from 'react'
import PropTypes from 'prop-types'

import FooterItem from './FooterItem/FooterItem'

const footerItems = ({ titles, items, lang }) => {
  const footerItemsView = items.map((item, index) => {
    return <FooterItem key={index} title={item.titles[lang]} link={item.link} />
  })
  return (
    <div className="mt-3 mt-sm-0">
      <h6 className="text-accent">{titles}</h6>
      <ul>{footerItemsView}</ul>
    </div>
  )
}

export default footerItems
