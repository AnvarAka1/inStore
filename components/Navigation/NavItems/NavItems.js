import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { prop } from 'ramda'
import PropTypes from 'prop-types'

import classes from './NavItems.module.scss'

const NavItems = (props) => {
  const {
    authModalShow,
    cartCount,
    name,
    isAuthorized,
    onLogout,
    isMobile
  } = props

  const { t, i18n } = useTranslation()
  return (
    <div className={clsx(classes.NavItems, {
      [classes.IsMobile]: isMobile
    })}>
      <div>
        <div className="list">
          <Link href="/cart">
            <a>
              <div className="d-flex align-items-center">
                <div className={`position-relative ${isAuthorized && classes.CartRadius}`}>
                  {cartCount ? (
                    <span className="circle">
                      <p className="text-white">{cartCount}</p>
                    </span>
                  ) : null}
                  <img src="/images/icons/cart.png" className="icon icon-sm icon-cart" alt="cart" />
                </div>
                {!isAuthorized && <p className="ml-1 text-mobile-invisible">{t('Cart')}</p>}
              </div>
            </a>
          </Link>
        </div>
      </div>
      {!isAuthorized && (
        <div onClick={authModalShow} className="list">
          <a>
            <div className="d-flex align-items-center list">
              <img src="/images/icons/user.png" className="icon icon-sm mr-1" alt="login" />
              <p className="text-mobile-invisible">{t('Login')}</p>
            </div>
          </a>
        </div>
      )}
      {isAuthorized && (
        <div className="flex-column justify-content-end align-items-between text-right">
          <Link href="/profile/settings">
            <div>
              <p className="color-accent d-sm-inline-block d-none">{name}</p>
              <img
                src="/images/icons/user.png"
                className="icon icon-sm clear-left float-right d-sm-none d-block"
                alt="login"
              />
            </div>
          </Link>
          <div onClick={onLogout} className="text-secondary text-small">
            <img src="/images/icons/logout.png" className="icon mr-1" />
            {t('Logout')}
          </div>
        </div>
      )}
      <div className="position-relative">
        <a role="button" className="dropdown-hover text-secondary">
          | {t('Language')}
          <ul>
            {getLangs().map((language, index) => {
              const title = prop('title', language)
              const value = prop('value', language)
              const image = prop('image', language)
              const active = value === i18n.language

              return (
                <li key={value}>
                  <div
                    role="button"
                    onClick={() => i18n.changeLanguage(language.value)}
                    className={clsx(classes.Lang, {
                      'text-accent': active
                    })}
                  >
                    <div className={classes.LangImage}>
                      <img src={image} alt={title} />
                    </div>
                    {language.title}
                  </div>
                </li>
              )
            })}
          </ul>
        </a>
      </div>
    </div>
  )
}
const getLangs = () => [
  {
    title: 'Ру',
    image: '/images/flags/ru.png',
    value: 'ru'
  },
  {
    title: 'En',
    image: '/images/flags/en.png',
    value: 'en'
  },
  {
    title: 'Uz',
    image: '/images/flags/uz.png',
    value: 'uz'
  }
]

NavItems.propTypes = {
  authModalShow: PropTypes.bool.isRequired,
  cartCount: PropTypes.number.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default NavItems
