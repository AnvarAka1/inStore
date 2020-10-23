import cookie from 'cookie'
import Cookie from 'js-cookie'
import { propOr } from 'ramda'

export const parseCookies = req => {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie)
}
export const setCookie = (key, value) => {
  Cookie.set(key, value)
}
export const getLang = (req) => {
  return propOr('ru', 'lang', parseCookies(req))
}

export const convertPhoneForBackend = phone => {
  const symbols = /[+-\s()]/g
  let phoneNumber = phone
  phoneNumber = phoneNumber.replace(symbols, '')
  return phoneNumber
}
