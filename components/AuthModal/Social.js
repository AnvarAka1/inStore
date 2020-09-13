import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGoogle, faVk } from '@fortawesome/free-brands-svg-icons'
import FacebookLogin from 'react-facebook-login'
import PropTypes from 'prop-types'
import classes from './AuthModal.module.scss'

function Social ({ onAuth, isSignUp }) {
  const responseFacebook = (res) => {
    const { name, email } = res
    // console.log(res)
    onAuth(name, email, '', '', isSignUp, () => {})
  }
  return (
    <div className="d-flex align-items-center justify-content-center">
      <FacebookLogin
        appId="652088452040402"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass={classes.Fb}
        textButton={''}
        icon={<FontAwesomeIcon icon={faFacebookSquare} />}
      />
      <div className={classes.Vk}>
        <FontAwesomeIcon icon={faVk} />
      </div>
      <div className={classes.Google}>
        <FontAwesomeIcon icon={faGoogle} />
      </div>
      {/* <GoogleLogin */}
      {/*    onSuccess={responseSuccessGoogle} */}
      {/*    authenticationUrl="https://example.com/auth/google" */}
      {/*    requestUrl="https://example.com/auth/google/url" */}
      {/* > */}
      {/*    Login with Google */}
      {/* </GoogleLogin> */}
    </div>
  )
}

export default Social
