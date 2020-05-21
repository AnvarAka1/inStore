import React, { useState, useEffect, useContext, useRef } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import { getStaticCategories } from "../lib/categories";
import Head from "next/head";
import { AuthModalContext } from "../store";
import Router from "next/router";
import { useForm } from "../hooks/";
import { Container } from "react-bootstrap";
import { AuthModal, NavItems, Navbar, Footer, Search } from "../components/";

const Layout = ({ children, cartCount, onAuth, onLogout, isAuthorized, name, lang }) => {
	const [ isSignUp, setIsSignUp ] = useState(true);
	const [ isBooksOpen, setIsBooksOpen ] = useState(false);
	const [ showInputMask, setShowInputMask ] = useState(false);
	const bookCatsRef = useRef(null);
	const authModalContext = useContext(AuthModalContext);
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
	const booksToggleHandler = state => {
		setIsBooksOpen(state);
	};
	const modeHandler = mode => {
		setIsSignUp(mode);
	};
	const authHandler = event => {
		event.preventDefault();
		onAuth(
			nameControl.value,
			isSignUp ? emailControl.value : emailPhoneControl.value,
			phoneControl.value,
			isSignUp ? fPasswordControl.value : passwordControl.value,
			isSignUp
		);
		console.log("Auth submitted!");
	};
	const onSearch = event => {
		event.preventDefault();
		searchControl.clear();
		Router.push(`/search?q=${encodeURI(searchControl.value)}`);
	};
	// JSX
	lang = lang || 1;
	const content = {
		titles: [ "Библиотека книг и видеоуроков", "Library of books and videolessons", "Uzb" ]
	};
	const search = <Search control={searchControl} lang={lang} onSearch={onSearch} />;
	// Right side of navbar with cart, login/logout
	const navItems = (
		<NavItems
			name={name}
			lang={lang}
			authModalShow={authModalContext.authModal.onShow}
			cartCount={cartCount}
			isAuthorized={isAuthorized}
			onLogout={onLogout}
		/>
	);
	return (
		<div>
			{!isAuthorized && (
				<AuthModal
					onAuth={onAuth}
					showInputMask={showInputMask}
					isSignUp={isSignUp}
					modal={authModalContext.authModal}
					submitted={authHandler}
					modeHandler={modeHandler}
					checkboxControl={checkboxControl}
				/>
			)}
			<Head>
				<title>InStore | {content.titles[lang]}</title>
			</Head>
			<Navbar
				lang={lang}
				ref={bookCatsRef}
				isBooksOpen={isBooksOpen}
				booksToggle={booksToggleHandler}
				name={name}
				isAuthorized={isAuthorized}
				cartCount={cartCount}
				search={search}
				booksCategories={getStaticCategories()}
				navItems={navItems}
			/>
			<main className="pt-4 page">
				<Container fluid className="pl-5 pr-5">
					{children}
				</Container>
			</main>
			<Footer />
		</div>
	);
};
const mapStateToProps = state => {
	return {
		isAuthorized: state.auth.token !== null,
		name: state.auth.name
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onAuth: (name, email, phone, password, isSignup) =>
			dispatch(actions.auth(name, email, phone, password, isSignup)),
		onLogout: () => dispatch(actions.logout())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
