import React from 'react'
import { Accordion } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import OverviewItem from './OverviewItem/OverviewItem'

function CourseOverview ({ overviewItems, lang }) {
  const { t } = useTranslation()

  return (
    <>
      <h4 className="mb-4">{t('Course overview')}</h4>
      <Accordion>
        {overviewItems.map((item, index) => (
          <OverviewItem key={item.id} {...item} eventKey={index} lang={lang} />
        ))}
      </Accordion>
    </>
  )
}

export default CourseOverview
