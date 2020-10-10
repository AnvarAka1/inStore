import Cookie from 'js-cookie'

import * as actionTypes from './actionTypes'

import axios from '../../axios-api'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, name) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    name: name
  }
}

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}
export const logout = () => {
  Cookie.remove('token')

  localStorage.removeItem('token')
  localStorage.removeItem('name')
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}
export const stopLoading = () => {
  return {
    type: actionTypes.STOP_LOADING
  }
}
export const auth = (name, email, phone, password, isSignup, setSubmitting) => {
  email = email.trim()

  return dispatch => {
    dispatch(authStart())
    const formData = new FormData()
    if (!isSignup) {
      formData.append('username', email)
    }
    formData.append('password', password)
    if (isSignup) {
      const profile = {
        fio: name,
        phone: phone
      }
      formData.append('email', email)
      formData.append('profile', JSON.stringify(profile))
    }
    const urls = ['/login', '/register']
    axios
      .post(`accounts${urls[+isSignup]}`, formData)
      .then(response => {
        const fio = +isSignup ? response.data.profile.fio : response.data.fio
        Cookie.set('token', response.data.token)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('name', fio)

        dispatch(authSuccess(response.token, fio))
      })
      .catch(() => {
        if (isSignup) {
          dispatch(authFail('User already exists'))
        } else {
          dispatch(
            authFail('Wrong email (phone number) or restore')
          )
        }
      })
      .finally(() => {
        setSubmitting()
      })
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(logout())
    } else {
      const token = localStorage.getItem('token')
      if (token) Cookie.set('token', token)
      const name = localStorage.getItem('name')
      dispatch(authSuccess(token, name))
    }
  }
}
