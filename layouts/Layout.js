import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import { getStaticCategories } from "../lib/categories";
import Head from "next/head";
import Router from "next/router";
import CategoryContext from "../store/CategoryContext";
import { useForm, useModal } from "../hooks/";
import { Container } from "react-bootstrap";
import { AuthModal, NavItems, Navbar, Footer, Search } from "../components/";

const Layout = ({ children, cartCount, onAuth, onLogout, isAuthorized, name }) => {
	const [ isSignUp, setIsSignUp ] = useState(true);
	const authModal = useModal();
	const searchControl = useForm();
	const nameControl = useForm(false, {
		label: "Ф.И.О"
	});
	const emailControl = useForm(false, {
		label: "Эл. почта"
	});
	const phoneControl = useForm(false, {
		label: "Номер телефона"
	});
	const fPasswordControl = useForm(false, {
		label: "Введите пароль",
		type: "password"
	});
	const sPasswordControl = useForm(false, {
		label: "Подтвердите пароль",
		type: "password"
	});

	const emailPhoneControl = useForm(false, {
		label: "Электронная почта или номер телефона"
	});
	const passwordControl = useForm(false, {
		label: "Введите пароль",
		type: "password"
	});
	const checkboxControl = useForm();

	const modeHandler = mode => {
		setIsSignUp(mode);
	};
	const regControls = [ nameControl, emailControl, phoneControl, fPasswordControl, sPasswordControl ];
	const authControls = [ emailPhoneControl, passwordControl ];

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
	};

	const navItems = (
		<NavItems
			name={name}
			authModalShow={authModal.onShow}
			cartCount={cartCount}
			isAuthorized={isAuthorized}
			onLogout={onLogout}
		/>
	);
	return (
		<div>
			<AuthModal
				controls={[ authControls, regControls ]}
				isSignUp={isSignUp}
				modal={authModal}
				submitted={authHandler}
				modeHandler={modeHandler}
				checkboxControl={checkboxControl}
			/>
			<Head>
				<title>InStore | Библиотека книг и видеоуроков</title>
			</Head>
			<Navbar
				name={name}
				isAuthorized={isAuthorized}
				cartCount={cartCount}
				search={<Search control={searchControl} onSearch={onSearch} />}
				booksCategories={getStaticCategories()}
				navItems={navItems}
			/>
			<main className="pt-4 page">
				<Container>{children}</Container>
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
