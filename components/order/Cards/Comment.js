import React from 'react'
import { useTranslation } from 'react-i18next'

import { Card } from '../../index'
import { FormikGroup } from '../../UI'

function Comment ({ getFieldProps, className, ...props }) {
  const { t } = useTranslation()

  return (
    <Card className={className}>
      <Card.Header>Оставьте комментарии</Card.Header>
      <Card.Body>
        <FormikGroup
          name="comment"
          as="textarea"
          placeholder={t('Ориентир, дополнительный номер и т.д')}
          {...getFieldProps('comment')}
          size="sm"
          {...props}
        >
          {t('Комментарий')}
        </FormikGroup>
      </Card.Body>
    </Card>
  )
}

export default Comment
