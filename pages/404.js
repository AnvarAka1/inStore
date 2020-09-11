import React, { useEffect, useState } from 'react'
import Router from 'next/router'

const errorPage = () => {
  const [ timer, setTimer ] = useState(3)
  useEffect(
    () => {
      if (timer <= 0) {
        Router.replace('/')
      }
      const timeout = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
      return () => clearTimeout(timeout)
    },
    [ timer ]
  )
  return (
    <React.Fragment>
      <div className="w-100 d-flex justify-content-center align-items-center h-100 mt-5">
        <h2 className="text-normal text-secondary">Page not found! Redirecting at {timer}</h2>
      </div>
      <h3 className="text-normal text-secondary text-center w-100">
        Hang on to something! Redirecting speed is too high!
      </h3>
    </React.Fragment>
  )
}

export default errorPage
