import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { prop, propOr } from 'ramda'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

import classes from './Comments.module.scss'
import Comment from './Comment/Comment'

import { Stars } from '../'

const Comments = (props) => {
  const { t } = useTranslation()

  const items = propOr([], 'items', props)
  const rate = prop('rate', props)
  const commentControl = prop('commentControl', props)
  const isAuthorized = prop('isAuthorized', props)
  const rateClicked = prop('rateClicked', props)
  const onSubmit = prop('onSubmit', props)
  const onAuth = prop('onAuth', props)

  return (
    <React.Fragment>
      <h2 className="mt-5 mb-2">{t('Leave review')}</h2>
      {isAuthorized ? (
        <Form onSubmit={onSubmit}>
          <Form.Control
            as="textarea"
            value={commentControl.value}
            onChange={commentControl.onChange}
            placeholder="Ваш отзыв"
          />
          <div className="d-flex justify-content-between align-items-center mt-2">
            <Stars rate={rate} isBig={true} onClick={rateClicked} />
            <Button type="submit" className="text-small">
              {t('Submit')}
            </Button>
          </div>
        </Form>
      ) : (
        <div className="mt-4">
          {t('Only authorized users can leave reviews')} <br />
          <span
            className="text-accent text-bold"
            style={{ cursor: 'pointer' }}
            onClick={onAuth}
          >
            {t('Login')}
          </span>
        </div>
      )}

      <h3 className="mt-4">Отзывы</h3>
      {items.length ? (
        <ul className={clsx(classes.Comments, {
          [classes.BottomBox]: items.length > 20
        })}
        >
          {items.map(item => (
            <Comment key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        <p className="text-secondary">{t('No reviews yet')}</p>
      )}
    </React.Fragment>
  )
}

export default Comments
