import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ModalBody } from 'react-bootstrap'
import PropTypes from 'prop-types'
import ModalHeader from 'react-bootstrap/ModalHeader'

import { Modal } from '../../index'

function ConfirmModal ({ modal, onConfirm, onDecline, ...props }) {
  const { t } = useTranslation()

  return (
    <Modal modal={modal} {...props} size="sm">
      <ModalHeader>{t('Cancel the order?')}</ModalHeader>
      <ModalBody>
        <div className="mt-3 d-flex justify-content-between">
          <Button onClick={onConfirm} variant="primary">{t('Confirm')}</Button>
          <Button variant="outline-primary" onClick={onDecline}>{t('Close')}</Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ConfirmModal

ConfirmModal.propTypes = {
  modal: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired
}
