import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

function CategoryItems ({ activeKey, items, onClick }) {
  return (
    <Tabs
      activeKey={activeKey}
      onSelect={(k) => onClick(k)}
    >
      {items.map(item => (
        <Tab
          key={item.id}
          eventKey={item.id}
          title={item.title}
        />
      ))}
    </Tabs>
  )
}

export default CategoryItems
