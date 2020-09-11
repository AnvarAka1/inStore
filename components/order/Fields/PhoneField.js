import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { ErrorMessage } from 'formik'

function PhoneField ({ getFieldProps }) {
  const [showInputMask, setShowInputMask] = useState(false)

  useEffect(() => {
    setShowInputMask(true)
  }, [])

  return showInputMask && (
    <>
      <InputMask
        className="form-control form-control-sm mt-3"
        mask="+\9\98 (99) 999-99-99"
        name="phone"
        placeholder="+998 (__) ___-__-__"
        alwaysShowMask={true}
        value={getFieldProps('phone').value}
        onChange={getFieldProps('phone').onChange}
      />
      <span className="text-danger text-small">
        <ErrorMessage name="phone" />
      </span>
    </>
  )
}

export default PhoneField
