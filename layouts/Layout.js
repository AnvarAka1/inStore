import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import PropTypes from 'prop-types'

import axios from '../axios-api'
import * as actions from '../store/actions/index'
import { useForm } from '../hooks/'
import { AuthModal, Footer, Navbar, NavItems, Search } from '../components/'
import { useCart } from '../components/Cart'
import { useAuthModal } from '../components/Auth'
import { CATEGORIES } from '../constants/categories'
import useList from '../hooks/useList'
import * as API from '../constants/api'

const Layout = ({ children, onAuth, onLogout, isAuthorized, name, error }) => {
  const { i18n } = useTranslation()
  const { cart } = useCart()
  const [isSignUp, setIsSignUp] = useState(true)
  const [isBooksOpen, setIsBooksOpen] = useState(false)
  const [showInputMask, setShowInputMask] = useState(false)
  const bookCatsRef = useRef(null)
  const authModal = useAuthModal()
  const checkboxControl = useForm()
  const searchControl = useForm()
  const categoryList = useList(API.CATEGORY_LIST)

  useEffect(() => {
    document.addEventListener('click', handleClick)
    setShowInputMask(true)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // click outside the categories => the dropdown is closed
  const handleClick = event => {
    if (!bookCatsRef.current.contains(event.target)) setIsBooksOpen(false)
  }

  const modeHandler = mode => {
    setIsSignUp(mode)
  }

  const onSearch = event => {
    event.preventDefault()
    searchControl.clear()
    Router.push(`/search?q=${encodeURI(searchControl.value)}`)
  }

  const search = <Search control={searchControl} onSearch={onSearch} />

  const navItems = (
    <NavItems
      name={name}
      authModalShow={authModal.onShow}
      cartCount={cart.length}
      isAuthorized={isAuthorized}
      onLogout={onLogout}
    />
  )
  return (
    <>
      <Head>
        <meta name="language" content={i18n.language} />
      </Head>
      <div>
        <Navbar
          ref={bookCatsRef}
          isBooksOpen={isBooksOpen}
          booksToggle={setIsBooksOpen}
          name={name}
          isAuthorized={isAuthorized}
          cartCount={cart.length}
          search={search}
          booksCategories={categoryList.results}
          navItems={navItems}
        />
        <main className="pt-4 page">
          <Container fluid={true} className="pl-5 pr-5">
            {children}
          </Container>
        </main>
        <Footer />
        {!isAuthorized && (
          <AuthModal
            error={error}
            onAuth={onAuth}
            showInputMask={showInputMask}
            isSignUp={isSignUp}
            modal={authModal}
            modeHandler={modeHandler}
            checkboxControl={checkboxControl}
          />
        )}
      </div>
    </>
  )
}
const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.token !== null,
    name: state.auth.name,
    error: state.auth.error
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (name, email, phone, password, isSignup, setSubmitting) =>
      dispatch(actions.auth(name, email, phone, password, isSignup, setSubmitting)),
    onLogout: () => dispatch(actions.logout())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout)

Layout.propTypes = {
  children: PropTypes.any,
  error: PropTypes.any,
  isAuthorized: PropTypes.bool.isRequired,
  name: PropTypes.string,
  onAuth: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
}
