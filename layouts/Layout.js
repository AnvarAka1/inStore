import React, {useContext, useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions/index";
import {getStaticCategories} from "../lib/categories";
import Head from "next/head";
import {LangContext} from "../store";
import Router from "next/router";
import {useForm} from "../hooks/";
import {Container} from "react-bootstrap";
import {AuthModal, Footer, Navbar, NavItems, Search} from "../components/";
import {useTranslation} from "react-i18next";
import {useCart} from "../components/Cart";
import {useAuthModal} from "../components/Auth";

const Layout = ({ children, onAuth, onLogout, isAuthorized, name, error }) => {
	const { t } = useTranslation()
	const { cart } = useCart()
	const [isSignUp, setIsSignUp] = useState(true);
	const [isBooksOpen, setIsBooksOpen] = useState(false);
	const [showInputMask, setShowInputMask] = useState(false);
	const bookCatsRef = useRef(null);
	const authModal = useAuthModal()
	const langContext = useContext(LangContext);
	const checkboxControl = useForm();
	const searchControl = useForm();

	useEffect(() => {
		document.addEventListener("click", handleClick);
		setShowInputMask(true);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	// click outside the categories => the dropdown is closed
	const handleClick = event => {
		if (!bookCatsRef.current.contains(event.target)) setIsBooksOpen(false);
	};

	const modeHandler = mode => {
		setIsSignUp(mode);
	};

	const onSearch = event => {
		event.preventDefault();
		searchControl.clear();
		Router.push(`/search?q=${encodeURI(searchControl.value)}`);
	};
	// JSX
	const lang = langContext.lang;


	const search = <Search control={searchControl} lang={lang} onSearch={onSearch} />;

	const navItems = (
		<NavItems
			onChangeLang={langContext.onChangeLang}
			name={name}
			lang={lang}
			authModalShow={authModal.onShow}
			cartCount={cart.length}
			isAuthorized={isAuthorized}
			onLogout={onLogout}
		/>
	);
	return (
		<div>
			{!isAuthorized && (
				<AuthModal
					error={error}
					lang={lang}
					onAuth={onAuth}
					showInputMask={showInputMask}
					isSignUp={isSignUp}
					modal={authModal}
					modeHandler={modeHandler}
					checkboxControl={checkboxControl}
				/>
			)}
			<Head>
				<title>in-Study.uz | {t('Library of books')}</title>
			</Head>
			<Navbar
				lang={lang}
				ref={bookCatsRef}
				isBooksOpen={isBooksOpen}
				booksToggle={setIsBooksOpen}
				name={name}
				isAuthorized={isAuthorized}
				cartCount={cart.length}
				search={search}
				booksCategories={getStaticCategories()}
				navItems={navItems}
			/>
			<main className="pt-4 page">
				<Container fluid className="pl-5 pr-5">
					{children}
				</Container>
			</main>
			<Footer lang={lang} />
		</div>
	);
};
const mapStateToProps = state => {
	return {
		isAuthorized: state.auth.token !== null,
		name: state.auth.name,
		error: state.auth.error
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onAuth: (name, email, phone, password, isSignup, setSubmitting) =>
			dispatch(actions.auth(name, email, phone, password, isSignup, setSubmitting)),
		onLogout: () => dispatch(actions.logout())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
